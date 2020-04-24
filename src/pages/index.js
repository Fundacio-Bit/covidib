/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "theme-ui";
import "moment/locale/ca";
import "moment/locale/es";
import last from "lodash/last";
import "../util/i18n";
import calculateMovingAverageSeries from "../util/movingAverage";
import { useTranslation } from "react-i18next";

import TooltipMap from "../charts/map/TooltipMap";
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

import "../css/typography.css";

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

  // moving average series
  let movingAverageSeries = calculateMovingAverageSeries(nodes, 7);

  const { t } = useTranslation();
  
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <Header />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        <Container p={4} bg="background">
          <Overview />
          <TooltipMap />
          <Grid columns={[1, 2]} gap={4} py={3} width={300}>
            <StatChart
              title={t("curats_title")}
              data={nodes}
              yKey="curats"
              xKey="data"
              color={Colors.contrast}
            />
            <StatChartComparison
              title={t("actius_curats_title")}
              data={nodes}
              yKey="positius_actius"
              y2Key="curats"
              xKey="data"
              color={Colors.primary}
              color2={Colors.contrast}
            />
          </Grid>
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
          <Grid columns={[1, 2]} gap={4} py={3} width={300}>
            <LogDeaths />
            <LogCases />
          </Grid>
          <Grid columns={[1, 2]} gap={4} py={3} width={300}>
            <StatChart
              title={t("casos_nous_title")}
              data={nodes}
              yKey="nous_positius"
              xKey="data"
              color={Colors.primary}
            />
            <StatChart
              isPercentageChart
              title={t("percentatge_increment_title")}
              data={nodes}
              yKey="percentatge_increment"
              xKey="data"
              color={Colors.tertiary}
            />
          </Grid>
          <Grid columns={[1, 2]} gap={4} py={3} width={300}>
            <StatChart
              title={t("morts_per_dia_title")}
              // subtitle={t("mitjana_mobil_subtitle")}
              data={movingAverageSeries}
              yKey="moving_avg"
              xKey="data"
              color={Colors.primary}
            />
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
