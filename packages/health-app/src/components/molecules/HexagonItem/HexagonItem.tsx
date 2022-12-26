import React from "react";
import { Box, useTheme } from "ui-components";

export interface IHexagonItemProps {
  icon: React.ReactNode;
  title: string;
}

export const HexagonItem: React.FC<IHexagonItemProps> = ({ icon, title }) => {
  const width = 116;
  const height = 134;

  const theme = useTheme();

  const ContainerSx = {
    width,
    minWidth: width,
    height,
    position: "relative",
    color: theme.palette.light.main,
    visibility: "visible",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const ContentSx = {
    position: "absolute",
    right: 0,
    left: 0,
    zIndex: 999,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const IconWrapperSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const TextSx = {
    width: "100%",
    height: "24px",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "24px",
  };

  const HexagonSx = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    visibility: "hidden",
    transform: "rotate(120deg)",
    cursor: "pointer",
  };

  const HexagonIn1Sx = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    transform: "rotate(-60deg)",
  };
  const HexagonIn2Sx = {
    width: "100%",
    height: "100%",
    background: `linear-gradient(155.89deg, ${theme.primary[300]} 8.26%, ${theme.primary[400]} 91.18%)`,
    visibility: "visible",
    transform: "rotate(-60deg)",
  };

  const HexagonContainerSx = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <Box sx={ContainerSx}>
      <Box sx={HexagonContainerSx}>
        <Box sx={HexagonSx}>
          <Box sx={HexagonIn1Sx}>
            <Box sx={HexagonIn2Sx}></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={ContentSx}>
        <Box sx={IconWrapperSx}>{icon}</Box>
        <Box sx={TextSx}>
          <span>{title}</span>
        </Box>
      </Box>
    </Box>
  );
};
