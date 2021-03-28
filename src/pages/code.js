import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const codePage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="I Code" />
      <div className="code-page">
        <div className="cards-container">
          {data.projects.edges.map((project, index) => {
            return (
              <div className="card-container" key={index}>
                <div className="card-title">{project.node.title}</div>
                <div className="card-image">
                  <GatsbyImage
                    className="image"
                    image={project.node.image.gatsbyImageData}
                    alt={project.node.image.description}
                  />
                </div>
                <div className="card-overlay">{project.node.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default codePage;

export const pageQuery = graphql`
  query {
    projects: allContentfulCodeGallery {
      edges {
        node {
          title
          image {
            gatsbyImageData
            description
          }
          preview
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
