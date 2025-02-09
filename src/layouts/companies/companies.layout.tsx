import React from "react";
import { Companies } from "../../pods";
import "./companies.styles.scss";

export const CompaniesLayout: React.FC = () => {
  return (
    <div className="rootCompaniesLayout">
      <Companies />
    </div>
  );
};
