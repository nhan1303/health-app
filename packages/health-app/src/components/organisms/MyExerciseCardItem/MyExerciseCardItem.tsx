
import React from "react";
import { Box, Divider, Stack } from "ui-components";

export interface IMyExerciseCardItemData {
  name: string;
  value: number;
  time: number;
}

export interface IMyExerciseCardItemProps {
  data: IMyExerciseCardItemData;
}

export const MyExerciseCardItem: React.FC<IMyExerciseCardItemProps> = ({
  data,
}) => {
  const TextSx = {
    fontFamily: "NotoSansJP",
    color: "light.main",
  };

  const NumericSx = {
    fontFamily: "Inter",
    color: "primary.main",
  };

  const MyExerciseCardItemSx = {
    width: "416px",
    height: "40px",

    fontStyle: "normal",
  };

  const DotSx = {
    ...TextSx,

    width: "13px",
    height: "7px",

    fontWeight: "300",
    fontSize: "5px",
    lineHeight: "7px",
    letterSpacing: "0.015px",
  };

  const NameSx = {
    ...TextSx,

    width: "197px",
    height: "22px",

    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "0.075px",
  };

  const ValueSx = {
    ...NumericSx,

    width: "63px",
    height: "18px",
    marginBottom: "2px",

    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.075px",
  };

  const TimeSx = {
    ...NumericSx,

    width: "68px",
    height: "22px",

    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "right",
    letterSpacing: "0.09px",
  };

  const DividerSx = {
    backgroundColor: "gray.400",
  };

  return (
    <Stack sx={MyExerciseCardItemSx} direction="column" marginBottom="2px">
      <Stack direction="row">
        <Stack flex="1" direction="row">
          <Box sx={DotSx} marginTop="7px" marginRight="3px" component="span">
            ●
          </Box>

          <Stack direction="column">
            <Box sx={NameSx} component="span">
              {data.name}
            </Box>

            <Stack sx={ValueSx} direction="row">
              <Box component="span">{data.value}</Box>
              <Box component="span">kcal</Box>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={TimeSx} marginRight="3px" direction="row">
          <Box component="span">{data.time}</Box>
          <Box component="span">min</Box>
        </Stack>
      </Stack>

      <Divider sx={DividerSx} />
    </Stack>
  );
};
