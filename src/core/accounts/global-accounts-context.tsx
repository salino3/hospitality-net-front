import React from "react";
import { GlobalStateAccounts } from "./interfaces";

export const GlobalAccountsContext = React.createContext<GlobalStateAccounts>(
  {} as GlobalStateAccounts
);
