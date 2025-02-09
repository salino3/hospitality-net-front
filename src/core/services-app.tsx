import axios, { AxiosResponse } from "axios";
import { AccountLoginForm, Accounts, apisApp } from ".";
import { useAppFunctions } from "../hooks";

const { baseBackend } = apisApp;

const { getEndTokenFromCookie } = useAppFunctions();

export class ServicesApp {
  // Auth

  public static async registerUser(account: Accounts): Promise<AxiosResponse> {
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

  public static async getUsers(): Promise<AxiosResponse<Accounts[]>> {
    return await axios.get(`${baseBackend}/accounts`);
  }
}
