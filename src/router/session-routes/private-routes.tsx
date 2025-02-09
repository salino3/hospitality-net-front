import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalAppContext, GlobalStateApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { routesApp } from "../interface-routes";

export const PrivateRoutes: React.FC = () => {
  const navigate = useNavigate();
  const { loginAccount } = useContext<GlobalStateApp>(GlobalAppContext);

  const { getAuthToken } = useAppFunctions();

  React.useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      navigate(routesApp.root);
    } else {
      loginAccount(token);
    }
  }, []);

  return <Outlet />;
};
