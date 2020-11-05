import React from "react";

const ImageSection = (props) => {
    const altText = `{props}`
    return (
    <div className="NASA-image-wrapper">
        {/* {console.log("props in image "+props)} */}
        <img
          alt="altText"
          className="NASA-image"
          src={props.imageUrl}
        />
      </div>)
}

export default ImageSection;