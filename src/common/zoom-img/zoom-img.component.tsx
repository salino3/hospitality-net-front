import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { useAppFunctions } from "../../hooks";
import "./zoom-img.styles.scss";

interface Props {
  img: string;
  alt?: string;
  download?: boolean;
  show: boolean;

  setShow: Dispatch<SetStateAction<any>>;
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
          <button>rotate</button>
          <button>X</button>
          {download && (
            <button onClick={() => downLoadImage(img || "")}>
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
