export const actionsProvider: ActionsProvider = {
  updateTheme: "UPDATE_THEME",
  loginAccount: "LOGIN_ACCOUNT",
  logoutAccount: "LOGOUT_ACCOUNT",
};

interface UPDATE_THEME {
  type: typeof actionsProvider.updateTheme;
  payload: "light" | "dark";
}

interface LOGIN_ACCOUNT_PROPS {
  type: typeof actionsProvider.loginAccount;
  payload: any | null;
}

interface LOGOUT_ACCOUNT_PROPS {
  type: typeof actionsProvider.logoutAccount;
  payload: null;
}

export type All_Actions =
  | UPDATE_THEME
  | LOGIN_ACCOUNT_PROPS
  | LOGOUT_ACCOUNT_PROPS;

//----------------------------------------------------------------

interface ActionsProvider {
  updateTheme: string;
  loginAccount: string;
  logoutAccount: string;
  // [key: string]: string; // has not autocomplete
}

export interface CurrentAccount {
  account_id: number;
  email: string;
  role_user: "user" | "admin";
  iat: number;
  exp: number;
  //
  full_name?: string;
  age: number | null | string;
  account_type: "individual" | "business";
  username: string;
  bio?: string;
  role_description?: string;
  profile_picture: File | null | string;
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
  logoutAccount: () => void;
  showPersonalInfo: boolean;
  setShowPersonalInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

// Initial state useReducer
export const initialState: StateApp = {
  theme: "dark",
  currentAccount: null,
};
