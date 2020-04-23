/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useTranslation } from "react-i18next";
import moment from "moment";
import numbro from "numbro";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "space-between",
        maxWidth: 200,
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      <Button
        variant="lang"
        sx={{ p: 2, mx: 2 }}
        key="es"
        onClick={() => {
          i18n.changeLanguage("es");
          moment.locale("es");
          numbro.setLanguage("es-ES");
        }}
      >
        ES
      </Button>
      <Button
        variant="lang"
        sx={{ p: 2 }}
        key="ca"
        onClick={() => {
          i18n.changeLanguage("ca");
          moment.locale("ca");
          numbro.setLanguage("es-ES");
        }}
      >
        CA
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
