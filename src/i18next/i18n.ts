import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en as enHome } from "./home/en";
import { es as esHome } from "./home/es";
import { en as enDashboard } from "./dashboard/en";
import { es as esDashboard } from "./dashboard/es";

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
  lng: localStorage.getItem("lng") || "en", // Default language
  fallbackLng: "en", // Default value for default fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
