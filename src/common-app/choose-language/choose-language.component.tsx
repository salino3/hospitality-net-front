import React from "react";
import { useTranslation } from "react-i18next";
import "./choose-language.styles.scss";

export const ChooseLanguage: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="containerChooseLanguage">
      <button
        className="btnEnglish btnStylesApp"
        onClick={() => changeLanguage("en")}
      >
        {t("english")}
      </button>
      <button
        className="btnSpanish btnStylesApp"
        onClick={() => changeLanguage("es")}
      >
        {t("spanish")}
      </button>
    </div>
  );
};
