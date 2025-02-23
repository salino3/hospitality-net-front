import React from "react";
import "./basic-input.styles.scss";

interface PropsBasicInput {
  type: string;
  name: string;
  customStyles?: string;
  lbl?: string;
  click?: React.MouseEventHandler<HTMLInputElement> | undefined;
  change?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
  errMsg?: string;
  checkError?: boolean;
}

export const BasicInput: React.FC<PropsBasicInput> = (props) => {
  const {
    type,
    name,
    customStyles,
    lbl,
    click,
    change,
    ref,
    errMsg,
    checkError = false,
  } = props;
  return (
    <div ref={ref} className={`containerBasicInput ${customStyles}`}>
      <div className="contentInputBI">
        <label htmlFor={name}>{lbl}</label>
        <input
          className={`${checkError ? "inputError" : ""}`}
          // It works after focus
          //   pattern="[A-Za-z]{3,10}"
          //   required
          //   onInvalid={handleInvalid} // Handle errors
          id={name}
          name={name}
          type={type}
          onClick={click}
          onChange={change}
          // onInput={() => alert("Hi!")} // It works when value change
        />
      </div>
      {errMsg && <small>{errMsg}</small>}
    </div>
  );
};
