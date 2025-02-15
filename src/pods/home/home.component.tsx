import React, { useContext, useEffect } from "react";
import { ServicesApp } from "../../core";
import {
  Account,
  GlobalAccountsContext,
  GlobalStateAccounts,
} from "../../core/accounts";
import "./home.styles.scss";

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
      <form id="registerForm">
        <div className="boxInput">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="boxInput">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
