import React from "react";

const Description = (props) => {
    return (
        <div className = "descriptionClass">
            {console.log("props in description "+props)}
            <h4 className = "header-title">{props.imageDescription}</h4>
        </div>
    )
}

export default Description;