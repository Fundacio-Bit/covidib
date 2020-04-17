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
          professionals_positius
        }
      }
    }
  `)

  let nodes = data.allDataJson.nodes.sort((a, b) => a.timestamp - b.timestamp)

  let currentNode = nodes[nodes.length - 1]
  let prevDayNode = nodes[nodes.length - 25] || null // Safety net if nodes is less than 24 in size.

  const formatAndTranslateCurrentDate = (date) => {
    let currentDate = moment(date, 'YYYY/MM/DD').format('DD MMMM YYYY')
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
        lastUpdatedTime={formatAndTranslateCurrentDate(currentNode.fecha)}
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
            hospitalized="348" 
            uci="?"
            positiveProfs="151"
            watchedProfs="228"
            uvac="612" />
          <IslandsOverview islands="MENORCA"
            hospitalized="12" 
            uci="?"
            positiveProfs="3"
            watchedProfs="7"
            uvac="20" />
          <IslandsOverview islands="EIVISSA I FORMENTERA"
            hospitalized="47" 
            uci="?"
            positiveProfs="3"
            watchedProfs="11"
            uvac="30" />
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
