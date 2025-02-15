import React from "react";
import { Login } from "../../pods";
import "./login-layout.styles.scss";

export const LoginLayout: React.FC = () => {
  return (
    <div className="rootLoginLayout">
      <Login />
    </div>
  );
};
