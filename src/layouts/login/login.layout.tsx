import React from "react";
import { Header } from "../../common-app";
import { Login } from "../../pods";
import "./login-layout.styles.scss";

export const LoginLayout: React.FC = () => {
  return (
    <div className="rootLoginLayout">
      <Header />
      <Login />
    </div>
  );
};
