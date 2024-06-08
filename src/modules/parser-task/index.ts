import { ParserCoordinatorApiStructure } from './types/index.js';
import { Module } from '../base/module.js';

import Paths = ParserCoordinatorApiStructure.ParserTask.Paths;

export class ParserTask extends Module {
  public take(query: Paths.Take.RequestQuery) {
    return this.context.httpClient.post<Paths.Take.Responses.$200>('api/ParserTask/take', {
      query,
    });
  }

  public result(body: Paths.Result.RequestBody) {
    return this.context.httpClient.post<Paths.Result.Responses.$200>('api/ParserTask/result', {
      body,
    });
  }
}
