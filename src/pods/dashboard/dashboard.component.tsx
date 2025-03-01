import React, { useContext, useEffect } from "react";
import { ServicesApp } from "../../core";
import {
  Account,
  GlobalAccountsContext,
  GlobalStateAccounts,
} from "../../core/accounts";
import { LateralBar } from "../../common-app";
import "./dashboard.styles.scss";

export const Dashboard: React.FC = () => {
  const { accountsState, setAccountsState } = useContext<GlobalStateAccounts>(
    GlobalAccountsContext
  );

  useEffect(() => {
    ServicesApp?.getAccounts().then((res: any) => {
      setAccountsState({ accounts: res.data });
    });
  }, []);

  console.log("here3", accountsState);

  return (
    <div className="rootDashboard">
      <LateralBar />
      <div className="containerDashboard">
        <h1>Dashboard</h1>
        <p
          style={{
            borderBottom: "1px solid",
          }}
        >
          Welcome to the Dashboard Page
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
    </div>
  );
};
