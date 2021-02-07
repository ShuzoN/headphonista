import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import lightBlue from "@material-ui/core/colors/lightBlue";

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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RadarChart
        cx={200}
        cy={150}
        outerRadius={100}
        width={400}
        height={300}
        data={props.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name={props.name}
          dataKey="A"
          stroke={lightBlue["200"]}
          fill={lightBlue["100"]}
          fillOpacity={0.6}
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
