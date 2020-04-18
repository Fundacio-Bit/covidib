import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import LogChart from '../components/LogChart'

const LogCases = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(
        sort: { order: ASC, fields: data }
        filter: {
          data: { gt: "2020-02-29T00:00:00.000Z" }
          positius_acumulats: { gt: 0 }
        }
      ) {
        nodes {
          data
          positius_acumulats
        }
      }
    }
  `)
  return (
    <LogChart
      data={data.allDataJson.nodes}
      title="POSITIUS PER COVID-19 (logarítmic)"
      yKey="positius_acumulats"
      xKey="data"
      displayAlarm
    />
  )
}

export default LogCases
