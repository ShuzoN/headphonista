import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    chart: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const CHART_XAXIS = 200;
const CHART_YAXIS = 150;
const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const CHART_RADIUS = 100;
const CHART_OPACITY = 0.6;

export type ChartData = {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
};

export const ItemRadarChart = (props: {
  name: string;
  data: ChartData[];
}): JSX.Element => {
  const c = useStyles();

  return (
    <div className={c.chart}>
      <RadarChart
        cx={CHART_XAXIS}
        cy={CHART_YAXIS}
        outerRadius={CHART_RADIUS}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
        data={props.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name={props.name}
          dataKey="A"
          stroke={lightBlue["200"]}
          fill={lightBlue["100"]}
          fillOpacity={CHART_OPACITY}
        />
      </RadarChart>
    </div>
  );
};

export function createChartData(
  resolution: number,
  redution: number,
  quality: number,
  comfortable: number,
  soundField: number,
  portability: number
) {
  const createElement = (subject: string, value: number): ChartData => {
    return {
      subject: subject,
      A: value,
      B: value,
      fullMark: 150,
    };
  };

  return [
    createElement("細やかさ", resolution),
    createElement("遮音性", redution),
    createElement("音質", quality),
    createElement("つけ心地", comfortable),
    createElement("音場の広さ", soundField),
    createElement("携帯性", portability),
  ];
}
