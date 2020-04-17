import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"
import moment from "moment"

import StatChart from "../components/StatChart"
import StatChartComparison from "../components/StatChartComparison"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Overview from "../components/Overview"
import IslandsOverview from "../components/IslandsOverview"

import "./index.css"

const RED = "rgb(203, 36, 49)"
const GREEN = "rgb(40, 167, 69)"
const PURPLE = "rgb(102, 51, 153)"
const GOLD = "rgb(255, 182, 30)"
const BLUE = "rgb(136, 132, 216)"

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
          fecha,
          data,
          nous_positius,
          positius_acumulats,
          curats,
          exitus,
          positius_actius,
          hospitalitzats,
          uci,
          professionals_positius,
          mallorca_hospitalizats,
          mallorca_professionals_positius,
          mallorca_professionals_en_vig,
          mallorca_uvac,
          menorca_hospitalizats,
          menorca_professionals_positius,
          menorca_professionals_en_vig,
          menorca_uvac,
          ibiza_hospitalizats,
          ibiza_professionals_positius,
          ibiza_professionals_en_vig,
          ibiza_uvac
        
        }
      }
    }
  `)

  let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp)

  let currentNode = nodes[nodes.length - 1]
  let prevDayNode = nodes[nodes.length - 2]

  const formatAndTranslateCurrentDate = (date) => {
    let currentDate = moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY')
    currentDate = currentDate.replace('January', 'Gener')
    currentDate = currentDate.replace('February', 'Febrer')
    currentDate = currentDate.replace('March', 'Març')
    currentDate = currentDate.replace('April', 'Abril')
    currentDate = currentDate.replace('May', 'Maig')
    currentDate = currentDate.replace('June', 'Juny')
    currentDate = currentDate.replace('July', 'Juliol')
    currentDate = currentDate.replace('August', 'Agost')
    currentDate = currentDate.replace('September', 'Setembre')
    currentDate = currentDate.replace('October', 'Octubre')
    currentDate = currentDate.replace('November', 'Novembre')
    currentDate = currentDate.replace('December', 'Desembre')
    return currentDate.toLowerCase()
  }

  return (
    <Styled.root>
      <Header
        lastUpdatedTime={formatAndTranslateCurrentDate(currentNode.data)}
      />
      <main>
        <div className="container">
          <Overview currentNode={currentNode} prevDayNode={prevDayNode} />
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
          <IslandsOverview islands="MALLORCA" 
            hospitalized={currentNode.mallorca_hospitalizats}
            uci="?"
            positiveProfs={currentNode.mallorca_professionals_positius}
            watchedProfs={currentNode.mallorca_professionals_en_vig}
            uvac={currentNode.mallorca_uvac} />
          <IslandsOverview islands="MENORCA"
            hospitalized={currentNode.menorca_hospitalizats}
            uci="?"
            positiveProfs={currentNode.menorca_professionals_positius}
            watchedProfs={currentNode.menorca_professionals_en_vig}
            uvac={currentNode.menorca_uvac} />
          <IslandsOverview islands="EIVISSA I FORMENTERA"
            hospitalized={currentNode.ibiza_hospitalizats}
            uci="?"
            positiveProfs={currentNode.ibiza_professionals_positius}
            watchedProfs={currentNode.ibiza_professionals_en_vig}
            uvac={currentNode.ibiza_uvac} />
          <StatChart
            title="CASOS NOUS"
            data={nodes}
            yKey="CasosNous"
            color={RED}
          />
          <StatChart
            title="INCREMENT CASOS %"
            data={nodes}
            yKey="Increment"
            color={BLUE}
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
  )
}
