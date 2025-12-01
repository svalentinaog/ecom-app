import { useEffect, useState } from "react";
import axios from "axios";

import type { Product } from "@/types/Product";

import ProductFilter from "@/components/molecules/home/ProductFilter";
import ProductCard from "@/components/molecules/home/ProductCard";
import Container from "@/layouts/Container";

export default function ProductListSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    axios.get<Product[]>("/data.json").then((res) => setProducts(res.data));
  }, []);

  // Obtener solo las categorías
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filtro dinámico
  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="">
      <Container>
        <div className="products">
          <h2>Productos</h2>

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

          <div className="products-cta">
            <button className="btn btn--primary">Ver productos</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
