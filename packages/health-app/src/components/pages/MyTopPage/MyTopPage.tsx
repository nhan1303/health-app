import { useTheme } from "@mui/material";
import circularProgressBackground from "assets/images/d01.jpg";
import { CircularProgressBar } from "components";
import { CupIcon, KnifeIcon } from "components/atoms";

import { RecordChart } from "components/atoms/RecordChart/RecordChart";
import { FoodCardList, HexagonList } from "components/organisms";
import { useGetBodyFatPercentageData } from "modules/domains/top/hooks/useGetBodyFatPercentageData";
import { useGetFoodList } from "modules/domains/top/hooks/useGetFoodList";
import { useGetProgress } from "modules/domains/top/hooks/useGetProgress";

import {
  selectBodyFatPercentage,
  selectFoodData,
  selectFoodFilters,
  selectProgress,
} from "modules/domains/top/selectors";
import { topActions } from "modules/domains/top/topSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "ui-components";

export interface IMyTopPageProps {}

export const MyTopPage: React.FC<IMyTopPageProps> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const foodFilters = useSelector(selectFoodFilters);
  useGetFoodList(foodFilters);
  const foodData = useSelector(selectFoodData);

  useGetProgress();
  const progressData = useSelector(selectProgress);

  useGetBodyFatPercentageData();
  const recordChartData = useSelector(selectBodyFatPercentage) as any;

  const handleLoadMoreFood = () => {
    dispatch(
      topActions.setFoodFilters({
        ...foodFilters,
        page: foodFilters.page + 1,
      })
    );
  };

  const recordChartDataConfig = React.useMemo(() => {
    return {
      labels: recordChartData.months,
      datasets: [
        {
          data: recordChartData.primaryData,
          borderWidth: 3,
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.main,
        },
        {
          data: recordChartData.secondaryData,
          borderWidth: 3,
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.main,
        },
      ],
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordChartData]);

  const hexagonData = [
    {
      icon: <KnifeIcon />,
      title: "Morning",
    },
    {
      icon: <KnifeIcon />,
      title: "Lunch",
    },
    {
      icon: <KnifeIcon />,
      title: "Dinner",
    },
    {
      icon: <CupIcon />,
      title: "Snack",
    },
  ];

  const CircularProgressBarSx = {
    minWidth: "540px",
  };

  const RecordChartSx = {
    width: "100%",
    flex: "1",
    padding: "12px 98px 18px 53px",
    backgroundColor: "dark.600",
  };

  const HexagonListSx = {
    width: "716px",
    margin: "25px auto 0",
    gap: "84px",
  };

  const FoodCardListSx = {
    width: "960px",
    margin: "25px auto 64px",
  };

  return (
    <Box>
      <Stack direction="row" height="312px">
        <CircularProgressBar
          sx={CircularProgressBarSx}
          value={progressData.value}
          text={progressData.description}
          imgUrl={circularProgressBackground}
        />
        <RecordChart sx={RecordChartSx} data={recordChartDataConfig} />
      </Stack>

      <HexagonList sx={HexagonListSx} data={hexagonData} />
      <FoodCardList
        onMoreClick={handleLoadMoreFood}
        sx={FoodCardListSx}
        data={foodData || []}
      />
    </Box>
  );
};
