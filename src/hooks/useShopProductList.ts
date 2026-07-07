import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useProductFilter } from "@/hooks/useProductFilter";

export function useShopProductList() {
  const { t, i18n } = useTranslation("shop");
  const currentLang = (i18n.language as "es" | "en") || "es";
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";
  const priceMinParam = searchParams.get("priceMin");
  const priceMaxParam = searchParams.get("priceMax");
  const priceRange: [number, number] = [
    priceMinParam ? parseInt(priceMinParam, 10) : 0,
    priceMaxParam ? parseInt(priceMaxParam, 10) : 25000,
  ];

  const { filteredProducts, categoryGroups, priceLimits, selectedCategoryInfo } =
    useProductFilter(currentLang, searchTerm, category, priceRange);

  const handleCategorySelect = (cat: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (cat === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", cat);
    }

    setSearchParams(nextParams);
    setIsFilterOpen(false);
  };

  const handlePriceChange = (range: [number, number]) => {
    const nextParams = new URLSearchParams(searchParams);

    if (range[0] === 0) {
      nextParams.delete("priceMin");
    } else {
      nextParams.set("priceMin", range[0].toString());
    }

    if (range[1] === priceLimits.max) {
      nextParams.delete("priceMax");
    } else {
      nextParams.set("priceMax", range[1].toString());
    }

    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setSearchParams({});
  };

  return {
    t,
    currentLang,
    isFilterOpen,
    setIsFilterOpen,
    filteredProducts,
    categoryGroups,
    priceLimits,
    selectedCategoryInfo,
    searchTerm,
    category,
    priceRange,
    handleCategorySelect,
    handlePriceChange,
    handleClearFilters,
  };
}
