import { UpArrowIcon } from "components";
import React from "react";
import { Button } from "ui-components";

export interface BackToTopProps {}

export const BackToTop: React.FC<BackToTopProps> = () => {
  const ContainerSx = {
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.0001)",
    border: "1px solid gray.400",
    color: "gray.400",

    "&.MuiButtonBase-root": {
      width: "48px",
      height: "48px",
      minWidth: "48px",
    },
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      color="inherit"
      variant="outlined"
      sx={ContainerSx}
      onClick={handleClick}
    >
      <UpArrowIcon />
    </Button>
  );
};
