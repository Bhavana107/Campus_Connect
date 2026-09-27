import React from "react";

import { IndianRupee } from "lucide-react";

const priceOptions = [
  { label: "All Prices", value: "all" },
  { label: "Under ₹50k", value: "under-50000" },
  { label: "₹50k - ₹1L", value: "50k-100k" },
  { label: "₹1L - ₹1.5L", value: "100k-150k" },
  { label: "Above ₹1.5L", value: "above-150k" },
];

const PriceFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div className="price-filter">
      <div className="price-filter-row">
        <div className="price-filter-title">
          <IndianRupee className="filter-tag-icon" />
          <span>Filter by price</span>
        </div>

        <div className="filter-group">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={priceRange === option.value}
              onClick={() => setPriceRange(option.value)}
              className={`filter-chip ${priceRange === option.value ? "active" : ""}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
