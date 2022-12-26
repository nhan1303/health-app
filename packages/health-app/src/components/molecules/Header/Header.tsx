import {
  ChallengeIcon,
  DrawerMenu,
  InfoIcon,
  IQuickMenuData,
  Logo,
  MemoIcon,
  QuickMenu,
} from "components";
import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "ui-components";

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const ContainerSx = {
    width: "100%",
    minHeight: "64px",
    backgroundColor: "dark.500",
  };

  const WrapperSx = {
    width: "960px",
    margin: "0 auto",

    flex: "1",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const quickMenuItems: IQuickMenuData[] = [
    {
      icon: <MemoIcon />,
      title: "自分の記録",
      url: "/my-record",
    },
    {
      icon: <ChallengeIcon />,
      title: "チャレンジ",
      url: "/top",
    },
    {
      icon: <InfoIcon />,
      title: "お知らせ",
      url: "/notification",
      badgeCount: 1,
    },
  ];

  return (
    <Stack sx={ContainerSx}>
      <Stack sx={WrapperSx}>
        <Link to="/">
          <Logo />
        </Link>
        <Stack flex={1} flexWrap="wrap" direction="row" alignItems="center">
          <QuickMenu data={quickMenuItems} />
          <DrawerMenu />
        </Stack>
      </Stack>
    </Stack>
  );
};
