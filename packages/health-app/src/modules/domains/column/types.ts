export interface IColumnParams {
  page: number;
  limit: number;
}

export interface IColumn {
  id: string;
  imgUrl: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}
