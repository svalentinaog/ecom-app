import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import type { Product } from "@/types/Product";

import ProductCard from "@/components/molecules/ProductCard";
import { useTranslation } from "react-i18next";

export default function ProductListSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation("shop");
  const currentLang = (i18n.language as "es" | "en") || "es";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>("/data.json");
        setProducts(res.data);
      } catch (e) {
        setError("error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category[currentLang]))),
    [products, currentLang]
  );

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category[currentLang] === filter);

  return (
    <div className="products">
      <div className="current-category">
        <h3>{filter === "all" ? "" : filter}</h3>
      </div>

      <div className="product-list-shop">
        {loading && <p>...</p>}
        {error && <p>...</p>}
        {!loading &&
          !error &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>

      <div className="product-cta">Paginado</div>
    </div>
  );
}
