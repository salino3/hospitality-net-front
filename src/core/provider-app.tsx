import React, { useCallback, useEffect } from "react";
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

  const [showPersonalInfo, setShowPersonalInfo] = React.useState<boolean>(true);

  //
  function changeGlobalColors() {
    const root = document.documentElement;

    if (root.style.getPropertyValue("--global-01") === "#1b1b1b") {
      // #dark
      root.style.setProperty("--global-01", "#f5f5f5");
      root.style.setProperty("--global-02", "#1b1b1b");
      root.style.setProperty("--global-03", "#f4a261");
      root.style.setProperty("--global-04", "#1b1b1b");
      root.style.setProperty("--global-05", "#d4af37");
      root.style.setProperty("--global-06", "#1b1b1b");
      root.style.setProperty("--global-07", "#f5f5f5");
      root.style.setProperty("--global-lines", "rgb(178, 164, 164)");
    } else {
      // #light
      root.style.setProperty("--global-01", "#1b1b1b");
      root.style.setProperty("--global-02", "#eaeaea");
      root.style.setProperty("--global-03", "#e2e8f0");
      root.style.setProperty("--global-04", "#f7fafc");
      root.style.setProperty("--global-05", "#ed8936");
      root.style.setProperty("--global-06", "#30d2ca");
      root.style.setProperty("--global-07", "#f5f5f5");
      root.style.setProperty("--global-lines", "rgb(27, 27, 27)");
    }
  }

  //
  const toggleTheme = useCallback(() => {
    dispatch({
      type: actionsProvider?.updateTheme,
      payload: state.theme === "dark" ? "light" : "dark",
    });

    changeGlobalColors();
  }, [state.theme]);

  // login account
  const loginAccount = useCallback(function (info: CurrentAccount) {
    dispatch({
      type: actionsProvider?.loginAccount,
      payload: info,
    });
  }, []);

  return (
    <GlobalAppContext.Provider
      value={{
        state,
        dispatch,
        toggleTheme,
        loginAccount,
        showPersonalInfo,
        setShowPersonalInfo,
      }}
    >
      <main id={state.theme}>{children}</main>
    </GlobalAppContext.Provider>
  );
};
