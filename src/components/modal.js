import React from "react";

const Modal = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="modal">
      <div className="card-container">
        <div className="preview-container">
          <video width="700" height="500" autoPlay loop muted>
            <source src={cardData.preview.file.url} type="video/mp4" />
          </video>
        </div>
        <div className="text-container">
          <div className="title">{cardData.title}</div>
          <div className="description">{cardData.description}</div>
          <div className="features">
            <div className="features-title">Features</div>
            <ul className="features-list">
              {cardData.features.Features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
          <div className="technologies">
            <div className="technologies-title">Technologies</div>
            <div className="technologies-list">
              {cardData.technologies.Technologies.map((technology, index) => {
                return <span key={index}>{technology}</span>;
              })}
            </div>
          </div>
          <div className="links">
            <a
              className="live-link"
              href={cardData.links.Livelink}
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
            <a
              className="github-link"
              href={cardData.links.GitHub}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
