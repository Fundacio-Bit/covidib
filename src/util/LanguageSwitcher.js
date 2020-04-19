import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  return (
    <div className="LanguageSwitcher">
      <button key="es" onClick={() => i18n.changeLanguage('es')}>
        Español
      </button>
      <button key="ca" onClick={() => i18n.changeLanguage('ca')}>
        Català
      </button>
    </div>
  )
}

export default LanguageSwitcher
