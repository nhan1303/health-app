import React from "react";
import { Box, Stack, SxProps, Theme, useTheme } from "ui-components";

export interface ICircularProgressBarProps {
  value: number;
  text: string;
  imgUrl?: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({
  value,
  text,
  imgUrl,
  sx,
}) => {
  const theme = useTheme();
  const width = 181;
  const cx = Math.round(181 / 2);
  const cy = cx;
  const strokeWidth = 4;
  const percent = value;

  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  const ContainerSx = {
    color: theme.light.main,
    width: "100%",
    position: "relative",

    flex: "1",
    alignItems: "center",
    justifyContent: "center",
  };

  const CircularProgressBarSx = {
    position: "relative",
    width: "181px",
    height: "181px",

    "& svg": {
      position: "relative",
      width: "100%",
      height: "100%",
      fill: "transparent",
      transform: "rotate(270deg)",
    },
    "& svg circle": {
      width: "100%",
      height: "100%",
      strokeWidth: `${strokeWidth}px`,
      stroke: "transparent",
    },
    "& svg circle:nth-child(2)": {
      stroke: theme.palette.light.main,
      filter: "drop-shadow(0px 0px 6px #FC7400)",
      strokeDasharray: `${circumference}`,
      strokeDashoffset: offset,
    },
  };
  const ContentSx = {
    position: "absolute",
    inset: 0,
  };

  const TextSx = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: theme.palette.light.main,
    textShadow: "0px 0px 6px #FC7400",
  };

  const ProgressValueSx = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: "30px",
    textAlign: "center",
    color: theme.palette.light.main,
    textShadow: "0px 0px 6px #FCA500",
  };

  const BackgroundSx = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    "&::after": {
      content: '""',
      width: "100%",
      height: "100%",

      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      background: `linear-gradient(225deg, ${theme.primary[300]} 0%, ${theme.primary[400]} 100%)`,
      mixBlendMode: "soft-light",
      opacity: 1,
    },
  };

  return (
    <Stack sx={sx as any}>
      <Stack sx={ContainerSx}>
        <Stack sx={BackgroundSx}>
          <img src={imgUrl} alt={imgUrl} />
        </Stack>

        <Box sx={CircularProgressBarSx}>
          <svg>
            <circle cx={cx} cy={cy} r={radius} />
            <circle cx={cx} cy={cy} r={radius} />
          </svg>
          <Stack
            sx={ContentSx}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box marginRight="4px" component="span" sx={TextSx}>
              {text}
            </Box>
            <Box component="span" sx={ProgressValueSx}>
              {value}%
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
