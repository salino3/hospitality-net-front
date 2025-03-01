import React from "react";
import { Header } from "../../common-app";
import { Dashboard } from "../../pods";
import "./dashboard.styles.scss";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="rootDashboardLayout">
      <Header />
      <Dashboard />
    </div>
  );
};
