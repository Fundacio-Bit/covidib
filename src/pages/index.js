import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Styled } from "theme-ui";
import "moment/locale/ca";
import "moment/locale/es";
import last from "lodash/last";
import "../util/i18n";
import { useTranslation } from "react-i18next";

import Map from "../charts/map/Map";
import Map2 from "../charts/map/Map2";
import LogDeaths from "../charts/LogDeaths";
import LogCases from "../charts/LogCases";
import StackedCases from "../charts/StackedCases";

import StatChart from "../components/StatChart";
import StatChartComparison from "../components/StatChartComparison";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "../components/Overview";
import IslandsOverview from "../components/IslandsOverview";
import Colors from "../constants/Colors";

import "./index.css";

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          percentatge_increment
          data
          nous_positius
          positius_acumulats
          curats
          exitus
          positius_actius
          hospitalitzats
          uci
          professionals_positius
          mallorca_hospitalizats
          mallorca_uci
          mallorca_professionals_positius
          mallorca_professionals_en_vig
          mallorca_uvac
          menorca_hospitalizats
          menorca_uci
          menorca_professionals_positius
          menorca_professionals_en_vig
          menorca_uvac
          ibiza_hospitalizats
          ibiza_uci
          ibiza_professionals_positius
          ibiza_professionals_en_vig
          ibiza_uvac
          proves_laboratori
        }
      }
    }
  `);

  let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp);

  const currentNode = last(nodes);
  let prevDayNode = nodes[nodes.length - 2];

  const { t } = useTranslation();

  return (
    <Styled.root>
      <Header />
      <main>
        <div className="container">
          <Overview currentNode={currentNode} prevDayNode={prevDayNode} />
          <Map />
          <StatChart
            title={t("curats_title")}
            data={nodes}
            yKey="curats"
            xKey="data"
            color={Colors.green}
          />
          <StatChartComparison
            title={t("actius_curats_title")}
            data={nodes}
            yKey="positius_actius"
            y2Key="curats"
            xKey="data"
            color={Colors.purple}
            color2={Colors.green}
          />
          <StackedCases title={t("actius_curats_title")} />
          <IslandsOverview
            islands={t("mallorca")}
            hospitalized={currentNode.mallorca_hospitalizats}
            uci={currentNode.mallorca_uci}
            positiveProfs={currentNode.mallorca_professionals_positius}
            watchedProfs={currentNode.mallorca_professionals_en_vig}
            uvac={currentNode.mallorca_uvac}
          />
          <IslandsOverview
            islands={t("menorca")}
            hospitalized={currentNode.menorca_hospitalizats}
            uci={currentNode.menorca_uci}
            positiveProfs={currentNode.menorca_professionals_positius}
            watchedProfs={currentNode.menorca_professionals_en_vig}
            uvac={currentNode.menorca_uvac}
          />
          <IslandsOverview
            islands={t("pitiuses")}
            hospitalized={currentNode.ibiza_hospitalizats}
            uci={currentNode.ibiza_uci}
            positiveProfs={currentNode.ibiza_professionals_positius}
            watchedProfs={currentNode.ibiza_professionals_en_vig}
            uvac={currentNode.ibiza_uvac}
          />
          <LogDeaths />
          <LogCases />
          <StatChart
            title={t("casos_nous_title")}
            data={nodes}
            yKey="nous_positius"
            xKey="data"
            color={Colors.red}
          />
          <StatChart
            isPercentageChart
            title={t("percentatge_increment_title")}
            data={nodes}
            yKey="percentatge_increment"
            xKey="data"
            color={Colors.blue}
          />
          <Footer />
        </div>
      </main>
    </Styled.root>
  );
};

export default Index;
