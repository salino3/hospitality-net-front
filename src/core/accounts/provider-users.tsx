import React from "react";
import { GlobalAccountsContext, initialStateUsers, StateAccounts } from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderUsers: React.FC<Props> = ({ children }) => {
  const [accountsState, setAccountsState] =
    React.useState<StateAccounts>(initialStateUsers);

  return (
    <GlobalAccountsContext.Provider value={{ accountsState, setAccountsState }}>
      {children}
    </GlobalAccountsContext.Provider>
  );
};
