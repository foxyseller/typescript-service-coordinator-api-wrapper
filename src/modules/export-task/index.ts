import { ExportTaskStructure } from './types/index.js';
import { Module } from '../base/module.js';

import Paths = ExportTaskStructure.Paths;

export class ExportTask extends Module {
  public take(query: Paths.Take.RequestQuery) {
    return this.context.httpClient.post<Paths.Take.Responses.$200>('api/ExportTask/take', {
      query,
    });
  }

  public result(body: Paths.Result.RequestBody) {
    return this.context.httpClient.post<Paths.Result.Responses.$200>('api/ExportTask/result', {
      body,
    });
  }
}
