import React from "react";
import { Header } from "../../common-app";
import { Home } from "../../pods";
import "./home.styles.scss";

export const HomeLayout: React.FC = () => {
  return (
    <div className="rootHomeLayout">
      <Header />
      <Home />
    </div>
  );
};
