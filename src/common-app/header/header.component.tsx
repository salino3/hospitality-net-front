import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router";
import { useTranslation } from "react-i18next";
import { GlobalAppContext } from "../../core";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");

  const { state } = useContext(GlobalAppContext);
  const { currentAccount } = state;

  const [openSelectLanguage, setOpenSelectLanguage] = useState(false);

  return (
    <header className="rootHeader">
      <div className="containerHeader">
        <div className="boxInfo">
          <div className="container_034">
            <div className="boxUp">
              <h4>{t("hospitality_net")}</h4>
              <p>
                {currentAccount?.email || (
                  <button className="btnStylesApp">{t("login")}</button>
                )}
              </p>
            </div>
            <div className="boxDown">
              <span
                onClick={() => setOpenSelectLanguage(!openSelectLanguage)}
                className="spanLanguage"
              >
                {t("languages")}

                <img
                  src={"assets/icons/arrow_04.svg"}
                  aria-label={t("choose_language")}
                  alt={t("arrow_languages")}
                />
              </span>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to={routesApp?.companies}>{t("companies")}</Link>
            </li>
            <li>
              <Link to={routesApp?.dashboard}>{t("dashboard")}</Link>
            </li>
            <li>
              <Link to={routesApp?.login}>{t("login")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
