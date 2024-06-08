import { HttpBaseClient } from '~/clients/index.js';

export class ModuleContext {
  public readonly httpClient: HttpBaseClient;

  constructor(httpClient: HttpBaseClient) {
    this.httpClient = httpClient;
  }
}
