import { faker } from "@faker-js/faker";

export interface IuseGetRecordChartDataProps {}

export const useGetRecordChartData = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const data = {
    months,
    primaryData: months.map(() => faker.datatype.number({ min: 0, max: 100 })),
    secondaryData: months.map(() =>
      faker.datatype.number({ min: 50, max: 100 })
    ),
  };
  return { data };
};
