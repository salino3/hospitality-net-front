import React from "react";
import "./input-photos.style.scss";

interface Props {
  multiple?: boolean | undefined;
  accept?: string | undefined;
  name: string;
  lbl?: any;
  value?: string | number | readonly string[] | undefined;
  customStyles?: string;
  errMsg?: string;
  checkError?: boolean;
  change?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  click?: React.MouseEventHandler<HTMLDivElement> | undefined;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
}
export const InputPhotos: React.FC<Props> = (props) => {
  const {
    multiple,
    accept = "image/*",
    name,
    ref,
    lbl,
    value,
    customStyles,
    errMsg,
    checkError = false,
    change,
    click,
  } = props;

  return (
    <div
      onClick={click}
      ref={ref}
      className={`rootInputPhotos ${customStyles}`}
    >
      <label htmlFor={name}>{lbl}</label>
      <input
        type="file"
        id={name}
        accept={accept}
        multiple={multiple}
        name={name}
        value={value}
        onChange={change}
        className={`${checkError ? "inputError" : ""}`}
      />{" "}
      {errMsg && <small>{errMsg}</small>}
    </div>
  );
};
