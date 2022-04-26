import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Image = ({ index, imageArray }) => {
  const { handleModal } = useContext(ModalContext);
  let images = imageArray.flat();
  console.log(images, index);

  return (
    <>
      {images[index] && (
        <div className="image-container">
          <GatsbyImage
            className="image"
            image={images[index].gatsbyImageData}
            alt={images[index].description}
            onClick={() => handleModal(index, "image", images)}
          />
        </div>
      )}
    </>
  );
};

export default Image;
