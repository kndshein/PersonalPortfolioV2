import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { useModal } from "./modalcontext";

const Image = ({ image, imageArray }) => {
  const { handleModal } = useModal();
  let images = imageArray.flat();

  return (
    <div className="image-container">
      <GatsbyImage
        className="image"
        image={image.gatsbyImageData}
        alt={image.description}
        onClick={() => {
          let index = images.findIndex(
            (_image) => _image.contentful_id === image.contentful_id
          );
          console.log(index, images);
          handleModal(index, "image", images);
        }}
      />
    </div>
  );
};

export default Image;
