import dayjs from "dayjs";
import { IColumn, IColumnResponse } from "../types";

export const transformItem = (item: IColumnResponse): IColumn => {
  const mappingData = {
    id: item.id,
    imgUrl: item.imgUrl,
    date: dayjs(item.dateTime).format("YYYY.MM.DD"),
    time: dayjs(item.dateTime).format("HH:mm"),
    title: item.title,
    tags: item.tags,
  };
  
  return mappingData;
};

export const transformList = (list: IColumnResponse[]): IColumn[] => {
  return list.map((item: IColumnResponse) => transformItem(item));
};
