import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  ReferenceArea,
  Line,
  XAxis,
  YAxis
} from 'recharts'
import { useTranslation } from 'react-i18next'

import Colors from '../constants/Colors'
import displayDate from '../util/displayDate'

const LogChart = ({ data, title, yKey, xKey, displayAlarm }) => {
  const { t } = useTranslation()
  return (
    <section>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <defs>
            <linearGradient id="colorAlm" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="5%"
                stopColor={Colors.alarmYellow}
                stopOpacity={0.6}
              />
              <stop
                offset="95%"
                stopColor={Colors.alarmYellow}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorConf" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor={Colors.alarmRed} stopOpacity={0.6} />
              <stop offset="95%" stopColor={Colors.alarmRed} stopOpacity={0} />
            </linearGradient>
          </defs>
          {displayAlarm && (
            <ReferenceLine
              x="2020-03-14T00:00:00.000Z"
              stroke={Colors.alarmYellow}
              label={{
                value: t('estat_alarma'),
                fontSize: 12,
                offset: 10,
                position: 'insideTopLeft'
              }}
            />
          )}
          {displayAlarm && (
            <ReferenceArea
              x1="2020-03-14T00:00:00.000Z"
              x2="2020-03-27T00:00:00.000Z"
              fill="url(#colorAlm)"
              fillOpacity={0.4}
              strokeOpacity={0.3}
            />
          )}
          {displayAlarm && (
            <ReferenceLine
              x="2020-03-28T00:00:00.000Z"
              stroke={Colors.alarmRed}
              label={{
                value: t('confinament'),
                fontSize: 12,
                offset: 10,
                position: 'insideTopLeft'
              }}
            />
          )}
          {displayAlarm && (
            <ReferenceArea
              x1="2020-03-28T00:00:00.000Z"
              x2="2020-04-12T00:00:00.000Z"
              fill="url(#colorConf)"
              fillOpacity={0.4}
              strokeOpacity={0.3}
            />
          )}
          <Line
            type="monotone"
            dataKey={yKey}
            dot={false}
            stroke={Colors.purple}
            strokeWidth={3}
          />
          <XAxis dataKey={xKey} tickFormatter={displayDate} />
          <YAxis
            scale="log"
            ticks={[10, 100, 1000, 10000]}
            domain={['dataMin', 'dataMax']}
            allowDataOverflow
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

export default LogChart
