import React from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  return (
    <div className="langSelectors">
      <span className="langSpan"
        key="es"
        onClick={() => {
          i18n.changeLanguage('es')
          moment.locale('es')
        }}
        >
        ES
      </span>
      <span className="langSpan"
        key="ca"
        onClick={() => {
          i18n.changeLanguage('ca')
          moment.locale('ca')
        }}>
        CA
      </span>
    </div>
  )
}

export default LanguageSwitcher
