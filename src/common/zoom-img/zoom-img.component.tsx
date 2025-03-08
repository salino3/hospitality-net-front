import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useAppFunctions } from "../../hooks";
import "./zoom-img.styles.scss";

interface Props {
  img: string;
  alt?: string;
  download?: boolean;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean | any>>;
}

export const ZoomImg: React.FC<Props> = (props) => {
  const { img, alt, download, show, setShow } = props;

  if (!show) {
    return;
  }

  const { t } = useTranslation("dashboard");

  const { downLoadImage } = useAppFunctions();
  console.log("hola", show);
  return (
    <div className="containerZoomImg">
      <div onClick={() => setShow(!show)} className="contentZoomImg">
        <section onClick={(e) => e.stopPropagation()}>
          <button className="btnStylesApp">{t("rotate")}</button>
          <button className="btnStylesApp" onClick={() => setShow(!show)}>
            {t("close")}
          </button>
          {download && (
            <button
              className="btnStylesApp secundaryBtn"
              onClick={() => downLoadImage(img || "")}
            >
              {t("download")}
            </button>
          )}
        </section>
        <div onClick={(e) => e.stopPropagation()} className="boxZoomImg">
          <img src={img} alt={alt} />
        </div>
      </div>
    </div>
  );
};
