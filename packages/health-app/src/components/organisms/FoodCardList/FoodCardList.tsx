import { SxProps, Theme } from "@mui/material";
import { BackToTop, FoodCardItem, IFoodCardItemData } from "components";
import { selectLoading } from "modules/domains/common/selectors";
import React from "react";
import { useSelector } from "react-redux";
import { Button, Stack, useTheme } from "ui-components";

export interface IFoodCardListProps {
  data: IFoodCardItemData[];
  onMoreClick?: () => void;
  sx?: SxProps<Theme>;
}

export const FoodCardList: React.FC<IFoodCardListProps> = ({
  data,
  onMoreClick,
  sx,
}) => {
  const theme = useTheme();
  const isLoading = useSelector(selectLoading);

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

    background: `linear-gradient(32.95deg, ${theme.primary[300]} 8.75%, ${theme.primary[400]} 86.64%)`,
  };

  const FoodCardListSx = {
    flex: 1,
    flexWrap: "wrap",
    gap: "8px",
  };

  return (
    <Stack sx={sx as any}>
      <Stack flexDirection="column">
        <Stack position="relative">
          <Stack sx={FoodCardListSx} direction="row">
            {data.map((item, index: number) => {
              return <FoodCardItem key={index} data={item} />;
            })}
          </Stack>

          <Stack position="absolute" right="-64px" bottom="50%">
            <BackToTop />
          </Stack>
        </Stack>

        <Stack alignItems="center" justifyContent="center" marginTop="28px">
          <Button
            disabled={isLoading}
            onClick={onMoreClick}
            variant="contained"
            sx={SeeMoreButtonSx}
          >
            記録をもっと見る
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
