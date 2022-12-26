import { SxProps, Theme } from "@mui/material";

import { HexagonItem } from "components/molecules";
import React from "react";
import { Stack } from "ui-components";

export interface IHexagonListProps {
  data: any[];
  sx?: SxProps<Theme>;
}

export const HexagonList: React.FC<IHexagonListProps> = ({ data, sx }) => {
  const ContainerSx = {
    gap: "84px",

    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Stack sx={[ContainerSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      {data.map((item, index: number) => (
        <HexagonItem key={index} {...item} />
      ))}
    </Stack>
  );
};
