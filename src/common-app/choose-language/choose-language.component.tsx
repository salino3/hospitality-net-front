import React from "react";
import { useTranslation } from "react-i18next";
import "./choose-language.styles.scss";

export const ChooseLanguage: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="containerChooseLanguage">
      <button
        className="btnEnglish btnStylesApp"
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("english")}
      </button>
      <button
        className="btnSpanish btnStylesApp"
        onClick={() => i18n.changeLanguage("es")}
      >
        {t("spanish")}
      </button>
    </div>
  );
};
