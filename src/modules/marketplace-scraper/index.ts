import { MarketplaceScraperStructure } from './types/index.js';
import { Module } from '../base/module.js';

import Paths = MarketplaceScraperStructure.Paths;

export class MarketplaceScraperModule extends Module {
  public take(body: Paths.Take.RequestBody) {
    return this.context.httpClient.post<Paths.Take.Responses.$200>('api/MarketplaceScraper/tasks/take', {
      body,
    });
  }

  public result(body: Paths.Result.RequestBody) {
    return this.context.httpClient.post<Paths.Result.Responses.$200>('api/MarketplaceScraper/tasks/result', {
      body,
    });
  }
}
