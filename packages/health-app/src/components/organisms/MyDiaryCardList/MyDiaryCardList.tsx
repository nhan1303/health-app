import { SxProps, Theme } from "@mui/material";
import { IMyDiaryCardItemData, MyDiaryCardItem } from "components";
import React from "react";
import { Button, Stack, useTheme } from "ui-components";

export interface IMyDiaryCardListProps {
  data: IMyDiaryCardItemData[];
  onMoreClick?: () => void;
  sx?: SxProps<Theme>;
}

export const MyDiaryCardList: React.FC<IMyDiaryCardListProps> = ({
  data,
  onMoreClick,
  sx,
}) => {
  const theme = useTheme();

  const MyDiaryCardListSx = {
    flex: 1,
    flexWrap: "wrap",
    gap: "12px 12px",

    paddingBottom: "6px",
  };

  const SeeMoreButtonSx = {
    width: "288px",
    padding: "14px 4px 16px",

    fontFamily: "NotoSansJP",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "26px",
    textAlign: "center",
    color: "light.main",

    backgroundColor: `linear-gradient(32.95deg, ${theme.primary[300]} 8.75%, ${theme.primary[400]} 86.64%)`,
  };

  return (
    <Stack sx={sx as any}>
      <Stack sx={MyDiaryCardListSx} direction="row">
        {data.map((item, index) => (
          <MyDiaryCardItem key={index} data={item} />
        ))}
      </Stack>

      <Stack alignItems="center" justifyContent="center" marginTop="24px">
        <Button onClick={onMoreClick} variant="contained" sx={SeeMoreButtonSx}>
          自分の日記をもっと見る
        </Button>
      </Stack>
    </Stack>
  );
};
