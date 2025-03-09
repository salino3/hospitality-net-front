import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { routesApp } from "../../router";
import { useTranslation } from "react-i18next";
import { GlobalAppContext, GlobalStateApp } from "../../core";
import { useAppFunctions } from "../../hooks";
import { Switcher } from "../../common/switcher";
import { ChooseLanguage } from "../choose-language";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navigate = useNavigate();
  const location = useLocation();

  const btnToggleRef = useRef<HTMLSpanElement>(null);
  const btnToggleRef2 = useRef<HTMLSpanElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);

  const {
    state: { currentAccount },
    toggleTheme,
    setShowPersonalInfo,
  } = useContext<GlobalStateApp>(GlobalAppContext);

  const { closeSession } = useAppFunctions();

  const [openSelectLanguage, setOpenSelectLanguage] = useState(false);
  const [fadeClose, setFadeClose] = useState(false);

  const [openSelectNav, setOpenSelectNav] = useState(false);
  const [fadeClose2, setFadeClose2] = useState(false);

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

  const handleNav = () => {
    if (!openSelectNav) {
      setOpenSelectNav(true);
      setFadeClose2(false);
    } else {
      setFadeClose2(true);
      setTimeout(() => {
        setOpenSelectNav(false);
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

  useEffect(() => {
    const handleClickOutside2 = (event: MouseEvent) => {
      if (
        elementRef2.current &&
        !elementRef2.current.contains(event?.target as Node) &&
        btnToggleRef2.current &&
        btnToggleRef2.current !== event?.target &&
        !btnToggleRef2.current.contains(event?.target as Node)
      ) {
        setOpenSelectNav(false);
        setFadeClose2(false);
      }
    };

    document.addEventListener("click", handleClickOutside2);

    return () => {
      document.removeEventListener("click", handleClickOutside2);
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
              <span className="spanSwitch">
                <Switcher
                  first={"#f5f5f5"}
                  second={"#1b1b1b"}
                  toggle={toggleTheme}
                  currentvalue={document.documentElement.style.getPropertyValue(
                    "--global-01"
                  )}
                  t={t}
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
        {isMobile ? (
          <div className="containerNavigationMobile">
            <div
              onClick={() => setShowPersonalInfo((prev: boolean) => !prev)}
              className="containerSvgHamburger"
            >
              <svg
                className="svgHamburger"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="22" y2="6" />
                <line x1="3" y1="12" x2="22" y2="12" />
                <line x1="3" y1="18" x2="22" y2="18" />
              </svg>
              <span>{t("personal_info")}</span>
            </div>
            {/*  */}
            <div className="boxDown2">
              <span
                ref={btnToggleRef2}
                onClick={() => handleNav()}
                className="spanNav"
              >
                <img
                  className={`iconNav ${
                    !fadeClose2 && openSelectNav ? "rotateIcon" : ""
                  }`}
                  src={"assets/icons/arrow_04.svg"}
                  aria-label={t("choose_language")}
                  alt={t("arrow_languages")}
                />
                {t("nav_web")}
              </span>
              <div
                ref={elementRef2}
                className={`dropdownNav ${
                  !fadeClose2 && openSelectNav ? "showDropdown2" : ""
                }
                    
                  ${fadeClose2 ? "fadeClose2" : ""}`}
              >
                {openSelectNav && (
                  <nav
                    style={{
                      padding: "1rem",
                    }}
                  >
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
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
};
