import type { Product } from "@/types/Product";
import { useTranslation } from "react-i18next";
import CommonButton from "@/components/atoms/CommonButton";
import QuantitySelector from "@/components/molecules/productDetail/QuantitySelector";
import Container from "@/layouts/Container";
import ProductGallery from "@/components/molecules/productDetail/ProductGallery";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export default function ProductCardDetail({ product }: { product: Product }) {
  const { t } = useTranslation("shop");
  const { i18n } = useTranslation();
  const { addToCart } = useCart();
  const currentLang = (i18n.language as "es" | "en") || "es";
  const displayName = product.name[currentLang];
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Container>
      <div className="card-product-detail">
        <ProductGallery images={product.images} />
        <div className="card-product-detail-content">
          <div className="card-product-detail-content-info">
            <h1 className="product-name">{displayName}</h1>
            <div className="product-detail-info-container">
              <div className="price-container">
                <h2 className="price">${product.price}</h2>
                <p className="old-price">${product.oldPrice}</p>
                <p className="discount">
                  {product.discount}% {t("product.discount")}
                </p>
              </div>
              <p>⭐⭐⭐⭐⭐ ({product.rating})</p>
            </div>
            <p>{product.description[currentLang]}</p>
          </div>
          <div className="card-product-detail-content-actions">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <CommonButton variant="primary" onClick={handleAddToCart}>
              {t("product.add_to_cart")}
            </CommonButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
