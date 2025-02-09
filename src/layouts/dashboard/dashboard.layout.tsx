import React from "react";
import { Dashboard } from "../../pods";
import "./dashboard.styles.scss";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="rootDashboardLayout">
      <Dashboard />
    </div>
  );
};
