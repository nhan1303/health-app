import { SxProps, Theme } from "@mui/material";
import { IMyExerciseCardItemData, MyExerciseCardItem } from "components";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Stack, useTheme } from "ui-components";

export interface IMyExerciseCardListProps {
  data: IMyExerciseCardItemData[];
  sx?: SxProps<Theme>;
}

export const MyExerciseCardList: React.FC<IMyExerciseCardListProps> = ({
  data,
  sx,
}) => {
  const theme = useTheme();
  const MyExerciseCardListSx = {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px 40px",
    paddingRight: "8px",
  };

  const ContainerSx = {
    "& > div > div:last-child > div": {
      backgroundColor: `${theme.primary[300]} !important`,
      width: "6px",
      borderRadius: "3px",
    },

    "& > div > div:last-child": {
      backgroundColor: `${theme.gray[400]} !important`,
      width: "6px",
      borderRadius: "3px",
    },
  };

  return (
    <Stack sx={[ContainerSx, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Scrollbars
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack sx={MyExerciseCardListSx}>
          {data.map((item, index: number) => {
            return <MyExerciseCardItem key={index} data={item} />;
          })}
        </Stack>
      </Scrollbars>
    </Stack>
  );
};
