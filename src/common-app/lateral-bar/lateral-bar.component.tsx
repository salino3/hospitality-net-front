import React, { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { GlobalAppContext, GlobalStateApp } from "../../core";
import "./lateral-bar.styles.scss";

export const LateralBar: React.FC = memo(() => {
  const { t } = useTranslation("home");
  // const {t: t_common } = useTranslation("common");

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const {
    showPersonalInfo,
    setShowPersonalInfo,
    state: { currentAccount, theme },
  } = useContext<GlobalStateApp>(GlobalAppContext);

  if (isMobile && !showPersonalInfo) {
    return null;
  }

  console.log("hello", currentAccount);
  return (
    <div id={theme} className="rootLateralBar">
      <div
        className="boxArrow"
        onClick={() => setShowPersonalInfo((prev) => !prev)}
      >
        {showPersonalInfo ? (
          <svg
            width="67"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.953561"
              y1="1.8421"
              x2="51.9536"
              y2="43.8421"
              stroke="currentColor"
              strokeWidth="5"
            />
            <line
              x1="51.9398"
              y1="46.1691"
              x2="0.939838"
              y2="87.1691"
              stroke="currentColor"
              strokeWidth="5"
            />
            <line
              x1="30.9536"
              y1="1.8421"
              x2="80.9536"
              y2="43.8421"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="80.9398"
              y1="46.1691"
              x2="30.9398"
              y2="87.1691"
              stroke="currentColor"
              strokeWidth="5"
            />
          </svg>
        ) : (
          <svg
            className="rotateIcon"
            width="67"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.953561"
              y1="1.8421"
              x2="51.9536"
              y2="43.8421"
              stroke="currentColor"
              strokeWidth="5"
            />
            <line
              x1="51.9398"
              y1="46.1691"
              x2="0.939838"
              y2="87.1691"
              stroke="currentColor"
              strokeWidth="5"
            />
            <line
              x1="30.9536"
              y1="1.8421"
              x2="80.9536"
              y2="43.8421"
              stroke="currentColor"
              strokeWidth="5"
            />

            <line
              x1="80.9398"
              y1="46.1691"
              x2="30.9398"
              y2="87.1691"
              stroke="currentColor"
              strokeWidth="5"
            />
          </svg>
        )}
      </div>
      {showPersonalInfo && (
        <div className="containerLateralBar">
          <h3>{currentAccount?.username}</h3>

          <img
            className="personalimg_01"
            src={
              typeof currentAccount?.profile_picture === "string"
                ? currentAccount?.profile_picture
                : ""
            }
            alt={t("personal_photo")}
          />
          <ul className="ul_LB">
            <li className="liText">
              <span>{t("role")}:</span>
              <span>{currentAccount?.role_description || "-"}</span>
            </li>
            <li className="liText">
              <span>{t("age")}:</span>
              <span>{currentAccount?.age || "-"}</span>
            </li>
            <li className="liText">
              <span>{t("full_name")}:</span>
              <span>{currentAccount?.full_name || "-"}</span>
            </li>
            <li className="liText">
              <span>{t("bio")}:</span>
              <span>{currentAccount?.bio || ""}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});
