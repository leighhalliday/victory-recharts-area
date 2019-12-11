import React from "react";
import { VictoryChart, VictoryArea, VictoryTheme } from "victory";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { x: "2015", y: 6 },
  { x: "2016", y: 13 },
  { x: "2017", y: 17 },
  { x: "2018", y: 26 },
  { x: "2019", y: 38 }
];

const colors = {
  teal: "#009688",
  blueGrey: "#607D8B",
  lightGrey: "#eee"
};

export default function App() {
  return (
    <>
      <h1>Repos By Year</h1>

      <h2>Victory</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <VictoryChart theme={VictoryTheme.material} width={800} height={400}>
          <VictoryArea
            data={data}
            labels={({ datum }) => datum.y}
            style={{ data: { fill: colors.teal } }}
          />
        </VictoryChart>
      </div>

      <h2>Recharts</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", height: "400px" }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 25, right: 25, bottom: 25, left: 0 }}
          >
            <XAxis dataKey="x" />
            <YAxis dataKey="y" />
            <Area
              dataKey="y"
              isAnimationActive={false}
              name="Repos"
              fill={colors.teal}
              stroke={colors.blueGrey}
            >
              <LabelList dataKey="y" position="top" offset={10} />
            </Area>
            <CartesianGrid stroke={colors.lightGrey} strokeDasharray="5 5" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
