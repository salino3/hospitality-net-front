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

// Working in progress
export const ContainerMultiFiless: React.FC<{
  file: (string & any) | (File & any);
}> = ({ file }) => {
  return (
    <div className="containerMultiFiless">
      <div className="card">
        <span>{file instanceof File && file?.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
};

//*
export const ContainerFile: React.FC<{
  fileName: AccountRegisterForm["profile_picture"] | string;
}> = ({ fileName }) => {
  return (
    <div className="containerFile">
      <span>{fileName instanceof File && fileName?.name}</span>
      <svg
        onClick={(event) => {
          event?.preventDefault();
          event?.stopPropagation();
        }}
        className="svg_01"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="24"
        viewBox="0 0 24 24"
        // fill="green"
        // stroke="var(--color-17)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
};

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
    <div onClick={click} ref={ref} className={`rootInputFiles ${customStyles}`}>
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
        {Array.isArray(fileName) && multiple && fileName?.length > 0 ? (
          fileName.map((file) => <ContainerMultiFiless file={file} />)
        ) : fileName instanceof File && fileName?.name ? (
          <ContainerFile fileName={fileName} />
        ) : (
          t("no_file_selected")
        )}
      </label>
      {errMsg && <small>{errMsg}</small>}
    </div>
  );
};
