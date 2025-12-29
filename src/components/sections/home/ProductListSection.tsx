import { useEffect, useState } from "react";
import axios from "axios";

import type { Product } from "@/types/Product";

import ProductFilter from "@/components/molecules/ProductFilter";
import ProductCard from "@/components/molecules/ProductCard";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Button from "@/components/atoms/Button";

export default function ProductListSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // Obtenemos 'i18n' para saber el idioma actual ('es' o 'en')
  const { t, i18n } = useTranslation("home");
  const currentLang = (i18n.language as "es" | "en") || "es";
  const { lang } = useParams();
  const getPath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

  useEffect(() => {
    axios.get<Product[]>("/data.json").then((res) => setProducts(res.data));
  }, []);

  // 1. Obtener categorías traducidas según el idioma actual
  const categories = Array.from(
    new Set(products.map((p) => p.category[currentLang]))
  );

  // 2. Filtro dinámico comparando el string traducido
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category[currentLang] === filter);

  return (
    <Container>
      <div className="products">
        <h2>{t("products.title")}</h2>

        <ProductFilter
          categories={categories}
          selected={filter}
          onSelect={setFilter}
        />

        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="product-cta">
          <Button variant="primary">
            <a href={getPath("/shop")}>{t("products.view_more")}</a>
          </Button>
        </div>
      </div>
    </Container>
  );
}
