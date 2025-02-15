import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en as enDashboard } from "./dashboard/en";
import { es as esDashboard } from "./dashboard/es";
import { en as enHome } from "./home/en";
import { es as esHome } from "./home/es";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
      dashboard: enDashboard,
    },
    es: {
      home: esHome,
      dashboard: esDashboard,
    },
  },
  lng: "es", //Defaault language
  fallbackLng: "en", // dafault value for default fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
