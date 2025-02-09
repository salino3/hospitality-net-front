import React from "react";
import { GlobalStateApp } from ".";

export const GlobalAppContext = React.createContext<GlobalStateApp>(
  {} as GlobalStateApp
);
