import React from "react";

import { Search } from "lucide-react";

const SearchFilter = ({searchTerm, setSearchTerm}) => {
  return (
    <>
      <div className="search-panel">
        <div className="search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search high-performance product by name or feature..."
            className="search-input"
            aria-label="Search Products"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
