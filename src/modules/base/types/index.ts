export interface BaseResponse<T = unknown> {
  succeeded: boolean;
  value: T;
  errors: string[];
}

export type SearchParameters = Record<string, string | number | boolean | null | undefined>;

export type Id = string;

export type ISODateTime = string;

export type Marketplace = 'Ozon' | 'Wildberries';
