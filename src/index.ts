import { DefaultClient } from '~/clients/index.js';
import { ModuleContext } from '~/modules/base/module-context.js';
import { ParserTask } from '~/modules/parser-task/index.js';
import { ParserCoordinatorApiOptions } from '~/options.js';

export class ParserCoordinatorApi {
  public readonly parserTask: ParserTask;

  constructor(options: ParserCoordinatorApiOptions) {
    const client = new DefaultClient({
      prefixUrl: options.baseUrl,
      getBearerToken: () => {
        return options.apiKey;
      },
    });

    const context = new ModuleContext(client);

    this.parserTask = new ParserTask(context);
  }
}

export * from './clients/index.js';
export * from './modules/base/types/index.js';
export * from './modules/parser-task/types/index.js';
