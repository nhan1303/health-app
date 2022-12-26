import { Badge, IQuickMenuData } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "ui-components";

export interface IQuickMenuItemProps {
  data: IQuickMenuData;
}

export const QuickMenuItem: React.FC<IQuickMenuItemProps> = ({ data }) => {
  const ContainerSx = {
    width: "160px",
    height: "48px",
    flexDirection: "row",
    alignItems: "center",

    "& a": {
      textDecoration: "none",
    },
  };

  const IconSx = {
    color: "primary.400",
  };

  const TitleSx = {
    color: "light.main",
    marginLeft: "8px",
    marginRight: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "23px",

    "&:hover": {
      color: "primary.main",
    },
  };

  return (
    <Stack sx={ContainerSx}>
      <Badge badgeContent={data?.badgeCount}>
        <Stack sx={IconSx}>{data.icon}</Stack>
      </Badge>
      <Link to={data.url}>
        <Box sx={TitleSx} component="span">
          {data.title}
        </Box>
      </Link>
    </Stack>
  );
};
