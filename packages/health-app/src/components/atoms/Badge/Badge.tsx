import { BadgeProps as MuiBadgeProps, SxProps, Theme } from "@mui/material";

import React from "react";
import { If, Stack } from "ui-components";

export interface IBadgeProps extends MuiBadgeProps {
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  sx?: SxProps<Theme>;
  outline?: boolean;
}

export const Badge: React.FC<IBadgeProps> = ({
  children,
  badgeContent,
  sx,
  outline,
}) => {
  const BadgeSx = {
    width: "32px",
    height: "32px",

    position: "relative",
    backgroundColor: "transparent",

    alignItems: "center",
    justifyContent: "center",

    ...(outline ? { outline: "1px solid #707070" } : {}),
  };

  const BadgeContentSx = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "primary.500",
    color: "light.main",

    position: "absolute",
    top: 0,
    right: "-8px",

    alignItems: "center",
    justifyContent: "center",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "12px",
  };
  return (
    <Stack sx={[BadgeSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      <If condition={!!badgeContent}>
        <Stack sx={BadgeContentSx}>{badgeContent}</Stack>
      </If>
      {children}
    </Stack>
  );
};
