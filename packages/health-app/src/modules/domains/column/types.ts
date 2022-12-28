export interface IColumnParams {
  page: number;
  limit: number;
}

export interface IColumnResponse {
  id: string;
  imgUrl: string;
  dateTime: string;
  title: string;
  tags: string[];
}
export interface IColumn {
  id: string;
  imgUrl: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}
