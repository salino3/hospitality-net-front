import axios, { AxiosResponse } from "axios";
import { apisApp } from ".";
import { Account, AccountLoginForm, AccountRegisterForm } from "./accounts";
import { Company } from "./companies";
// import { useAppFunctions } from "../hooks";

const { baseBackend } = apisApp;

// const { getEndTokenFromCookie } = useAppFunctions();

export class ServicesApp {
  //* Auth

  public static async registerAccount(
    account: AccountRegisterForm
  ): Promise<AxiosResponse> {
    const formData = new FormData();

    // Append basic fields
    formData.append("email", account.email);
    if (account.full_name) formData.append("full_name", account.full_name);
    formData.append("password", account.password);
    formData.append("passwordConfirm", account.passwordConfirm);
    formData.append("username", account.username);
    formData.append("account_type", account.account_type);
    if (account.role_description)
      formData.append("role_description", account.role_description);
    if (account.age !== null) formData.append("age", String(account.age));
    if (account.bio) formData.append("bio", account.bio);

    // Append file field if exists
    if (account.profile_picture) {
      formData.append("profile_picture", account.profile_picture);
    }

    return await axios.post(`${baseBackend}/auth/accounts/register`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  public static async loginAccount(
    account: AccountLoginForm
  ): Promise<AxiosResponse> {
    return await axios
      .post(`${baseBackend}/auth/accounts/login`, account, {
        withCredentials: true,
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  }

  //* Get Data

  // Accouts
  public static async getAccounts(): Promise<AxiosResponse<Account[]>> {
    return await axios.get(`${baseBackend}/accounts`);
  }

  public static async getAccount(id: string): Promise<AxiosResponse<Account>> {
    return await axios.get(`${baseBackend}/accounts/${id}`);
  }

  // Companies
  public static async getCompanies(): Promise<AxiosResponse<Company[]>> {
    return await axios.get(`${baseBackend}/companies`);
  }

  public static async getCompany(id: string): Promise<AxiosResponse<Company>> {
    return await axios.get(`${baseBackend}/companies/${id}`);
  }
}
