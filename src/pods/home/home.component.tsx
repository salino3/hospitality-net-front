import React, { useContext, useEffect } from "react";
import "./home.styles.scss";
import { ServicesApp } from "../../core";
import {
  Account,
  GlobalAccountsContext,
  GlobalStateAccounts,
} from "../../core/accounts";

export const Home: React.FC = () => {
  const { accountsState, setAccountsState } = useContext<GlobalStateAccounts>(
    GlobalAccountsContext
  );

  useEffect(() => {
    ServicesApp?.getAccounts().then((res: any) => {
      setAccountsState({ accounts: res.data });
    });
  }, []);
  return (
    <div className="rootHomePage">
      <h1>Home Page</h1>
      <p
        style={{
          borderBottom: "1px solid",
        }}
      >
        Welcome to the Home Page
      </p>

      <div>
        {accountsState &&
        accountsState?.accounts &&
        accountsState?.accounts?.length > 0 ? (
          accountsState?.accounts.map((account: Account) => (
            <p>{account?.username}</p>
          ))
        ) : (
          <span>No Accounts</span>
        )}
      </div>
    </div>
  );
};
