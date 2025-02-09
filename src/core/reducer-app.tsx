import { actionsProvider, All_Actions, StateApp } from "./interfaces";

export const ReducerApp = (state: StateApp, action: All_Actions) => {
  switch (action.type) {
    case actionsProvider?.updateTheme:
      return {
        ...state,
        theme: action.payload,
      };
    case actionsProvider?.loginAccount:
      return {
        ...state,
        currentAccount: action.payload,
      };

    default:
      return state;
  }
};
