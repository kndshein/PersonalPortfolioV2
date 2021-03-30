import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const DesignPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="I Design" />
      <div className="design-page">Design</div>
    </Layout>
  );
};

export default DesignPage;

export const pageQuery = graphql`
  query {
    galleries: allContentfulDesignGallery {
      edges {
        node {
          slug
          galleryTitle
          coverImage
          images {
            title
            description
            gatsbyImageData(layout: FULL_WIDTH, formats: [JPG], quality: 25)
          }
        }
      }
    }
  }
`;
