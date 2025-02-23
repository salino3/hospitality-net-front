import React from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router";
import { useTranslation } from "react-i18next";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <header className="rootHeader">
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
      <h4>{t("hospitality_net")}</h4>
    </header>
  );
};
