import CommonButton from "@/components/atoms/CommonButton";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CartState() {
  const { t } = useTranslation("common");
  const { lang } = useParams();
  const getPath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

  return (
    <div className="cart-state">
      <img
        className="cart-state__image"
        src="/cart-empty.png"
        alt={t("cart.emptyTitle")}
      />

      <div className="cart-state__content">
        <h3>{t("cart.emptyTitle")}</h3>
        <p>{t("cart.emptyDescription")}</p>
      </div>

      <div className="cart-state__button">
        <CommonButton variant="primary">
          <Link to={getPath("/shop")}>{t("cart.shopButton")}</Link>
        </CommonButton>
      </div>
    </div>
  );
}