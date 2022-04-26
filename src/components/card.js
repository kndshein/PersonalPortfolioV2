import React, { useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ModalContext } from "./layout";

const Card = ({ data }) => {
  const { handleModal } = useContext(ModalContext);
  return (
    <button className="card-container" onClick={() => handleModal(data)}>
      <div className="card-title">{data.title}</div>
      <div className="card-image">
        <GatsbyImage
          className="image"
          image={data.image.gatsbyImageData}
          alt={data.image.description}
        />
      </div>
    </button>
  );
};

export default Card;
