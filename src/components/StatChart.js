import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
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

const StatChart = ({ title, data, yKey, xKey, color, isPercentageChart }) => {
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
          <XAxis dataKey={xKey} tickFormatter={displayDate} />
          <YAxis
            interval={0}
            domain={isPercentageChart ? [0, 100] : ["dataMin", "dataMax"]}
            tickFormatter={displayNumber}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default StatChart;
