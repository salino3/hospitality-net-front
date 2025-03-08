import { TFunction } from "i18next";
import { Company } from "../../../../core/companies";
import "./card-companies.styles.scss";

export const CardCompanies: React.FC<{
  company: Company;
  t: TFunction<"dashboard", undefined>;
}> = ({ company, t }) => {
  return (
    <div key={company?.company_id} className="cardComapny">
      <div className="boxInfo">
        <span>{company?.company_name}</span>
        <span>{company?.contact_email}</span>
      </div>
      <div className="boxLogo">
        <img src={company?.logo} alt="Logo" />
        <button className="smallBtn">
          <small>{t("download")}</small>
        </button>
      </div>
    </div>
  );
};
