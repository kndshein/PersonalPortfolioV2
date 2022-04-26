import React, { useState, useEffect } from "react";
import { MdClose, MdOpenInNew } from "react-icons/md";
import { GatsbyImage } from "gatsby-plugin-image";

const Modal = ({ modalData, showModal, handleModal }) => {
  const { data, type, dataArray } = modalData;
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  console.log(data);

  return (
    <>
      {showModal && cardData && (
        <div className="modal">
          <div className="modal-background" aria-hidden={true} />
          <button
            className="close-icon"
            onClick={() => handleModal()}
            tabIndex="0"
          >
            <MdClose color="white" size={40} />
          </button>
          {type === "video" && (
            <div className="card-container">
              <div className="title">{cardData.title}</div>
              <div className="preview-container">
                <video autoPlay loop muted playsInline>
                  <source src={cardData.preview.file.url} type="video/mp4" />
                </video>
              </div>
              <div className="text-container">
                {!cardData.links.Livelink && (
                  <div className="construction-text">
                    Project currently under construction.
                  </div>
                )}
                <div className="technologies">
                  {cardData.technologies.Technologies.map(
                    (technology, index) => {
                      return <span key={index}>{technology}</span>;
                    }
                  )}
                </div>
                <div className="description">{cardData.description}</div>
                {/* <div className="features">
                <div className="features-title">Features</div>
                <ul className="features-list">
                  {cardData.features.Features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div> */}
                <div className="links">
                  {cardData.links.Livelink && (
                    <a
                      className="live-link"
                      href={cardData.links.Livelink}
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
                    href={cardData.links.GitHub}
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
                image={cardData.gatsbyImageData}
                alt={cardData.description}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
