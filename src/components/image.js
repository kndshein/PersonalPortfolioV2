import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Image = ({ image, imageArray }) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className="image-container">
      <GatsbyImage
        className="image"
        image={image.gatsbyImageData}
        alt={image.description}
        onClick={() => handleModal(image, "image", imageArray.flat())}
      />
    </div>
  );
};

export default Image;
