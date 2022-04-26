import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Image = ({ image, imageArray }) => {
  const { handleModal } = useContext(ModalContext);
  let images = imageArray.flat();
  console.log(images);

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
          handleModal(index, "image", images);
        }}
      />
    </div>
  );
};

export default Image;
