import React from 'react'
import { useTranslation } from 'react-i18next'

const Overview = ({ currentNode }) => {
  const { t } = useTranslation()
  return (
    <section id="overview">
      <h2>{t('situ_actual')}</h2>
      <ul>
        <li>
          {currentNode.nous_positius}
          <p>{t('nous_positius')}</p>
        </li>
        <li>
          {currentNode.percentatge_increment}%<p>{t('percentatge_increment')}</p>
        </li>
        <li>
          {currentNode.curats}
          <p>{t('curats')}</p>
        </li>
        <li>
          {currentNode.exitus}
          <p>{t('exitus')}</p>
        </li>
        <li>
          {currentNode.positius_actius}
          <p>{t('positius_actius')}</p>
        </li>
      </ul>
      <ul>
        <li>
          {currentNode.positius_acumulats}
          <p>{t('positius_acumulats')}</p>
        </li>
        <li>
          {currentNode.hospitalitzats}
          <p>{t('hospitalitzats')}</p>
        </li>
        <li>
          {currentNode.uci}
          <p>UCI</p>
        </li>
        <li>
          {currentNode.professionals_positius}
          <p>{t('professionals_positius')}</p>
        </li>
        <li>
          {currentNode.proves_laboratori}
          <p>{t('proves_laboratori')}</p>
        </li>
      </ul>
    </section>
  )
}

export default Overview
