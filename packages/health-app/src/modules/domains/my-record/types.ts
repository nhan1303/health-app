export interface IMyDiaryParams {
  page: number;
  limit: number;
}

export interface IMyDiary {
  id: string;
  date: string;
  time: string;
  description: string;
}

export interface IMyRecommendParams {}
export interface IMyRecommend {
  id: string;
  title: string;
  subTitle: string;
  imgUrl: string;
}
