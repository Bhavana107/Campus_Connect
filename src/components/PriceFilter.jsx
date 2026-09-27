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
    <div className="mb-6 rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-gray-300">
          <IndianRupee className="h-4 w-4 text-orange-500" />
          <span>Filter by price</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={priceRange === option.value}
              onClick={() => setPriceRange(option.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                priceRange === option.value
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-800/40"
                  : "border border-gray-700 bg-gray-800 text-gray-300 hover:border-orange-500 hover:text-orange-400"
              }`}
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
