import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import LogChart from '../components/LogChart'

const LogDeaths = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(
        sort: { order: ASC, fields: data }
        filter: { data: { gt: "2020-02-29T00:00:00.000Z" }, exitus: { gt: 0 } }
      ) {
        nodes {
          data
          exitus
        }
      }
    }
  `)
  return (
    <LogChart
      data={data.allDataJson.nodes}
      title="EXITUS (logarítmic)"
      yKey="exitus"
      xKey="data"
    />
  )
}

export default LogDeaths
