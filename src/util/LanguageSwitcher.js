import React from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  return (
    <div
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <span
        key="es"
        onClick={() => {
          i18n.changeLanguage('es')
          moment.locale('es')
        }}
        style={{ margin: 20 }}>
        ES
      </span>
      <span
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
