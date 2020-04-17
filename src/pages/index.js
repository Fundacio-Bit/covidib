import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Styled } from "theme-ui";
// import moment from "moment"

import StatChart from "../components/StatChart";
import StatChartComparison from "../components/StatChartComparison";
import LogChart from "../components/LogChart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overview from "../components/Overview";

import "./index.css";

const RED = "rgb(203, 36, 49)";
const GREEN = "rgb(40, 167, 69)";
const PURPLE = "rgb(102, 51, 153)";
const GOLD = "rgb(255, 182, 30)";
const BLUE = "rgb(136, 132, 216)";

export default () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          Actius
          CasosNous
          PositivosAcumulados
          Recuperacions
          Increment
          PositivosAcumulados
          fecha
        }
      }
    }
  `);

  // let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp)
  let nodes = data.allDataJson.nodes;

  let currentNode = nodes[nodes.length - 1];
  let prevDayNode = nodes[nodes.length - 25] || null; // Safety net if nodes is less than 24 in size.

  return (
    <Styled.root>
      <Header lastUpdatedTime={"Dilluns, 13 d'Abril, 2020"} />
      <main>
        <div className="container">
          <Overview currentNode={currentNode} prevDayNode={prevDayNode} />
          <LogChart data={nodes} />
          <StatChart
            title="RECUPERACIONS DEFINITIVES"
            data={nodes}
            yKey="Recuperacions"
            color={GREEN}
          />
          <StatChartComparison
            title="COMPARACIÓ CASOS ACTIUS i RECUPERACIONS"
            data={nodes}
            yKey="Actius"
            y2Key="Recuperacions"
            color={PURPLE}
            color2={GREEN}
          />
          <StatChart
            title="CASOS NOUS"
            data={nodes}
            yKey="CasosNous"
            color={BLUE}
          />
          <StatChart
            title="INCREMENT CASOS %"
            data={nodes}
            yKey="Increment"
            color={GREEN}
          />
          {/* <StatChart
            title="Evolucio casos notificats COVID-19"
            data={nodes}
            yKey="PositivosAcumulados"
            color={RED}
          />
          <StatChart title="PositivosAcumulados" data={nodes} yKey="PositivosAcumulados" color={GOLD} /> */}
          <Footer />
        </div>
      </main>
    </Styled.root>
  );
};
