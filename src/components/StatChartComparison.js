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

const StatChartComparison = ({
  title,
  data,
  yKey,
  xKey,
  color,
  y2Key,
  color2
}) => (
  <section>
    <h2>{title}</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 15 }}>
        <CartesianGrid strokeDasharray="3 3" />
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
        <Line
          type="monotone"
          dataKey={y2Key}
          stroke={color2}
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
      </LineChart>
    </ResponsiveContainer>
  </section>
)

export default StatChartComparison
