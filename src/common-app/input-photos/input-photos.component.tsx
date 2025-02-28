import React from "react";
import { useTranslation } from "react-i18next";
import { AccountRegisterForm } from "../../core/accounts";
import "./input-photos.style.scss";

interface Props {
  multiple?: boolean | undefined;
  accept?: string | undefined;
  name: string;
  lbl?: any;
  value?: string | number | readonly string[] | undefined;
  fileName: AccountRegisterForm["profile_picture"] | string;
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
    fileName,
    customStyles,
    errMsg,
    checkError = false,
    change,
    click,
  } = props;

  const { t } = useTranslation("common");
  console.log("here1", fileName);
  return (
    <div
      onClick={click}
      ref={ref}
      className={`rootInputPhotos ${customStyles}`}
    >
      <span>{lbl}</span>
      <label htmlFor={name} className="customFileLabel">
        <div className="boxInputFiles">
          {t("select_file")}
          <input
            type="file"
            id={name}
            accept={accept}
            multiple={multiple}
            name={name}
            value={value}
            onChange={change}
            hidden={true}
            className={`${checkError ? "inputError" : ""}`}
          />
        </div>
        {Array.isArray(fileName) && multiple && fileName?.length > 0
          ? fileName.map((file) => <div>{file?.name}</div>)
          : fileName instanceof File && fileName?.name
          ? fileName?.name
          : t("no_file_selected")}
      </label>
      {errMsg && <small>{errMsg}</small>}
    </div>
  );
};
