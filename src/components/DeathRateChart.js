/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import calculateMovingAverageSeries from "../util/movingAverage";

import StatChart from "../components/StatChart";
import Colors from "../constants/Colors";

const DeathRateChart = () => {
  const data = useStaticQuery(graphql`
  {
    allDataJson(filter: { exitus: { gt: 3 } }) {
      nodes {
        data
        exitus
      }
    }
  }
  `);

  let nodes = data.allDataJson.nodes;
  console.log(nodes)

  // moving average series
  let movingAverageSeries = calculateMovingAverageSeries(nodes, 7);
  console.log(movingAverageSeries)

  const { t } = useTranslation();
  return (
    // <div></div>
    <StatChart
      title={t("morts_per_dia_title")}
      data={movingAverageSeries}
      yKey="mitjana_mobil"
      xKey="data"
      color={Colors.primary}
    />
  );
};

export default DeathRateChart;
