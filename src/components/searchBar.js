import React from "react";

const SearchBar = (props) => {
    return (
      <div className="search-bar-wrapper">
          <p>Enter a date to see that date's image</p>
        <form className="search-form">
          Date: <input
            onInput = {event => {
              props.setDate(event.target.value)
              // console.log(event)
              // debugger
            }}
            type="date"
            placeholder="YYYY-MM-DD format"
          />
        </form>
        <p>{`This image date ${props.mediaDate}`}</p>
      </div>
    );
  };
  
  export default SearchBar;