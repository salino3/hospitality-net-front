export const actionsProvider: ActionsProvider = {
  updateTheme: "UPDATE_THEME",
  loginAccount: "LOGIN_ACCOUNT",
};

interface UPDATE_THEME {
  type: typeof actionsProvider.updateTheme;
  payload: "light" | "dark";
}

interface LOGIN_ACCOUNT_PROPS {
  type: typeof actionsProvider.loginAccount;
  payload: any | null;
}

export type All_Actions = UPDATE_THEME | LOGIN_ACCOUNT_PROPS;

//----------------------------------------------------------------

interface ActionsProvider {
  // [key: string]: string; // no autocomplete
  updateTheme: string;
  loginAccount: string;
}

export interface CurrentAccount {
  id: number;
  email: string;
  role_user: "user" | "admin";
  iat: number;
  exp: number;
}

export interface StateApp {
  theme: "light" | "dark";
  currentAccount: CurrentAccount | null;
}

export interface GlobalStateApp {
  state: StateApp;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
  loginAccount: (info: CurrentAccount) => void;
}

// Initial state useReducer
export const initialState: StateApp = {
  theme: "light",
  currentAccount: null,
};
