import { useState } from "react";
import { TFunction } from "i18next";
import { Company } from "../../../../core/companies";
import { useAppFunctions } from "../../../../hooks";
import { ZoomImg } from "../../../../common";
import "./card-companies.styles.scss";

export const CardCompanies: React.FC<{
  company: Company;
  t: TFunction<"dashboard", undefined>;
}> = ({ company, t }) => {
  const { downLoadImage } = useAppFunctions();

  const [zommImage, setZoomImage] = useState<{ [key: number]: boolean }>({
    [company?.company_id || 0]: false,
  });

  return (
    <div key={company?.company_id} className="cardComapny">
      <div className="boxInfo">
        <span>{company?.company_name}</span>
        <span>{company?.contact_email}</span>
      </div>
      <div className="boxLogo">
        {zommImage?.[company?.company_id || 0] && (
          <ZoomImg
            show={zommImage?.[company?.company_id || 0]}
            setShow={setZoomImage}
            img={company?.logo || ""}
            alt="Logo"
          />
        )}
        <img
          className="img_10"
          onClick={() =>
            setZoomImage({
              [company?.company_id || 0]:
                !zommImage?.[company?.company_id || 0],
            })
          }
          src={company?.logo}
          alt="Logo"
        />

        <div className="box_88">
          <small>{t("zoom_it")}</small>
          <button
            onClick={() => downLoadImage(company?.logo || "")}
            className="smallBtn"
          >
            <small>{t("download")}</small>
          </button>
        </div>
      </div>
    </div>
  );
};
