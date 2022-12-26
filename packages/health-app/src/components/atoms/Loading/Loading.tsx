import React from "react";
import { Box, CircularProgress } from "ui-components";

export interface ILoadingProps {
  isLoading: boolean;
}

export const Loading: React.FC<ILoadingProps> = ({ isLoading }) => {
  const ContainerSx = {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",

    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  if (isLoading)
    return (
      <Box sx={ContainerSx}>
        <CircularProgress />
      </Box>
    );
  return null;
};
