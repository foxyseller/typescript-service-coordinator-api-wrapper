import { BaseResponse, Id, SearchParameters, TaskMetadata } from '~/modules/base/types/index.js';

export namespace ExportTaskStructure {
  export namespace Schemas {
    export type Type =
      'Competitors';

    export interface Job {
      taskId: Id;
      tryId: Id;
      type: Type;
      taskData: string;
    }
  }

  export namespace Paths {
    export namespace Take {
      import Type = ExportTaskStructure.Schemas.Type;

      export interface RequestQuery extends SearchParameters {
        taskType: Type;
      }

      export namespace Responses {
        import Job = ExportTaskStructure.Schemas.Job;

        export type $200 = BaseResponse<Job[]>;
      }
    }

    export namespace Result {
      export type RequestBody = {
        taskId: Id;
        tryId: Id;
        metadata: TaskMetadata;
        payload: string;
      };

      export namespace Responses {
        export type $200 = BaseResponse;
      }
    }
  }
}
