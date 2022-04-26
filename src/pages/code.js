import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";

const CodePage = ({ data }) => {
  return (
    <Layout>
      <Seo title="I Code" />
      <div className="code-page">
        <div className="code-title">Code</div>
        <div className="cards-container">
          {data.projects.edges.map((project, index) => {
            return <Card data={project.node} key={index} />;
          })}
        </div>
      </div>
    </Layout>
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
