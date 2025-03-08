import { TFunction } from "i18next";
import { Company } from "../../../../core/companies";
import { useAppFunctions } from "../../../../hooks";
import "./card-companies.styles.scss";

export const CardCompanies: React.FC<{
  company: Company;
  t: TFunction<"dashboard", undefined>;
}> = ({ company, t }) => {
  const { downLoadImage } = useAppFunctions();

  return (
    <div key={company?.company_id} className="cardComapny">
      <div className="boxInfo">
        <span>{company?.company_name}</span>
        <span>{company?.contact_email}</span>
      </div>
      <div className="boxLogo">
        <img onClick={() => {}} src={company?.logo} alt="Logo" />
        <div className="box_88">
          <small>{t("zoom_it")}</small>{" "}
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
