import { useTranslation } from "react-i18next";
import { useCart } from "@/contexts/CartContext";
import CartState from "@/components/molecules/cart/CartState";
import CommonButton from "@/components/atoms/CommonButton";
import { cart } from "@/assets";

export default function HeroSection() {
  const { t, i18n } = useTranslation("common");
  const { cart: cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const currentLang = (i18n.language as "es" | "en") || "es";

  return (
    <div className="cart-content">
      {cartItems.length === 0 ? (
        <CartState />
      ) : (
        <>
          {/* Cart Table */}
          <div className="cart-table">
            <div className="cart-table-header">
              <span>{t("cart.columns.product")}</span>
              <span>{t("cart.columns.price")}</span>
              <span>{t("cart.columns.quantity")}</span>
              <span>{t("cart.columns.total")}</span>
              <span>{t("cart.columns.remove")}</span>
            </div>
            {cartItems.map((item) => {
              const totalItem = item.product.price * item.quantity;
              return (
                <div key={item.product.id} className="cart-item">
                  <div className="cart-item-product">
                    <img
                      src={
                        item.product.images[0] || "/images/product-image.jpg"
                      }
                      alt={item.product.name[currentLang]}
                    />
                    <p>{item.product.name[currentLang]}</p>
                  </div>
                  <span>${item.product.price.toLocaleString()}</span>
                  <div className="cart-item-quantity">
                    <img src={cart} alt="cart" className="cart-quantity-icon" />
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span>${totalItem.toLocaleString()}</span>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>

          {/* Divider with cart icon */}
          <div className="cart-divider">
            <div className="cart-divider-line"></div>
            <img src={cart} alt="cart" className="cart-divider-icon" />
            <div className="cart-divider-line"></div>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <div className="cart-summary-header">
              <h3>{t("cart.summary.title")}</h3>
            </div>
            <div className="cart-summary-item">
              <span>{t("cart.summary.subtotal")}</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>
            <div className="cart-summary-item">
              <span>{t("cart.summary.shipping")}</span>
              <span>{t("cart.summary.shippingFree")}</span>
            </div>
            <div className="cart-summary-total">
              <span>{t("cart.summary.total")}</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>
            <CommonButton variant="primary-full-width">
              {t("cart.checkoutButton")}
            </CommonButton>
          </div>
        </>
      )}
    </div>
  );
}
