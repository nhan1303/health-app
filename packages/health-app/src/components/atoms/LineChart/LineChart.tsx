import {
  CategoryScale,
  Chart,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { ChartProps, Line } from "react-chartjs-2";

const CustomCanvasBackgroundColorPlugin = {
  id: "CustomCanvasBackgroundColor",
  beforeDraw: (
    chart: Chart,
    args: { cancelable: true },
    options: any
  ): boolean | void => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "primary.main";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CustomCanvasBackgroundColorPlugin
);

export interface ILineChartProps extends Omit<ChartProps<"line">, "type"> {}

export const LineChart: React.FC<ILineChartProps> = (props) => {
  return <Line {...props} />;
};
