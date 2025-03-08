import React from "react";
import { GlobalStateCompaniess } from ".";

export const GlobalCompaniesContext =
  React.createContext<GlobalStateCompaniess>({} as GlobalStateCompaniess);
