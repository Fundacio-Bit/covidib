import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  XAxis,
  YAxis
} from 'recharts'
import { useTranslation } from 'react-i18next'

const StackedCases = () => {
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
  `)
  return (
    <BarChart
      width={500}
      height={300}
      data={data.allDataJson.nodes}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="positius_actius" stackId="a" fill="#82ca9d" />
      <Bar dataKey="curats" stackId="a" fill="#8884d8" />
    </BarChart>
  )
}

export default StackedCases
