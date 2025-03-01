import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ServicesApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { BasicInput } from "../../common-app";
import { AccountLoginForm } from "../../core/accounts";
import { routesApp } from "../../router";
import "./login.styles.scss";

export const Login: React.FC = () => {
  const { t } = useTranslation("home");

  const navigate = useNavigate();

  const { checkEmptyValues } = useAppFunctions();

  const [formData, setFormData] = useState<AccountLoginForm>({
    email: "",
    password: "",
  });

  const [formDataError, setFormDataError] = useState<AccountLoginForm>({
    email: "",
    password: "",
  });

  const handleChange =
    (key: keyof AccountLoginForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event?.target;
      setFormData({ ...formData, [key]: value });
      setFormDataError({ ...formDataError, [key]: "" });
    };

  //
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!checkEmptyValues(formData, [], setFormDataError, t)) {
      ServicesApp?.loginAccount(formData).then(() =>
        navigate(routesApp?.dashboard)
      );
    }
  };

  return (
    <div className="rootLogin">
      <h1>{t("login_page")}</h1>
      <p>{t("login_welcome")}</p>
      <form onSubmit={handleSubmit} id="loginForm">
        <BasicInput
          type="email"
          name="email"
          change={handleChange("email")}
          value={formData?.email || ""}
          lbl={t("email")}
          checkError={!!formDataError?.email}
          errMsg={formDataError?.email}
        />
        <BasicInput
          type="password"
          name="password"
          change={handleChange("password")}
          value={formData?.password || ""}
          lbl={t("password")}
          checkError={!!formDataError?.password}
          errMsg={formDataError?.password}
        />
        <button className="btnStylesApp mx_2" type="submit">
          {t("confirm")}
        </button>{" "}
      </form>
    </div>
  );
};
