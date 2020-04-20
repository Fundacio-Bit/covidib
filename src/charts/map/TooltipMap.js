import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import numbro from 'numbro'

import Map from './Map'

function TooltipMap() {
  const [content, setContent] = useState({})
  const { t } = useTranslation()

  const tooltipContent = Object.keys(content).length ? (
    <>
      <h3>{content.municipio}</h3>
      <p>
        {t('total_casos')}:{' '}
        {numbro(content.casos).format({ thousandSeparated: true })}
      </p>
      <p>
        {t('tax_10k')}: {content.taxa_10000}
      </p>
      <p>
        {t('poblacio')}:{' '}
        {numbro(content.poblacio).format({ thousandSeparated: true })}
      </p>
    </>
  ) : (
    ''
  )

  return (
    <section id="overview">
      <h2>{t('per_municipi')}</h2>
      <Map setContent={setContent} />
      <ReactTooltip multiline>{tooltipContent}</ReactTooltip>
    </section>
  )
}

export default TooltipMap
