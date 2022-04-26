import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Image = ({ image }) => {
  const { setShowModal } = useContext(ModalContext);

  return (
    <div className="image-container">
      <GatsbyImage
        className="image"
        image={image.gatsbyImageData}
        alt={image.description}
        onClick={() => setShowModal(true)}
      />
    </div>
  );
};

export default Image;
