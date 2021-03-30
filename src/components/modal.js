import React from "react";
import { MdClose, MdOpenInNew } from "react-icons/md";

const Modal = ({ cardData, showModal, handleModal }) => {
  console.log(cardData);
  console.log("modal", showModal);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div
            className="modal-background"
            onClick={() => handleModal()}
            aria-hidden={true}
          />
          <div
            className="close-icon"
            onClick={() => handleModal()}
            role="button"
            tabIndex="0"
            onKeyPress={() => handleModal()}
          >
            <MdClose color="white" size={40} />
          </div>
          <div className="card-container">
            <div className="title">{cardData.title}</div>
            <div className="preview-container">
              <video autoPlay loop muted>
                <source src={cardData.preview.file.url} type="video/mp4" />
              </video>
            </div>
            <div className="text-container">
              <div className="technologies">
                {cardData.technologies.Technologies.map((technology, index) => {
                  return <span key={index}>{technology}</span>;
                })}
              </div>
              <div className="description">{cardData.description}</div>
              <div className="features">
                <div className="features-title">Features</div>
                <ul className="features-list">
                  {cardData.features.Features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
              <div className="links">
                <a
                  className="live-link"
                  href={cardData.links.Livelink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website {"  "}
                  <MdOpenInNew size={15} style={{ marginLeft: "5px" }} />
                </a>
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
        </div>
      )}
    </>
  );
};

export default Modal;
