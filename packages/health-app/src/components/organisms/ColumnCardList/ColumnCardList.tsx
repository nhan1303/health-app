import { SxProps, Theme } from "@mui/material";
import { BackToTop, ColumnCardItem, IColumnCardData } from "components";
import React from "react";
import { Button, Stack, useTheme } from "ui-components";

export interface IColumnCardListProps {
  data: IColumnCardData[];
  onMoreClick?: () => void;
  sx?: SxProps<Theme>;
}

export const ColumnCardList: React.FC<IColumnCardListProps> = ({
  data,
  onMoreClick,
  sx,
}) => {
  const theme = useTheme();

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

  const ColumnCardListSx = {
    flex: 1,
    flexWrap: "wrap",
    gap: "18px 8px",
  };

  return (
    <Stack sx={sx as any}>
      <Stack flexDirection="column">
        <Stack position="relative">
          <Stack sx={ColumnCardListSx} direction="row">
            {data.map((item, index: number) => {
              return <ColumnCardItem key={index} data={item} />;
            })}
          </Stack>

          <Stack position="absolute" right="-64px" bottom="0px">
            <BackToTop />
          </Stack>
        </Stack>

        <Stack alignItems="center" justifyContent="center" marginTop="24px">
          <Button
            onClick={onMoreClick}
            variant="contained"
            sx={SeeMoreButtonSx}
          >
            コラムをもっと見る
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
