import type {
  BaseResponse,
  Id,
  ISODateTime,
  Marketplace,
  SearchParameters,
} from '~/modules/base/types/index.js';

export namespace ParserCoordinatorApiStructure {
  export namespace ParserTask {
    export namespace Schemas {
      export type Type =
        'WildberriesApi'
        | 'OzonApi'
        | 'WildberriesScraper';

      export type SubType =
        'None'
        | 'Import'
        | 'CardStockUpdate'
        | 'CardPriceUpdate'
        | 'ScrapProductCard';

      export type Status =
        'Created'
        | 'WaitingForResult'
        | 'ProcessingResult'
        | 'Failed'
        | 'ProcessingFailed'
        | 'Successful';

      export interface Job {
        taskId: Id;
        tryId: Id;
        marketplace: Marketplace;
        type: Type;
        subType: SubType;
        taskData: string;
      }

      export type LogSeverity =
        'Unspecified'
        | 'Debug'
        | 'Information'
        | 'Warning'
        | 'Error'
        | 'Critical';

      export interface Log {
        timestamp: ISODateTime;
        severity: LogSeverity;
        text: string;
      }
    }

    export namespace Paths {
      export namespace Take {
        import ParserTaskType = ParserCoordinatorApiStructure.ParserTask.Schemas.Type;
        import ParserTaskSubType = ParserCoordinatorApiStructure.ParserTask.Schemas.SubType;

        export interface RequestQuery extends SearchParameters {
          take: number;
          parserTaskType: ParserTaskType;
          parserTaskSubType: ParserTaskSubType;
        }

        export namespace Responses {
          import ParserTaskJob = ParserCoordinatorApiStructure.ParserTask.Schemas.Job;

          export type $200 = BaseResponse<ParserTaskJob>;
        }
      }

      export namespace Result {
        import Status = ParserCoordinatorApiStructure.ParserTask.Schemas.Status;
        import Log = ParserCoordinatorApiStructure.ParserTask.Schemas.Log;

        export type RequestBody = {
          taskId: Id;
          tryId: Id;
          metadata: {
            workDuration: number;
            receivedAt: ISODateTime;
            endedAt: ISODateTime;
            status: Status;
            logs: Log[];
          };
          payload: string;
        };

        export namespace Responses {
          export type $200 = BaseResponse;
        }
      }
    }
  }
}
