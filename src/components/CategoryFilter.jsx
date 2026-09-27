import React from "react";

import { initialProducts } from "../data/product";

import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = ({selectedCategory, setSelectedCategory}) => {
 
  return (
    <>
      <div className="filter-row">
        <Tag className="filter-tag-icon" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={()=>setSelectedCategory(category)}
            className={`filter-chip ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
