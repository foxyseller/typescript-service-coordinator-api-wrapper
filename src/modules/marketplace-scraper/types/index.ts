import type { BaseResponse, Id, Marketplace, TaskMetadata } from '~/modules/base/types/index.js';

export namespace MarketplaceScraperStructure {
  export namespace Schemas {
    export type TaskType =
        'ScrapProduct'
        | 'ScrapCompetitors'
        | 'ScrapBlacklistedCompetitors';

    export interface Task {
      taskId: Id;
      tryId: Id;
      secrets: string | null;
      taskData: string | null;
      marketplace: Marketplace;
      type: TaskType;
    }
  }

  export namespace Paths {
    export namespace Take {
      import TaskType = MarketplaceScraperStructure.Schemas.TaskType;

      export type RequestBody = {
        taskTypes: TaskType[];
        marketplaces: Marketplace[];
      };

      export namespace Responses {
        import Task = MarketplaceScraperStructure.Schemas.Task;

        export type $200 = BaseResponse<Task>;
      }
    }

    export namespace Result {
      export type RequestBody = {
        taskId: Id;
        tryId: Id;
        metadata: TaskMetadata;
        payload: string | null;
      };

      export namespace Responses {
        export type $200 = BaseResponse;
      }
    }
  }
}
