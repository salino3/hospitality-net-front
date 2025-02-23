import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Import the language detector
import { en as enHome } from "./home/en";
import { es as esHome } from "./home/es";
import { en as enDashboard } from "./dashboard/en";
import { es as esDashboard } from "./dashboard/es";
import { en as enCommon } from "./common/en";
import { es as esCommon } from "./common/es";

// Use the language detector
i18n
  .use(LanguageDetector) // Add the language detector
  .use(initReactI18next) // Use React i18next
  .init({
    resources: {
      en: {
        home: enHome,
        dashboard: enDashboard,
        common: enCommon,
      },
      es: {
        home: esHome,
        dashboard: esDashboard,
        common: esCommon,
      },
    },
    lng: localStorage.getItem("lng") || undefined, // use detector to decide the language (use localStorage value if available)
    fallbackLng: "en", // Default language if the user's language is not supported
    detection: {
      order: [
        "navigator",
        "localStorage",
        "cookie",
        "htmlTag",
        "path",
        "subdomain",
      ], // Order of language detection
      caches: ["localStorage", "cookie"], // Cache the detected language in localStorage or cookies
    },
    interpolation: {
      escapeValue: false, // No need for escaping, React handles this
    },
  });

export default i18n;
