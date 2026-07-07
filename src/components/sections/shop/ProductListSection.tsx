import ProductCard from "@/components/molecules/common/ProductCard";
import ProductNotFound from "@/components/molecules/common/ProductNotFound";
import Container from "@/layouts/Container";
import FilterSidebar from "@/components/molecules/shop/FilterSidebar";
import { useShopProductList } from "@/hooks/useShopProductList";
import CommonButton from "@/components/atoms/CommonButton";
import { refresh } from "@/assets";

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
           
              <button className="clear-filters" onClick={handleClearFilters} aria-label={t("filters.clear")}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 24C15.35 24 18.1875 22.8375 20.5125 20.5125C22.8375 18.1875 24 15.35 24 12C24 8.65 22.8375 5.8125 20.5125 3.4875C18.1875 1.1625 15.35 0 12 0C10.275 0 8.625 0.35625 7.05 1.06875C5.475 1.78125 4.125 2.8 3 4.125V0H-9.53674e-07V10.5H10.5V7.5H4.2C5 6.1 6.09375 5 7.48125 4.2C8.86875 3.4 10.375 3 12 3C14.5 3 16.625 3.875 18.375 5.625C20.125 7.375 21 9.5 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21C10.075 21 8.3375 20.45 6.7875 19.35C5.2375 18.25 4.15 16.8 3.525 15H0.374999C1.075 17.65 2.5 19.8125 4.65 21.4875C6.8 23.1625 9.25 24 12 24Z" fill="currentColor" />
                </svg>
              </button>
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
