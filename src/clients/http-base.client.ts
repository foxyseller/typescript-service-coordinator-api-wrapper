import { Readable } from 'node:stream';

import got, { CancelableRequest, Got, OptionsOfUnknownResponseBody } from 'got';

import { SearchParameters } from '~/modules/base/types/index.js';

export type HttpClientRequestOptions = {
  query?: string | SearchParameters | URLSearchParams | undefined;
  body?: string | object | Readable | Buffer;
};

export interface HttpClientRequest<T> {
  isCanceled: boolean;
  cancel: (reason?: string) => void;
  json: () => Promise<T>;
  buffer: () => Promise<Buffer>;
  text: () => Promise<string>;
}

export class HttpClientRequestImplementation<T> implements HttpClientRequest<T> {
  readonly request: CancelableRequest;

  constructor(request: CancelableRequest) {
    this.request = request;
  }

  get isCanceled(): boolean {
    return this.request.isCanceled;
  }

  cancel(reason?: string): void {
    return this.request.cancel(reason);
  }

  json(): Promise<T> {
    return this.request.json<T>();
  }

  buffer(): Promise<Buffer> {
    return this.request.buffer();
  }

  text(): Promise<string> {
    return this.request.text();
  }
}

export class HttpClientRequestTransformer<T> implements HttpClientRequest<T> {
  readonly request: HttpClientRequest<T>;

  constructor(request: HttpClientRequest<T>) {
    this.request = request;
  }

  get isCanceled(): boolean {
    return this.request.isCanceled;
  }

  cancel(reason?: string): void {
    return this.request.cancel(reason);
  }

  json(): Promise<T> {
    return this.request.json();
  }

  buffer(): Promise<Buffer> {
    return this.request.buffer();
  }

  text(): Promise<string> {
    return this.request.text();
  }
}

export interface HttpClientContext {
  prefixUrl?: string;
  getBearerToken(): string | undefined | Promise<string | undefined>;
}

export abstract class HttpBaseClient {
  private readonly httpClient: Got;

  constructor(context: HttpClientContext) {
    this.httpClient = got.extend({
      responseType: 'json',
      prefixUrl: context.prefixUrl,
      timeout: {
        request: 60_000,
      },
      retry: {
        limit: 4,
        methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
        statusCodes: [500],
      },
      hooks: {
        beforeRequest: [
          async (options) => {
            options.headers.Authorization = `Bearer ${await context.getBearerToken()}`;
          },
        ],
      },
    });
  }

  public get<T = unknown>(url: string, options?: HttpClientRequestOptions): HttpClientRequest<T> {
    const request = this.httpClient.get(this.buildOptions(url, options));
    return this.buildRequest<T>(request);
  }

  public post<T = unknown>(url: string, options?: HttpClientRequestOptions): HttpClientRequest<T> {
    const request = this.httpClient.post(this.buildOptions(url, options));
    return this.buildRequest<T>(request);
  }

  public put<T = unknown>(url: string, options?: HttpClientRequestOptions): HttpClientRequest<T> {
    const request = this.httpClient.put(this.buildOptions(url, options));
    return this.buildRequest<T>(request);
  }

  public delete<T = unknown>(url: string, options?: HttpClientRequestOptions): HttpClientRequest<T> {
    const request = this.httpClient.delete(this.buildOptions(url, options));
    return this.buildRequest<T>(request);
  }

  protected buildOptions(url: string, options: HttpClientRequestOptions = {}): OptionsOfUnknownResponseBody {
    if (
      options.body
      && typeof options.body === 'object'
      && !(options.body instanceof Buffer)
      && !(options.body instanceof Readable)
    ) {
      return {
        url,
        json: { ...options.body },
        searchParams: options.query,
      };
    } else {
      return {
        url,
        body: <string | Readable | Buffer | undefined> options.body,
        searchParams: options.query,
      };
    }
  }

  private buildRequest<T>(request: CancelableRequest): HttpClientRequest<T> {
    return this.transformRequest(new HttpClientRequestImplementation<T>(request));
  }

  protected transformRequest<T>(request: HttpClientRequest<T>): HttpClientRequest<T> {
    return new HttpClientRequestTransformer(request);
  }
}
