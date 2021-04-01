import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../components/modal";

const CodePage = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalCard, setModalCard] = React.useState();

  const handleModal = (index) => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
      setModalCard(data.projects.edges[index].node);
    }
  };

  console.log("code", showModal);

  return (
    <>
      <Modal
        cardData={modalCard}
        showModal={showModal}
        handleModal={handleModal}
      />
      <Layout>
        <SEO title="I Code" />
        <div className="code-page">
          <div className="code-title">Code</div>
          <div className="cards-container">
            {data.projects.edges.map((project, index) => {
              return (
                <div
                  className="card-container"
                  key={index}
                  onClick={() => handleModal(index)}
                  role="button"
                  tabIndex="0"
                  onKeyPress={() => handleModal(index)}
                >
                  <div className="card-title">{project.node.title}</div>
                  <div className="card-image">
                    <GatsbyImage
                      className="image"
                      image={project.node.image.gatsbyImageData}
                      alt={project.node.image.description}
                    />
                  </div>
                  {/* <div className="card-overlay">{project.node.description}</div> */}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CodePage;

export const pageQuery = graphql`
  query {
    projects: allContentfulCodeGallery(sort: { fields: order, order: ASC }) {
      edges {
        node {
          title
          image {
            gatsbyImageData
            description
          }
          preview {
            file {
              url
            }
          }
          description
          features: childContentfulCodeGalleryFeaturesJsonNode {
            Features
          }
          links: childContentfulCodeGalleryLinkJsonNode {
            GitHub
            Livelink
          }
          technologies: childContentfulCodeGalleryTechnologiesJsonNode {
            Technologies
          }
        }
      }
    }
  }
`;
