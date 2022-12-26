
import React from "react";
import { Box, If, Stack } from "ui-components";

export interface ITitleHeaderProps {
  primaryTitle?: string;
  secondaryTitle?: string;
}

export const TitleHeader: React.FC<ITitleHeaderProps> = ({
  primaryTitle,
  secondaryTitle,
}) => {
  const TitleSx = {
    fontWeight: 400,
    whiteSpace: "pre-line",

    fontFamily: "Inter",
    fontStyle: "normal",
    color: "light.main",
  };

  const PrimaryTitleSx = {
    width: 96,
    height: 36,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.15px",
  };

  const SecondaryTitleSx = {
    width: 146,
    height: 27,
    fontSize: "22px",
    lineHeight: "27px",
    letterSpacing: "0.11px",
  };

  return (
    <Stack direction="row" alignItems="center">
      <If condition={!!primaryTitle}>
        <Box component="span" sx={[TitleSx, PrimaryTitleSx]}>
          {primaryTitle}
        </Box>
      </If>

      <If condition={!!secondaryTitle}>
        <Box component="span" sx={[TitleSx, SecondaryTitleSx]}>
          {secondaryTitle}
        </Box>
      </If>
    </Stack>
  );
};
