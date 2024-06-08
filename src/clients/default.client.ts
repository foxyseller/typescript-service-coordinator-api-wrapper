import { HTTPError } from 'got';

import { BaseResponse } from '~/modules/base/types/index.js';

import { BadRequestException, HttpException } from './exceptions/index.js';
import { HttpBaseClient, HttpClientRequest, HttpClientRequestTransformer } from './http-base.client.js';


class DefaultClientRequestTransformer<T> extends HttpClientRequestTransformer<T> {
  async json(): Promise<T> {
    try {
      const json = <BaseResponse> await this.request.json();

      if (json.errors.length > 0) {
        throw new BadRequestException(json.errors.join(', '), json);
      }

      return <T> json;
    } catch (error) {
      if (error instanceof HTTPError) {
        if (error.response.statusCode === 400) {
          throw new BadRequestException(error.message, error.response.body);
        }

        throw new HttpException(error.response.statusCode, error.message, error.response.body);
      }

      throw error;
    }
  }
}

export class DefaultClient extends HttpBaseClient {
  protected transformRequest<T>(request: HttpClientRequest<T>): HttpClientRequest<T> {
    return new DefaultClientRequestTransformer(request);
  }
}
