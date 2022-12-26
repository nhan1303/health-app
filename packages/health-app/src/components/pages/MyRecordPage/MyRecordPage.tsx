import {
  BackToTop,
  BodyRecordFooter,
  MyDiaryCardList,
  MyExerciseCardList,
  MyRecommendCardList,
  TitleHeader,
} from "components";
import { RecordChart } from "components/atoms/RecordChart";
import { useGetMyDiary } from "modules/domains/my-record/hooks/useGetMyDiary";
import { useGetMyExercise } from "modules/domains/my-record/hooks/useGetMyExercise";
import { useGetMyRecommend } from "modules/domains/my-record/hooks/useGetMyRecommend";
import { useGetRecordChartData } from "modules/domains/my-record/hooks/useGetRecordChartData";
import { myRecordActions } from "modules/domains/my-record/myRecordSlice";
import {
  selectMyDiaryData,
  selectMyDiaryFilters,
  selectMyRecommendData,
} from "modules/domains/my-record/selectors";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack, useTheme } from "ui-components";

export interface IMyRecordPageProps {}

export const MyRecordPage: React.FC<IMyRecordPageProps> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { data: recordChartData } = useGetRecordChartData();
  const { data: myExerciseListData } = useGetMyExercise();

  useGetMyRecommend();
  const myRecommendData = useSelector(selectMyRecommendData);

  const myDiaryFilters = useSelector(selectMyDiaryFilters);
  useGetMyDiary(myDiaryFilters);
  const myDiaryListData = useSelector(selectMyDiaryData);

  const handleLoadMoreMyDiary = () => {
    dispatch(
      myRecordActions.setFilters({
        ...myDiaryFilters,
        page: myDiaryFilters.page + 1,
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

  const ContainerSx = {
    width: "960px",
    margin: "0 auto",

    position: "relative",
  };

  const RecordChartWrapperSx = {
    width: "100%",
    height: "304px",
    margin: "auto",
    marginBottom: "56px",
    backgroundColor: "dark.500",
  };

  const RecordChartSx = {
    width: "100%",
    flex: "1",
    padding: "16px 24px",
    backgroundColor: "dark.500",
  };

  const MyExerciseCardListWrapperSx = {
    width: "100%",
    height: "264px",

    padding: "16px 26px 16px 24px",
    backgroundColor: "dark.500",
    position: "relative",
  };
  const MyExerciseCardListSx = {
    height: "192px",
    gap: "40px 8px",
  };

  const MyDiarySx = {
    width: "229px",
    height: "32px",
    color: "gray.500",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "27px",
    letterSpacing: "0.11px",
  };

  return (
    <Box sx={ContainerSx}>
      <Stack marginTop="56px" marginBottom="56px">
        <MyRecommendCardList data={myRecommendData || []} />
      </Stack>

      <Stack sx={RecordChartWrapperSx}>
        <RecordChart
          sx={RecordChartSx}
          chartBackground={theme.dark[500]}
          headerContent={
            <Stack marginBottom="2px">
              <TitleHeader
                primaryTitle="BODY RECORD"
                secondaryTitle="2021.05.21"
              />
            </Stack>
          }
          footerContent={
            <BodyRecordFooter
              initActiveIndex={3}
              onModeChange={(item, index) => {
                console.log("test onModeChange", { item, index });
              }}
            />
          }
          data={recordChartDataConfig}
        />
      </Stack>

      <Stack
        sx={MyExerciseCardListWrapperSx}
        position="relative"
        marginBottom="56px"
      >
        <Stack marginBottom="4px">
          <TitleHeader primaryTitle="MY EXERCISE" secondaryTitle="2021.05.21" />
        </Stack>

        <MyExerciseCardList
          sx={MyExerciseCardListSx}
          data={myExerciseListData}
        />

        <Stack position="absolute" right="-64px" top="-88px">
          <BackToTop />
        </Stack>
      </Stack>

      <Stack marginBottom="64px">
        <Box sx={MyDiarySx}>MY DIARY</Box>
        <MyDiaryCardList
          onMoreClick={handleLoadMoreMyDiary}
          data={myDiaryListData || []}
        />
      </Stack>
    </Box>
  );
};
