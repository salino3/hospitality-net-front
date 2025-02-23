import React from "react";
import "./basic-input.styles.scss";

interface PropsBasicInput {
  type: string;
  name: string;
  customStyles?: string;
  lbl?: string;
  fs?: boolean;
  click?: React.MouseEventHandler<HTMLInputElement> | undefined;
  change?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
}

export const BasicInput: React.FC<PropsBasicInput> = (props) => {
  const {
    type,
    name,
    customStyles,
    lbl,
    fs = true,
    click,
    change,
    ref,
  } = props;
  return (
    <div ref={ref} className={`containerBasicInput ${customStyles}`}>
      <div
        style={{
          alignItems: fs ? "flex-start" : "center",
        }}
        className="contentInputBI"
      >
        <label htmlFor={name}>{lbl}</label>
        <input
          id={name}
          name={name}
          type={type}
          onClick={click}
          onChange={change}
        />
      </div>
    </div>
  );
};
