import React, { useCallback } from "react";
import {
  initialState,
  ReducerApp,
  GlobalAppContext,
  CurrentAccount,
  actionsProvider,
} from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderApp: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(ReducerApp, initialState);

  //
  const toggleTheme = useCallback(() => {
    dispatch({
      type: actionsProvider?.updateTheme,
      payload: state.theme === "dark" ? "light" : "dark",
    });
  }, []);

  // login account
  const loginAccount = useCallback(function (info: CurrentAccount) {
    dispatch({
      type: actionsProvider?.loginAccount,
      payload: info,
    });
  }, []);

  return (
    <GlobalAppContext.Provider
      value={{ state, dispatch, toggleTheme, loginAccount }}
    >
      <main id={state.theme}>{children}</main>
    </GlobalAppContext.Provider>
  );
};
