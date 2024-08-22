export interface BaseResponse<T = unknown> {
  succeeded: boolean;
  value: T;
  errors: string[];
}

export type SearchParameters = Record<string, string | number | boolean | null | undefined>;

export type Id = string;

export type ISODateTime = string;

export type Marketplace = 'Ozon' | 'Wildberries';

export type TaskStatus =
  'Created'
  | 'WaitingForResult'
  | 'ProcessingResult'
  | 'Failed'
  | 'ProcessingFailed'
  | 'Successful';

export interface Log {
  timestamp: ISODateTime;
  severity: LogSeverity;
  text: string;
}

export type LogSeverity =
  'Unspecified'
  | 'Debug'
  | 'Information'
  | 'Warning'
  | 'Error'
  | 'Critical';

export interface TaskMetadata {
  workDuration: number;
  receivedAt: ISODateTime;
  endedAt: ISODateTime;
  status: TaskStatus;
  logs: Log[];
}
