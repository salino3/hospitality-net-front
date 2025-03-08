import { TFunction } from "i18next";
import { Company } from "../../../../core/companies";
import "./card-companies.styles.scss";

export const CardCompanies: React.FC<{
  company: Company;
  t: TFunction<"dashboard", undefined>;
}> = ({ company, t }) => {
  function downLoadImage(logo: string) {
    if (!logo) return;

    fetch(logo)
      .then((response) => response.blob()) // Convert the image to a Blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        // Obtener la extensión del archivo de la URL
        const extension = logo.split(".").pop()?.split("?")[0] || "png"; // Si no tiene extensión, usa 'png'
        const fileName = `company_logo.${extension}`;

        // Crear un enlace de descarga
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Liberar el objeto URL
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the image:", error));
  }

  return (
    <div key={company?.company_id} className="cardComapny">
      <div className="boxInfo">
        <span>{company?.company_name}</span>
        <span>{company?.contact_email}</span>
      </div>
      <div className="boxLogo">
        <img src={company?.logo} alt="Logo" />
        <button
          onClick={() => downLoadImage(company?.logo || "")}
          className="smallBtn"
        >
          <small>{t("download")}</small>
        </button>
      </div>
    </div>
  );
};
