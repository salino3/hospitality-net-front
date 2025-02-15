import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ServicesApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { AccountRegisterForm } from "../../core/accounts";
import "./home.styles.scss";

export const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const { checkEmptyValues } = useAppFunctions();

  const [formData, setFormdata] = useState<AccountRegisterForm>({
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

  const [formDataError, setFormdataError] = useState<AccountRegisterForm>({
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    // if (!checkEmptyValues(formData, ["profile_picture"])) {
    ServicesApp?.registerAccount(formData).then((res: any) => {
      setFormdata({
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
    });
    // }
  };

  const handleChange =
    (key: keyof AccountRegisterForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event?.target;
      setFormdata({ ...formData, [key]: value });
    };

  // Handle file input change for profile picture
  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormdata({ ...formData, profile_picture: event.target.files[0] });
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
          <small>{formDataError?.full_name}</small>
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
          <small>{formDataError?.bio}</small>
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
            id="profile_picture"
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          <small>{formDataError?.profile_picture ? "" : ""}</small>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
