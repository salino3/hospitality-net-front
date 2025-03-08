import React from "react";
import { GlobalStateCompanies } from ".";

export const GlobalCompaniesContext = React.createContext<GlobalStateCompanies>(
  {} as GlobalStateCompanies
);
