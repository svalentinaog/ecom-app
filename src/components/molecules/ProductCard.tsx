import type { Product } from "@/types/Product";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";

export default function ProductCard({ image, name, price, points }: Product) {
  const { t } = useTranslation("shop");
  const { i18n } = useTranslation();
  const currentLang = (i18n.language as "es" | "en") || "es";
  const displayName = name[currentLang];

  return (
    <div className="card-product">
      <div className="card-product-image-wrapper">
        <img className="card-product-image" src={image} alt={displayName} />
      </div>
      <div className="card-product-content">
        <div className="card-product-info-content">
          <p className="product-name">{displayName}</p>
          <p>${price.toFixed(2)}</p>
          <p>⭐⭐⭐⭐⭐ {points}</p>
        </div>
        <Button variant="primary-full-width">{t("product.add_to_cart")}</Button>
      </div>
    </div>
  );
}
