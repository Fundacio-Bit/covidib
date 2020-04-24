import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslation } from "react-i18next";

import Colors from "../constants/Colors";
import displayDate from "../util/displayDate";
import displayNumber from "../util/displayNumber";

const LogChart = ({ data, title, yKey, xKey, displayAlarm }) => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {displayAlarm && (
            <ReferenceLine
              x="2020-03-14T00:00:00.000Z"
              stroke={Colors.alarmYellow}
              label={{
                value: t("estat_alarma"),
                fontSize: 12,
                offset: 10,
                position: "insideTopLeft",
              }}
            />
          )}
          {displayAlarm && (
            <ReferenceLine
              x="2020-03-28T00:00:00.000Z"
              stroke={Colors.alarmRed}
              label={{
                value: t("confinament"),
                fontSize: 12,
                offset: 10,
                position: "insideTopLeft",
              }}
            />
          )}
          {displayAlarm && (
            <ReferenceLine
              x="2020-04-13T00:00:00.000Z"
              stroke={Colors.alarmYellow}
            />
          )}
          <Line
            type="monotone"
            dataKey={yKey}
            dot={false}
            stroke={Colors.primary}
            strokeWidth={3}
          />
          <XAxis dataKey={xKey} tickFormatter={displayDate} />
          <YAxis
            allowDataOverflow
            domain={["dataMin", "dataMax"]}
            scale="log"
            tickFormatter={displayNumber}
            ticks={[10, 100, 1000, 10000]}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LogChart;
