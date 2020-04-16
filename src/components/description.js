import React from "react";

const Description = (props) => {
    return (
        <div className = "descriptionClass">
            <h4>{`Like What you see? Check out the high definition version at ${props.hdImageUrl}`}</h4>
            {/* {console.log("props in description "+props)} */}
            <h4 className = "header-title">{props.imageDescription}</h4>
        </div>
    )
}

export default Description;