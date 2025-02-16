import { jwtDecode } from "jwt-decode";
import { CurrentAccount } from "../core";
import { routesApp } from "../router";
import { AccountRegisterForm } from "../core/accounts";

export const useAppFunctions = () => {
  //
  function getEndTokenFromCookie() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(import.meta.env.VITE_APP_COOKIE_AUTH)) {
        const endToken = cookie.split("=")[0].split("_").pop();
        return endToken;
      }
    }
    return null;
  }

  //*
  const getAuthToken = (): CurrentAccount | null => {
    const cookies = document.cookie.split("; ");
    const authCookie = cookies.find((cookie) =>
      cookie.startsWith(import.meta.env.VITE_APP_COOKIE_AUTH)
    );

    if (!authCookie) return null;

    const authCookieSplitted = authCookie.split("=")[1];

    // Verifiying it is divided in 3 parts - header, payload and signature
    if (authCookieSplitted && authCookieSplitted.split(".").length === 3) {
      try {
        const decoded: any = jwtDecode(authCookieSplitted);

        return decoded || null;
      } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;
      }
    } else {
      console.error("Invalid JWT format.");
      return null;
    }
  };

  //
  const closeSession = (): void => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const [key] = cookies[i].trim().split("=");
      if (key.startsWith(import.meta.env.VITE_APP_COOKIE_AUTH)) {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

        window.location.href = routesApp?.root;
        return;
      }
    }
  };

  //
  const getWordPrefix = (str: string, word: string = "@") => {
    if (str && typeof str === "string") {
      const atIndex = str.indexOf(word);
      if (atIndex === -1) return str;
      return str.substring(0, atIndex) + `${word}...`;
    } else {
      return "";
    }
  };

  //
  function capitalizeFirst(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex

  /*
  Explanation:
  1. Regular Expression (`emailRegex`):
     - `^[^\s@]+` → Ensures at least one character before "@" with no spaces.
     - `@[^\s@]+` → Requires "@" followed by at least one character.
     - `\.[^\s@]+$` → Ensures a dot "." followed by at least one character.
     - Example of valid emails: `user@example.com`, `test123@mail.co`
     - Example of invalid emails: `user@.com`, `@example.com`, `user@com`
*/

  //
  const checkEmptyValues = (
    values: any,
    list: any[] = [],
    setFormDataError?: React.Dispatch<
      React.SetStateAction<AccountRegisterForm>
    >,
    t?: any
  ): boolean => {
    let hasError = false;

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const value = values[key];
        if (!list.includes(key)) {
          switch (key) {
            case "username":
              if (!value) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("empty_or_incorrect")}`,
                }));
                hasError = true;
              }

              break;
            case "role_description":
              if (!value) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("empty_or_incorrect")}`,
                }));
                hasError = true;
              }
              break;
            case "age":
              if (!value || isNaN(value) || value < 0) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("empty_or_incorrect")}`,
                }));
                hasError = true;
              }

              break;
            case "password":
              if (!value) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("is_required")}`,
                }));
                hasError = true;
              } else if (value && value?.length < 6) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  password: `${t(key)} must be at least 6 characters long`,
                }));
                hasError = true;
              }

              break;

            case "email":
              if (!value) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("is_required")}`,
                }));
                hasError = true;
              } else if (!emailRegex.test(value)) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  email: `Invalid ${t(key)} format`,
                }));
                hasError = true;
              }
              break;
            case "profile_picture":
              if (!value) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${t(key)} ${t("is_required")}`,
                }));
                hasError = true;
              }
              break;
            default:
              if (
                (value && !value.trim()) ||
                value === undefined ||
                value === null
              ) {
                setFormDataError?.((prev) => ({
                  ...prev,
                  [key]: `${key} ${t("empty_or_incorrect")}`,
                }));
                hasError = true;
              }
              break;
          }
        }
      }
    }
    return hasError;
  };

  return {
    getEndTokenFromCookie,
    getAuthToken,
    closeSession,
    //
    getWordPrefix,
    capitalizeFirst,
    checkEmptyValues,
  };
};
