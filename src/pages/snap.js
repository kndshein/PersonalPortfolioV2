import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="I Snap" />
        <div className="snap-page">
          <div className="cards-container">
            {data.galleries.edges.map((gallery, index) => {
              const image = gallery.node.images.filter(
                (image) => image.title === gallery.node.coverImage
              );
              return (
                <div className="card-container">
                  <div className="flex-container">
                    <div className="card-title" key={index}>
                      {gallery.node.galleryTitle}
                    </div>
                    <GatsbyImage
                      className="card-image"
                      image={image[0].gatsbyImageData}
                      alt={image[0].description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SnapPage;

export const pageQuery = graphql`
  query {
    galleries: allContentfulSnapGallery {
      edges {
        node {
          galleryTitle
          coverImage
          images {
            title
            description
            gatsbyImageData(layout: FULL_WIDTH, formats: [JPG])
          }
        }
      }
    }
  }
`;
