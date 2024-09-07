import { BaseResponse, Id, TaskMetadata } from '~/modules/base/types/index.js';

export namespace ExportStructure {
  export namespace Schemas {
    export type TaskType =
      'Competitors';

    export interface Task {
      taskId: Id;
      tryId: Id;
      secrets: string | null;
      taskData: string | null;
      type: TaskType;
    }
  }

  export namespace Paths {
    export namespace Take {
      import TaskType = ExportStructure.Schemas.TaskType;

      export type RequestBody = {
        taskTypes: TaskType[];
      };

      export namespace Responses {
        import Task = ExportStructure.Schemas.Task;

        export type $200 = BaseResponse<Task[]>;
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
