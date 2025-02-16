export interface Account {
  account_id?: number;
  username: string;
  email: string;
  profile_picture: string;
  full_name: string;
  age: number | null;
  bio: string;
  account_type: "individual" | "business";
  role_description: string;
  role_user: "user" | "admin";
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AccountRegisterForm {
  email: string;
  full_name?: string;
  password: string;
  passwordConfirm: string;
  age: number | null | string;
  account_type: "individual" | "business";
  username: string;
  bio?: string;
  role_description?: string;
  profile_picture: File | null | string;
}

export interface AccountLoginForm {
  email: string;
  password: string;
}

export interface StateAccounts {
  accounts: Account[];
}

export interface GlobalStateAccounts {
  accountsState: StateAccounts;
  setAccountsState: React.Dispatch<React.SetStateAction<StateAccounts>>;
}

export const initialStateUsers: StateAccounts = {
  accounts: [],
};
