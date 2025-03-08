import { useTranslation } from "react-i18next";
import { useAppFunctions } from "../../hooks";
import "./zoom-img.styles.scss";

interface Props {
  img: string;
  alt?: string;
  download?: boolean;
}

export const ZoomImg: React.FC<Props> = (props) => {
  const { img, alt, download } = props;

  const { t } = useTranslation("dashboard");

  const { downLoadImage } = useAppFunctions();

  return (
    <div className="containerZoomImg">
      <div className="contentZoomImg">
        <section>
          <button>rotate</button>
          <button>X</button>
          {download && (
            <button onClick={() => downLoadImage(img || "")}>
              {t("download")}
            </button>
          )}
        </section>
        <div className="boxZoomImg">
          <img src={img} alt={alt} />
        </div>
      </div>
    </div>
  );
};
