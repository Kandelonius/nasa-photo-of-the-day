import React, { useEffect } from "react";

const SearchBar = () => {
    return (
      <div className="search-bar-wrapper">
          {/* {console.log("let's search")} */}
        <form className="search-form">
          <input
            type="text"
            placeholder="YYYY-MM-DD format"
          />
        </form>
        
      </div>
    );
  };
  
  export default SearchBar;