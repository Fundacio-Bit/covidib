import React from 'react'
import { useTranslation } from 'react-i18next'

const Overview = ({
  currentNode,
  prevDayNode,
  islands,
  hospitalized,
  uci,
  positiveProfs,
  watchedProfs,
  uvac
}) => {
  const { t } = useTranslation()
  return (
    <section id="overview">
      <h2>
        {t('casos')} {islands}
      </h2>
      <ul>
        <li>
          {hospitalized} ({uci} UCI)
          <p>{t('hospitalitzats')}</p>
        </li>
        <li>
          {positiveProfs}
          <p>{t('professionals_positius')}</p>
        </li>
        <li>
          {watchedProfs}
          <p>{t('professionals_vigilancia')}</p>
        </li>
        <li>
          {uvac}
          <p>UVAC</p>
        </li>
        <li> </li>
      </ul>
    </section>
  )
}

export default Overview
