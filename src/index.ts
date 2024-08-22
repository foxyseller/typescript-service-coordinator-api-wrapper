import { DefaultClient } from '~/clients/index.js';
import { ModuleContext } from '~/modules/base/module-context.js';
import { ExportTask } from '~/modules/export-task/index.js';
import { ParserTask } from '~/modules/parser-task/index.js';
import { ServiceCoordinatorApiOptions } from '~/options.js';

export class ServiceCoordinatorApi {
  public readonly exportTask: ExportTask;
  public readonly parserTask: ParserTask;

  constructor(options: ServiceCoordinatorApiOptions) {
    const client = new DefaultClient({
      prefixUrl: options.baseUrl,
      getBearerToken: () => {
        return options.apiKey;
      },
    });

    const context = new ModuleContext(client);

    this.exportTask = new ExportTask(context);
    this.parserTask = new ParserTask(context);
  }
}

export * from './clients/index.js';
export * from './modules/base/types/index.js';
export * from './modules/parser-task/types/index.js';
export * from './modules/export-task/types/index.js';
