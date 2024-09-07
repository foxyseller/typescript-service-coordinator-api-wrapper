import { DefaultClient } from '~/clients/index.js';
import { ModuleContext } from '~/modules/base/module-context.js';
import { ExportModule } from '~/modules/export/index.js';
import { MarketplaceScraperModule } from '~/modules/marketplace-scraper/index.js';
import { ServiceCoordinatorApiOptions } from '~/options.js';

export class ServiceCoordinatorApi {
  public readonly export: ExportModule;
  public readonly marketplaceScraper: MarketplaceScraperModule;

  constructor(options: ServiceCoordinatorApiOptions) {
    const client = new DefaultClient({
      prefixUrl: options.baseUrl,
      getBearerToken: () => {
        return options.apiKey;
      },
    });

    const context = new ModuleContext(client);

    this.export = new ExportModule(context);
    this.marketplaceScraper = new MarketplaceScraperModule(context);
  }
}

export * from './clients/index.js';
export * from './modules/base/types/index.js';
export * from './modules/export/types/index.js';
export * from './modules/marketplace-scraper/types/index.js';
