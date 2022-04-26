import React, { useState, useEffect } from "react";
import {
  MdClose,
  MdOpenInNew,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { GatsbyImage } from "gatsby-plugin-image";

const Modal = ({ modalData, showModal, handleModal }) => {
  const { index, type, dataArray } = modalData;
  const [cardIndex, setCardIndex] = useState(null);

  useEffect(() => {
    setCardIndex(index);
  }, [index]);

  console.log(dataArray, index);

  const handleLeft = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const handleRight = () => {
    if (cardIndex < dataArray.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-background" aria-hidden={true} />
          <button
            className="close-icon"
            onClick={() => handleModal()}
            tabIndex="0"
          >
            <MdClose color="white" size={40} />
          </button>
          <button className="arrow-icon left" onClick={handleLeft} tabIndex="0">
            <MdChevronLeft color="white" size={50} />
          </button>
          <button
            className="arrow-icon right"
            onClick={handleRight}
            tabIndex="0"
          >
            <MdChevronRight color="white" size={50} />
          </button>
          {type === "video" && dataArray[cardIndex] && (
            <div className="card-container">
              <div className="title">{dataArray[cardIndex].node.title}</div>
              <div className="preview-container">
                <video autoPlay loop muted playsInline key={cardIndex}>
                  <source
                    src={dataArray[cardIndex].node.preview.file.url}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="text-container">
                {!dataArray[cardIndex].node.links.Livelink && (
                  <div className="construction-text">
                    Project currently under construction.
                  </div>
                )}
                <div className="technologies">
                  {dataArray[cardIndex].node.technologies.Technologies.map(
                    (technology, index) => {
                      return <span key={index}>{technology}</span>;
                    }
                  )}
                </div>
                <div className="description">
                  {dataArray[cardIndex].node.description}
                </div>
                {/* <div className="features">
                <div className="features-title">Features</div>
                <ul className="features-list">
                  {dataArray[index].node.features.Features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div> */}
                <div className="links">
                  {dataArray[cardIndex].node.links.Livelink && (
                    <a
                      className="live-link"
                      href={dataArray[cardIndex].node.links.Livelink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                      {"  "}
                      <MdOpenInNew size={15} style={{ marginLeft: "5px" }} />
                    </a>
                  )}
                  <a
                    className="github-link"
                    href={dataArray[cardIndex].node.links.GitHub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github {"  "}
                    <MdOpenInNew size={15} style={{ marginLeft: "5px" }} />
                  </a>
                </div>
              </div>
            </div>
          )}
          {type === "image" && (
            <div className="image-container">
              <GatsbyImage
                className="image"
                image={dataArray[cardIndex].node.gatsbyImageData}
                alt={dataArray[cardIndex].node.description}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
