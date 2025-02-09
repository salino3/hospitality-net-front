import { jwtDecode } from "jwt-decode";
import { CurrentAccount } from "../core";
import { routesApp } from "../router";

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

  function capitalizeFirst(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return {
    getEndTokenFromCookie,
    getAuthToken,
    closeSession,
    //
    getWordPrefix,
    capitalizeFirst,
  };
};
