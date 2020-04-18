import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { chain } from 'lodash'

import displayDate from '../util/displayDate'

const StatChart = ({ title, data, yKey, xKey, color, isPercentageChart }) => {
  const filteredData = chain(data)
    .reject({ [yKey]: null })
    .sortBy('data')
    .value()
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData} margin={{ top: 15 }}>
          <Tooltip labelFormatter={displayDate} />
          <Legend />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
          <XAxis dataKey={xKey} tickFormatter={displayDate} />
          <YAxis
            interval={0}
            domain={isPercentageChart ? [0, 100] : ['dataMin', 'dataMax']}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

export default StatChart
