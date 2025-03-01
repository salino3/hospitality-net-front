import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ServicesApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { AccountRegisterForm } from "../../core/accounts";
import { BasicInput, InputPhotos } from "../../common-app";
import { routesApp } from "../../router";
import "./home.styles.scss";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const navigate = useNavigate();

  const { checkEmptyValues } = useAppFunctions();

  const [formData, setFormData] = useState<AccountRegisterForm>({
    full_name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
    account_type: "individual",
    role_description: "",
    age: null,
    bio: "",
    profile_picture: null,
  });

  const [formDataError, setFormDataError] = useState<AccountRegisterForm>({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
    account_type: "individual",
    role_description: "",
    age: null,
    profile_picture: null,
  });

  const handleChange =
    (key: keyof AccountRegisterForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event?.target;
      setFormData({ ...formData, [key]: value });
      setFormDataError({ ...formDataError, [key]: "" });
    };

  // Handle file input change for profile picture
  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormData({ ...formData, profile_picture: event.target.files[0] });
    }
  };

  //
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (formData?.password !== formData?.passwordConfirm) {
      setFormDataError({
        ...formDataError,
        passwordConfirm: t("passwords_not_match"),
      });
      return;
    }

    if (
      !checkEmptyValues(
        formData,
        // it does not check them
        ["bio", "full_name", "passwordConfirm"],
        setFormDataError,
        t
      )
    ) {
      ServicesApp?.registerAccount(formData).then(() =>
        navigate(routesApp?.login)
      );
    }
  };

  return (
    <div className="rootHomePage">
      <h1>{t("home_page")}</h1>
      <form onSubmit={handleSubmit} id="registerForm">
        {/* Full Name */}
        <BasicInput
          type="text"
          change={handleChange("full_name")}
          name={"full_name"}
          lbl={t("full_name")}
          value={formData?.full_name || ""}
        />

        {/* Email */}
        <BasicInput
          type="email"
          name={"email"}
          change={handleChange("email")}
          value={formData.email || ""}
          lbl={t("email")}
          checkError={!!formDataError?.email}
          errMsg={formDataError?.email}
        />

        {/* Username */}
        <BasicInput
          type="text"
          name={"username"}
          change={handleChange("username")}
          value={formData?.username || ""}
          lbl={t("username")}
          checkError={!!formDataError?.username}
          errMsg={formDataError?.username}
        />

        {/* Role Description */}
        <BasicInput
          type="text"
          name={"role_description"}
          change={handleChange("role_description")}
          value={formData?.role_description || ""}
          lbl={t("role_description")}
          checkError={!!formDataError?.role_description}
          errMsg={formDataError?.role_description}
        />

        {/* Age */}
        <BasicInput
          type="number"
          name={"age"}
          change={handleChange("age")}
          value={formData?.age ?? ""}
          lbl={t("age")}
          checkError={!!formDataError?.age}
          errMsg={
            typeof formDataError?.age === "string"
              ? formDataError?.age
              : undefined
          }
        />

        {/* Bio */}
        <BasicInput
          type="textarea"
          name={"bio"}
          change={handleChange("bio")}
          value={formData?.bio || ""}
          lbl={t("bio")}
        />

        {/* Password */}
        <BasicInput
          type="password"
          name={"password"}
          change={handleChange("password")}
          value={formData?.password || ""}
          lbl={t("password")}
          checkError={!!formDataError?.password}
          errMsg={formDataError?.password}
        />

        {/* Password Confirmation */}
        <BasicInput
          type="password"
          name={"passwordConfirm"}
          change={handleChange("passwordConfirm")}
          value={formData?.passwordConfirm || ""}
          lbl={t("passwordConfirm")}
          checkError={!!formDataError?.passwordConfirm}
          errMsg={formDataError?.passwordConfirm}
        />

        {/* Profile Picture */}
        <InputPhotos
          fileName={formData?.profile_picture}
          setFormData={setFormData}
          name="profile_picture"
          change={handleProfilePictureChange}
          lbl={`${t("profile_picture")}:`}
          checkError={!!formDataError?.profile_picture}
          errMsg={
            typeof formDataError?.profile_picture === "string"
              ? formDataError?.profile_picture
              : ""
          }
        />
        <button className="btnStylesApp mx_2" type="submit">
          {t("confirm")}
        </button>
      </form>
    </div>
  );
};
