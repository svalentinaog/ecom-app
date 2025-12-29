import HeroSection from "@/components/sections/shop/HeroSection";
import FilterSidebar from "../sections/shop/FilterSidebar";
import ProductListSection from "../sections/shop/ProductListSection";
import Container from "@/layouts/Container";

export default function ShopTemplate() {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="shop-content">
          <FilterSidebar />
          <ProductListSection />
        </div>
      </Container>
    </>
  );
}
