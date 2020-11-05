import React from "react";
import SearchBar from "./searchBar"

const HeaderSection = (props) => {
    return (
        <div className = "header">
            {/* {console.log("props in header"+props)} */}
            <h1 className = "header-title">{props.imageTitle}</h1>
            <SearchBar mediaDate={props.mediaDate} setDate={props.setDate}/>
        </div>
    )
}

export default HeaderSection;