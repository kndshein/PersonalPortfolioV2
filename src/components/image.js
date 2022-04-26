import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Image = ({ image }) => {
  const modalContext = useContext(ModalContext);
  console.log(modalContext);

  return (
    <div className="image-container">
      <GatsbyImage
        className="image"
        image={image.gatsbyImageData}
        alt={image.description}
      />
    </div>
  );
};

export default Image;
