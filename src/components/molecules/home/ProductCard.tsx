import type { Product } from "@/types/Product";

export default function ProductCard({ image, name, price, points }: Product) {
  return (
    <div className="card-product">
      <div className="card-product-image-wrapper">
        <img className="card-product-image" src={image} alt={name} />
      </div>
      <div className="card-product-content">
        <div className="card-product-info-content">
          <p className="product-name">{name}</p>
          <p>${price.toFixed(2)}</p>
          <p>⭐⭐⭐⭐⭐ {points}</p>
        </div>
        <button className="btn btn--primary-full">Añadir al carrito</button>
      </div>
    </div>
  );
}
