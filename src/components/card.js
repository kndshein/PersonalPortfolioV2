import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { useModal } from "./modalcontext";

const Card = ({ index, videoArray }) => {
  const { handleModal } = useModal();

  return (
    <button
      className="card-container"
      onClick={() => handleModal(index, "video", videoArray)}
    >
      <div className="card-title">{videoArray[index].node.title}</div>
      <div className="card-image">
        <GatsbyImage
          className="image"
          image={videoArray[index].node.image.gatsbyImageData}
          alt={videoArray[index].node.image.description}
        />
      </div>
    </button>
  );
};

export default Card;
