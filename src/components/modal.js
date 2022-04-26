import React from "react";
import { MdClose, MdOpenInNew } from "react-icons/md";

const Modal = ({ modalData, showModal, handleModal }) => {
  const { data, type } = modalData;
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
          {type === "video" && (
            <div className="card-container">
              <div className="title">{data.title}</div>
              <div className="preview-container">
                <video autoPlay loop muted playsInline>
                  <source src={data.preview.file.url} type="video/mp4" />
                </video>
              </div>
              <div className="text-container">
                {!data.links.Livelink && (
                  <div className="construction-text">
                    Project currently under construction.
                  </div>
                )}
                <div className="technologies">
                  {data.technologies.Technologies.map((technology, index) => {
                    return <span key={index}>{technology}</span>;
                  })}
                </div>
                <div className="description">{data.description}</div>
                {/* <div className="features">
                <div className="features-title">Features</div>
                <ul className="features-list">
                  {data.features.Features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div> */}
                <div className="links">
                  {data.links.Livelink && (
                    <a
                      className="live-link"
                      href={data.links.Livelink}
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
                    href={data.links.GitHub}
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
        </div>
      )}
    </>
  );
};

export default Modal;
