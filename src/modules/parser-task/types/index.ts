import type {
  BaseResponse,
  Id,
  Marketplace,
  SearchParameters,
  TaskMetadata,
} from '~/modules/base/types/index.js';

export namespace ParserTaskStructure {
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
        | 'ScrapProductCard'
        | 'ScrapCompetitors';

    export interface Job {
      taskId: Id;
      tryId: Id;
      marketplace: Marketplace;
      type: Type;
      subType: SubType;
      taskData: string;
    }
  }

  export namespace Paths {
    export namespace Take {
      import Type = ParserTaskStructure.Schemas.Type;
      import SubType = ParserTaskStructure.Schemas.SubType;

      export interface RequestQuery extends SearchParameters {
        take: number;
        parserTaskType: Type;
        parserTaskSubType: SubType;
      }

      export namespace Responses {
        import ParserTaskJob = ParserTaskStructure.Schemas.Job;

        export type $200 = BaseResponse<ParserTaskJob>;
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
