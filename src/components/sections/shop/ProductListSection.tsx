import ProductCard from "@/components/molecules/common/ProductCard";
import ProductNotFound from "@/components/molecules/common/ProductNotFound";
import Container from "@/layouts/Container";
import FilterSidebar from "@/components/molecules/shop/FilterSidebar";
import { useShopProductList } from "@/hooks/useShopProductList";

export default function ProductListSection() {
  const {
    t,
    isFilterOpen,
    setIsFilterOpen,
    filteredProducts,
    categoryGroups,
    priceLimits,
    selectedCategoryInfo,
    priceRange,
    category,
    handleCategorySelect,
    handlePriceChange,
    handleClearFilters,
  } = useShopProductList();

  return (
    <Container>
      <div className="shop-content">
        {isFilterOpen && (
          <div
            className="filter-overlay"
            onClick={() => setIsFilterOpen(false)}
          />
        )}
        <div className={`filter-sidebar-wrapper ${isFilterOpen ? "open" : ""}`}>
          <div className="filter-sidebar-header">
            <h3>{t("filters.categories")}</h3>
            <button
              className="close-filter-btn"
              onClick={() => setIsFilterOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <FilterSidebar
            categories={categoryGroups}
            selectedCat={category}
            onSelectCat={handleCategorySelect}
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
            priceMin={priceLimits.min}
            priceMax={priceLimits.max}
          />
        </div>

        <div className="products-shop">
          <div className="current-category">
            <h3>
              {!selectedCategoryInfo ? t("products") : selectedCategoryInfo.selectedCategory}
            </h3>
            <button
              className="mobile-filter-btn"
              onClick={() => setIsFilterOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H21M7 12H17M10 19H14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t("filters.categories")}
            </button>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="product-list-shop">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            ) : (
              <ProductNotFound onClearFilters={handleClearFilters} />
            )}
        </div>
      </div>
    </Container>
  );
}
