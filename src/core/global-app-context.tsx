import React from "react";
import { GlobalStateApp } from "./interfaces";

export const GlobalAppContext = React.createContext<GlobalStateApp>(
  {} as GlobalStateApp
);
