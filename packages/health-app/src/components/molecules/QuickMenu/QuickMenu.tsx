import React from "react";
import { Stack } from "ui-components";
import { QuickMenuItem } from "./QuickMenuItem";
export interface IQuickMenuData {
  icon: JSX.Element;
  title: string;
  url: string;
  badgeCount?: number;
}

export interface IQuickMenuProps {
  data: IQuickMenuData[];
}

export const QuickMenu: React.FC<IQuickMenuProps> = ({ data }) => {
  const ContainerSx = {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",

    marginRight: "16px",
  };

  return (
    <Stack sx={ContainerSx}>
      {data.map((item) => {
        return <QuickMenuItem data={item} />;
      })}
    </Stack>
  );
};
