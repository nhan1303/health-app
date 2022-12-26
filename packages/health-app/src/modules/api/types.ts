export interface APIResponse<T = any> {
  code: string;
  message: string;
  data?: T;
}

export interface IPageInfo {
  currentPage: number;
  nextPage: number | null;
  totalCount: number;
  limit: number;
}

export interface IListResponse<T> {
  data: T[];
  pageInfo: IPageInfo;
}
