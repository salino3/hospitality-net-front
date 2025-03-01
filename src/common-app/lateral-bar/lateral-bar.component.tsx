import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { GlobalAppContext } from "../../core";
import "./lateral-bar.styles.scss";

export const LateralBar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { showPersonalInfo } = useContext(GlobalAppContext);

  if (isMobile && !showPersonalInfo) {
    return null;
  }

  return (
    <div className="rootLateralBar">
      <h3>Lateral Bar</h3>
    </div>
  );
};
