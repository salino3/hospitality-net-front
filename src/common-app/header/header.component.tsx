import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routesApp } from "../../router";
import { useTranslation } from "react-i18next";
import { GlobalAppContext } from "../../core";
import { useAppFunctions } from "../../hooks";
import { ChooseLanguage } from "../choose-language";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");

  const navigate = useNavigate();
  const location = useLocation();

  const btnToggleRef = useRef<HTMLSpanElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    state: { currentAccount },
  } = useContext(GlobalAppContext);

  const { closeSession } = useAppFunctions();

  const [openSelectLanguage, setOpenSelectLanguage] = useState(false);
  const [fadeClose, setFadeClose] = useState(false);

  const handleLanguages = () => {
    if (!openSelectLanguage) {
      setOpenSelectLanguage(true);
      setFadeClose(false);
    } else {
      setFadeClose(true);
      setTimeout(() => {
        setOpenSelectLanguage(false);
      }, 1000);
    }
  };

  //
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event?.target as Node) &&
        btnToggleRef.current &&
        btnToggleRef.current !== event?.target &&
        !btnToggleRef.current.contains(event?.target as Node)
      ) {
        setOpenSelectLanguage(false);
        setFadeClose(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="rootHeader">
      <div className="containerHeader">
        <div className="boxInfo">
          <div className="container_034">
            <div className="boxUp">
              <h4>{t("hospitality_net")}</h4>
              {currentAccount?.email ? (
                <p>{currentAccount?.email}</p>
              ) : (
                <div className="boxBtnLogin">
                  <button
                    onClick={() =>
                      navigate(
                        location?.pathname === routesApp?.root
                          ? routesApp?.login
                          : routesApp?.root
                      )
                    }
                    className="btnStylesApp"
                  >
                    {t(
                      location?.pathname === routesApp?.root
                        ? "login"
                        : "register"
                    )}
                  </button>
                </div>
              )}
            </div>
            {/*  */}
            <div className="boxDown">
              <span
                ref={btnToggleRef}
                onClick={() => handleLanguages()}
                className="spanLanguage"
              >
                {t("languages")}
                <img
                  className={`iconLanguage ${
                    !fadeClose && openSelectLanguage ? "rotateIcon" : ""
                  }`}
                  src={"assets/icons/arrow_04.svg"}
                  aria-label={t("choose_language")}
                  alt={t("arrow_languages")}
                />
              </span>
              <div
                ref={elementRef}
                className={`dropdownLanguage ${
                  !fadeClose && openSelectLanguage ? "showDropdown" : ""
                }
                    
                  ${fadeClose ? "fadeClose" : ""}`}
              >
                {openSelectLanguage && <ChooseLanguage />}
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            {currentAccount?.email ? (
              <li onClick={() => closeSession()}>{t("logout")}</li>
            ) : (
              <li>
                <Link to={routesApp?.root}>{t("home")}</Link>
              </li>
            )}
            <li>
              <Link to={routesApp?.companies}>{t("companies")}</Link>
            </li>
            <li>
              <Link to={routesApp?.dashboard}>{t("dashboard")}</Link>
            </li>
            {/* <li>
              <Link to={routesApp?.login}>{t("login")}</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
