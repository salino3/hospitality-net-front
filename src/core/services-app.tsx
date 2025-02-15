import axios, { AxiosResponse } from "axios";
import { apisApp } from ".";
import { Account, AccountLoginForm, AccountRegisterForm } from "./accounts";
// import { useAppFunctions } from "../hooks";

const { baseBackend } = apisApp;

// const { getEndTokenFromCookie } = useAppFunctions();

export class ServicesApp {
  // Auth

  public static async registerAccount(
    account: AccountRegisterForm
  ): Promise<AxiosResponse> {
    return await axios.post(`${baseBackend}/auth/accounts/register`, account, {
      withCredentials: true,
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

  // Get Data

  public static async getAccounts(): Promise<AxiosResponse<Account[]>> {
    return await axios.get(`${baseBackend}/accounts`);
  }
}
