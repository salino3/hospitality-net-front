import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ServicesApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import "./login.styles.scss";

interface LoginAccount {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { t } = useTranslation("home");

  const { checkEmptyValues } = useAppFunctions();

  const [formData, setFormdata] = useState<LoginAccount>({
    email: "",
    password: "",
  });

  const [formDataError, setFormdataError] = useState<LoginAccount>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!checkEmptyValues(formData)) {
      ServicesApp?.loginAccount(formData).then((res: any) => {
        setFormdata({
          email: "",
          password: "",
        });
      });
    }
  };

  const handleChange =
    (key: keyof LoginAccount) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event?.target;
      setFormdata({ ...formData, [key]: value });
    };

  return (
    <div className="rootLogin">
      <h1>{t("login_page")}</h1>
      <p>{t("login_welcome")}</p>
      <form onSubmit={handleSubmit} id="loginForm">
        <div className="boxInput">
          <label htmlFor="email">{t("email")}:</label>
          <input
            className={formDataError?.email ? "inputError" : ""}
            id="email"
            type="email"
            name="email"
            onChange={handleChange("email")}
          />
          <small>{formDataError?.email}</small>
        </div>
        <div className="boxInput">
          <label htmlFor="password">{t("password")}:</label>
          <input
            className={formDataError?.password ? "inputError" : ""}
            id="password"
            type="password"
            name="password"
            onChange={handleChange("password")}
          />
          <small>{formDataError?.password}</small>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
