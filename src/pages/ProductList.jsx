import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("all");

  const matchesPriceRange = (product) => {
    switch (priceRange) {
      case "under-50000":
        return product.price < 50000;
      case "50k-100k":
        return product.price >= 50000 && product.price <= 100000;
      case "100k-150k":
        return product.price > 100000 && product.price <= 150000;
      case "above-150k":
        return product.price > 150000;
      default:
        return true;
    }
  };

  const filterProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory && matchesPriceRange(product);
  });

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setPriceRange("all");
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-8 md:px-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />

        <div className="mb-6 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-extrabold text-white">
            Featured Gear ({filterProducts.length} Items)
          </h2>

          {(searchTerm || selectedCategory !== "All" || priceRange !== "all") && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="w-fit rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Clear filters
            </button>
          )}
        </div>

        {filterProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-10 text-center shadow-xl">
            <p className="text-xl font-bold text-white">No products match these filters.</p>
            <p className="mt-2 text-sm text-gray-400">
              Try adjusting your search, category, or price range.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
