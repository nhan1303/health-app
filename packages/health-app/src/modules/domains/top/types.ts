export interface IFoodParams {
  page: number;
  limit: number;
}

export interface IFood {
  id: string;
  text: string;
  imgUrl: string;
}

export interface IProgress {
  value: number;
  description: string;
}
