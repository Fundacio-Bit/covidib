import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chain } from "lodash";
import { useTranslation } from "react-i18next";

import displayDate from "../util/displayDate";
import displayNumber from "../util/displayNumber";

const StatChartComparison = ({
  title,
  data,
  yKey,
  xKey,
  color,
  y2Key,
  color2,
}) => {
  const { t } = useTranslation();
  const filteredData = chain(data)
    .reject({ [yKey]: null })
    .sortBy("data")
    .value();
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData} margin={{ top: 15 }}>
          <Tooltip
            labelFormatter={displayDate}
            formatter={(v, n) => [displayNumber(v), t(n)]}
          />
          <Legend formatter={t} />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey={y2Key}
            stroke={color2}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
          <XAxis dataKey={xKey} tickFormatter={displayDate} />
          <YAxis interval={0} tickFormatter={displayNumber} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default StatChartComparison;
