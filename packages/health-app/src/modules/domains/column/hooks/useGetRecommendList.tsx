import { IRecommendCardData } from "components";

export interface IuseGetRecommendListProps {}

export const useGetRecommendList = () => {
  const data: IRecommendCardData[] = [
    {
      title: "RECOMMENDED COLUMN",
      subTitle: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      subTitle: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      subTitle: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      subTitle: "健康",
    },
  ];

  return { data };
};
