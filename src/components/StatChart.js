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

import displayDate from '../util/displayDate'

const interval = 50

const StatChart = ({ title, data, yKey, xKey, color }) => (
  <section>
    <h2>{title}</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 15 }}>
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
          domain={[
            (dataMin) => Math.floor(dataMin / interval) * interval,
            (dataMax) => Math.ceil(dataMax / interval) * interval
          ]}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  </section>
)

export default StatChart
