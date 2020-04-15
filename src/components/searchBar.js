import React from "react";

const SearchBar = () => {
    return (
      <div className="search-bar-wrapper">
        <div className="social">
        </div>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search"
          />
        </form>
        <div className="social-wrapper">
        </div>
      </div>
    );
  };
  
  export default SearchBar;