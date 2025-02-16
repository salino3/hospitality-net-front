import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ServicesApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { AccountRegisterForm } from "../../core/accounts";
import "./home.styles.scss";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const fileInputRef = useRef<HTMLInputElement>(null);

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
        ["bio", "full_name", "passwordConfirm"],
        setFormDataError,
        t
      )
    ) {
      ServicesApp?.registerAccount(formData).then(() => {
        setFormData({
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
        // Resetear input File
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      });
    }
  };

  return (
    <div className="rootHomePage">
      <h1>{t("home_page")}</h1>
      <form onSubmit={handleSubmit} id="registerForm">
        {/* Full Name */}
        <div className="boxInput">
          <label htmlFor="full_name">{t("full_name")}:</label>
          <input
            id="full_name"
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange("full_name")}
            className={formDataError?.full_name ? "inputError" : ""}
          />
          <small></small>
        </div>
        {/* Email */}
        <div className="boxInput">
          <label htmlFor="email">{t("email")}:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange("email")}
            className={formDataError?.email ? "inputError" : ""}
          />
          <small>{formDataError?.email}</small>
        </div>
        {/* Username */}
        <div className="boxInput">
          <label htmlFor="username">{t("username")}:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange("username")}
            className={formDataError?.username ? "inputError" : ""}
          />

          <small>{formDataError?.username}</small>
        </div>
        {/* Role Description */}
        <div className="boxInput">
          <label htmlFor="role_description">{t("role_description")}:</label>
          <input
            id="role_description"
            type="text"
            name="role_description"
            value={formData.role_description}
            onChange={handleChange("role_description")}
            className={formDataError?.role_description ? "inputError" : ""}
          />
          <small>{formDataError?.role_description}</small>
        </div>
        {/* Age */}
        <div className="boxInput">
          <label htmlFor="age">{t("age")}:</label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age ?? ""}
            onChange={handleChange("age")}
            className={formDataError?.age ? "inputError" : ""}
          />
          <small>{formDataError?.age}</small>
        </div>{" "}
        {/* Bio */}
        <div className="boxInput">
          <label htmlFor="bio">{t("bio")}:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange("bio")}
            className={formDataError?.bio ? "inputError" : ""}
          />
          <small></small>
        </div>
        {/* Password */}
        <div className="boxInput">
          <label htmlFor="password">{t("password")}:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange("password")}
            className={formDataError?.password ? "inputError" : ""}
          />
          <small>{formDataError?.password}</small>
        </div>
        {/* Password Confirmation */}
        <div className="boxInput">
          <label htmlFor="passwordConfirm">{t("passwordConfirm")}:</label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange("passwordConfirm")}
            className={formDataError?.passwordConfirm ? "inputError" : ""}
          />
          <small>{formDataError?.passwordConfirm}</small>
        </div>
        {/* Profile Picture */}
        <div className="boxInput">
          <label htmlFor="profile_picture">{t("profile_picture")}:</label>
          <input
            ref={fileInputRef}
            id="profile_picture"
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {typeof formDataError?.profile_picture === "string"
            ? formDataError.profile_picture
            : ""}
        </div>
        <input type="submit" value={t("confirm")} />
      </form>
    </div>
  );
};
