import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import ProductCard from "../components/ProductCard";
import ClassInfoBox from "../components/ClassInfoBox";

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
      <div className="page-shell">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />

        <ClassInfoBox
          title="Smart Shopping"
          message="Browse by category, filter by budget, and save favorite products to your wishlist before checkout."
        />

        <div className="product-topbar">
          <h2 className="section-title">
            Featured Gear ({filterProducts.length} Items)
          </h2>

          {(searchTerm || selectedCategory !== "All" || priceRange !== "all") && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="clear-button"
            >
              Clear filters
            </button>
          )}
        </div>

        {filterProducts.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No products match these filters.</p>
            <p className="empty-state-text">
              Try adjusting your search, category, or price range.
            </p>
          </div>
        ) : (
          <div className="product-grid">
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
