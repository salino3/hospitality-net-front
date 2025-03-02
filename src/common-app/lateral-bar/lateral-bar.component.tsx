import React, { memo, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { GlobalAppContext } from "../../core";
import "./lateral-bar.styles.scss";

export const LateralBar: React.FC = memo(() => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const {
    showPersonalInfo,
    state: { currentAccount, theme },
  } = useContext(GlobalAppContext);

  if (isMobile && !showPersonalInfo) {
    return null;
  }

  console.log("hello", currentAccount);
  return (
    <div id={theme} className="rootLateralBar">
      <div className="boxArrow">
        <svg
          width="67"
          height="89"
          viewBox="0 0 67 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.953561"
            y1="1.8421"
            x2="51.9536"
            y2="43.8421"
            stroke="currentColor"
            stroke-width="3"
          />
          <line
            x1="51.9398"
            y1="46.1691"
            x2="0.939838"
            y2="87.1691"
            stroke="currentColor"
            stroke-width="3"
          />
          <line
            x1="51.9398"
            y1="46.1691"
            x2="0.939838"
            y2="87.1691"
            stroke="currentColor"
            stroke-width="3"
          />
          <line
            x1="14.9536"
            y1="1.8421"
            x2="65.9536"
            y2="43.8421"
            stroke="currentColor"
            stroke-width="3"
          />
          <line
            x1="65.9398"
            y1="46.1691"
            x2="14.9398"
            y2="87.1691"
            stroke="currentColor"
            stroke-width="3"
          />
          <line
            x1="65.9398"
            y1="46.1691"
            x2="14.9398"
            y2="87.1691"
            stroke="currentColor"
            stroke-width="3"
          />
        </svg>
      </div>
      <h3>{currentAccount?.username}</h3>
    </div>
  );
});
