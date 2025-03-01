import React, { memo, useState } from "react";
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
  setFormData: React.Dispatch<React.SetStateAction<AccountRegisterForm>>;
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
}> = memo(({ file }) => {
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
});

//*
export const ContainerFile: React.FC<{
  fileName: AccountRegisterForm["profile_picture"] | string;
  setFormData: React.Dispatch<React.SetStateAction<AccountRegisterForm>>;
}> = memo(({ fileName, setFormData }) => {
  return (
    <div className="containerFile">
      <span>{fileName instanceof File && fileName?.name}</span>
      <svg
        onClick={(event) => {
          event?.preventDefault();
          event?.stopPropagation();
          setFormData((prev) => ({ ...prev, profile_picture: null }));
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
});

//
export const InputPhotos: React.FC<Props> = (props) => {
  const {
    multiple,
    accept = "image/*",
    name,
    ref,
    lbl,
    value,
    fileName,
    setFormData,
    customStyles,
    errMsg,
    checkError = false,
    change,
    click,
  } = props;

  const { t } = useTranslation("common");

  const [dragging, setDragging] = useState(false);

  // Function manage drag event
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // Add the first file (nn case multiple)
      const file = files[0];
      setFormData((prev) => ({ ...prev, profile_picture: file }));
    }
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  console.log("here1", fileName);
  return (
    <div onClick={click} ref={ref} className={`rootInputFiles ${customStyles}`}>
      <span className="spanText">{lbl}</span>
      <label
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        htmlFor={name}
        className="customFileLabel"
      >
        <div
          className={`boxInputFiles ${dragging ? "dragging" : ""}${
            !fileName && checkError ? "inputError" : ""
          }`}
        >
          {t(multiple ? "select_files" : "select_file")}
          <input
            type="file"
            id={name}
            accept={accept}
            multiple={multiple}
            name={name}
            value={value}
            onChange={change}
            hidden={true}
            // Change 'key' for rerender <input> in case user mistake to delete photo and load same photo instantly
            key={fileName instanceof File ? fileName.name : "noFile"}
          />
        </div>
        {Array.isArray(fileName) && multiple && fileName?.length > 0 ? (
          fileName.map((file) => <ContainerMultiFiless file={file} />)
        ) : fileName instanceof File && fileName?.name ? (
          <ContainerFile fileName={fileName} setFormData={setFormData} />
        ) : (
          <span className="span_014">{t("no_file_selected")}</span>
        )}
      </label>
      {!fileName && errMsg && <small>{errMsg}</small>}
    </div>
  );
};
