import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ServicesApp } from "../../core";
import {
  Company,
  GlobalCompaniesContext,
  GlobalStateCompanies,
} from "../../core/companies";
import { LateralBar } from "../../common-app";
import { CardCompanies } from "./components";
import "./dashboard.styles.scss";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation("dashboard");

  const { companiesState, setCompaniesState } =
    useContext<GlobalStateCompanies>(GlobalCompaniesContext);

  useEffect(() => {
    ServicesApp?.getCompanies().then((res: any) => {
      setCompaniesState({ companies: res.data });
    });
  }, []);

  console.log("here3", companiesState);

  return (
    <div className="rootDashboard">
      <LateralBar />
      <div className="containerDashboard">
        <h1>Dashboard</h1>
        <p className="p1">Welcome to the Dashboard Page</p>
        <div className="containerCardsCompanies">
          {companiesState &&
          companiesState?.companies &&
          companiesState?.companies?.length > 0 ? (
            companiesState?.companies.map((company: Company) => (
              <CardCompanies company={company} t={t} />
            ))
          ) : (
            <span>No Accounts</span>
          )}
        </div>
      </div>
    </div>
  );
};
