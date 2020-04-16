import React from "react";

const ImageSection = (props) => {
    return (
    <div className="NASA-image-wrapper">
        {console.log("props in image "+props)}
        <img
          alt="post thumbnail"
          className="{props.imageTitle}"
          src={props.imageUrl}
        />
      </div>)
}

export default ImageSection;