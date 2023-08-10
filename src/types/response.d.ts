export type Response = {
  status: string;
  message: string;
  data: DataResponse;
  code?: number;
  meta?: Object;
};

export type DataResponse<TPayload extends object | object[]> = {
  pagination?: PaginationResponse;
  results?: TPayload;
  warnings?: string[];
} 

export type PaginationResponse = {
  page: number;
  totalPages: number;
  totalItems: number;
};
