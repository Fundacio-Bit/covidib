import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      curats_title: 'Recuperaciones definitivas',
      actius_curats_title: 'Casos activos y recuperaciones',
      mallorca: 'Mallorca',
      menorca: 'Menorca',
      pitiuses: 'Ibiza y Formentera',
      casos_nous_title: 'Casos nuevos',
      percentatge_increment_title: '% incremento de casos'
    }
  },
  ca: {
    translation: {
      curats_title: 'Recuperacions definitives',
      actius_curats_title: 'Casos actius i recuperacions',
      mallorca: 'Mallorca',
      menorca: 'Menorca',
      pitiuses: 'Eivissa i Formentera',
      casos_nous_title: 'Nous casos',
      percentatge_increment_title: '% increment de casos'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
