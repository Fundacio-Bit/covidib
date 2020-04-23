import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import numbro from "numbro";
import languages from "numbro/dist/languages.min";
Object.values(languages).forEach((l) => numbro.registerLanguage(l));
numbro.setLanguage("es-ES");

const resources = {
  es: {
    translation: {
      curats_title: "Recuperaciones definitivas",
      actius_curats_title: "Casos activos y recuperaciones",
      mallorca: "Mallorca",
      menorca: "Menorca",
      pitiuses: "Ibiza y Formentera",
      casos_nous_title: "Casos nuevos",
      percentatge_increment_title: "% incremento de casos",
      log_deaths_title: "Defunciones (logarítmica)",
      log_cases_title: "Positivos (logarítmica)",
      positius_actius: "Positivos activos",
      curats: "Curados",

      total_curats: "Total curados",
      total_exitus: "Total fallecimientos",
      hospitalitzats_avui: "Hospitalizados a día de hoy",
      uci_avui: "Personas en la UCI a día de hoy",

      nous_positius: "Nuevos positivos",
      percentatge_increment: "Porcentaje de incremento",
      casos: "Casos",
      hospitalitzats: "Hospitalizados",
      professionals_positius: "Profesionales positivos activos",
      professionals_vigilancia: "Profesionales en vigilancia",
      situ_actual: "Situación actual en las Islas Baleares",
      positius_acumulats: "Positivos acumulados",
      exitus: "Fallecimientos",
      darrera_act: "Actualizado",
      proves_laboratori: "Pruebas laboratorio acumuladas",
      estat_alarma: "Estado de alarma",
      confinament: "Parón actividad",
      per_municipi: "Datos por municipio",
      total_casos: "Total casos",
      tax_10k: "Tasa por 10.000 habitantes",
      poblacio: "Población",
      uvac_actius: "Activos UVAC",
      act_dades: "Último registro",
      morts_per_dia_title:"Fallecidos-día por millón de habitantes",
      mitjana_mobil_subtitle:"Media móvil de 7 días",
    },
  },
  ca: {
    translation: {
      curats_title: "Recuperacions definitives",
      actius_curats_title: "Casos actius i recuperacions",
      mallorca: "Mallorca",
      menorca: "Menorca",
      pitiuses: "Eivissa i Formentera",
      casos_nous_title: "Nous casos",
      percentatge_increment_title: "% increment de casos",
      log_deaths_title: "Exitus (logarítmic)",
      log_cases_title: "Positius (logarítmica)",
      positius_actius: "Positius actius",
      curats: "Curats",
      total_curats: "Total curats",
      total_exitus: "Total exitus",
      hospitalitzats_avui: "Hospitalitzats avui",
      uci_avui: "Persones a l'UCI avui",
      nous_positius: "Nous positius",
      percentatge_increment: "Percentatge d'increment",
      casos: "Casos",
      hospitalitzats: "Hospitalitzats",
      professionals_positius: "Professionals positius actius",
      professionals_vigilancia: "Professionals en vigilància",
      situ_actual: "Situació actual a les Illes Balears",
      positius_acumulats: "Positius acumulats",
      exitus: "Exitus",
      darrera_act: "Actualitzat",
      proves_laboratori: "Proves laboratori acumulades",
      estat_alarma: "Estat d'alarma",
      confinament: "Aturada d'activitats",
      per_municipi: "Dades per municipi",
      total_casos: "Total casos",
      tax_10k: "Taxa per 10.000 habitants",
      poblacio: "Población",
      uvac_actius: "Actius UVAC",
      act_dades: "Darrer registre",
      morts_per_dia_title:"Morts-día per milió d'habitants",
      mitjana_mobil_subtitle:"Mitjana mòbil de 7 dies",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
