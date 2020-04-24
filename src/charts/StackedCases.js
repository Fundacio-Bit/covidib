import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  BarChart,
  Tooltip,
  Legend,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

import Colors from "../constants/Colors";
import displayDate from "../util/displayDate";
import displayNumber from "../util/displayNumber";

const StackedCases = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(
        sort: { order: ASC, fields: data }
        filter: { positius_actius: { gt: 0 } }
      ) {
        nodes {
          data
          curats
          positius_actius
        }
      }
    }
  `);
  const { t } = useTranslation();
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data.allDataJson.nodes}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="data" tickFormatter={displayDate} />
          <YAxis tickFormatter={displayNumber} />
          <Tooltip
            labelFormatter={displayDate}
            formatter={(v, n) => [displayNumber(v), t(n)]}
          />
          <Legend formatter={t} />
          <Bar dataKey="positius_actius" stackId="a" fill={Colors.primary} />
          <Bar dataKey="curats" stackId="a" fill={Colors.contrast} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default StackedCases;
