import React from "react";

import { SxProps, Theme, useTheme } from "@mui/material";
import { ChartData, ChartOptions } from "chart.js";
import { LineChart } from "components";
import { Box, If, Stack } from "ui-components";
export interface IRecordChartProps {
  data: Omit<ChartData<"line">, "labels"> &
    Required<Pick<ChartData<"line">, "labels">>;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  sx?: SxProps<Theme>;
  chartBackground?: string;
}

export const RecordChart: React.FC<IRecordChartProps> = ({
  data,
  headerContent,
  footerContent,
  chartBackground,
  sx,
}) => {
  const theme = useTheme();

  const options: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: theme.palette.gray[400],
          drawTicks: false,
          drawBorder: false,
        },

        ticks: {
          font: {
            size: 12,
            lineHeight: "15px",
            weight: "400",
            family: "Inter",
          },
          color: theme.palette.gray[400],

          callback: function (index: number) {
            const value = data.labels[index];
            return !Number.isNaN(value) ? `${value as number} 月` : value;
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      CustomCanvasBackgroundColor: {
        color: chartBackground || theme.palette.dark[600],
      },
    },
  };

  const ContainerSx = {
    flex: "1",
    backgroundColor: "dark.600",
    fontFamily: "Inter",
    color: "light.main",
    position: "relative",
  };

  const ChartWrapperSx = {
    width: "99%",
    height: "100%",
    position: "relative",
  };

  return (
    <Stack
      direction="column"
      sx={[ContainerSx, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <If condition={!!headerContent}>{headerContent}</If>

      <Box sx={ChartWrapperSx}>
        <LineChart options={options} data={data} />
      </Box>

      <If condition={!!footerContent}>{footerContent}</If>
    </Stack>
  );
};
