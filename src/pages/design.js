import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const DesignPage = ({ data }) => {
  // console.log(data);
  return (
    <Layout>
      <Seo title="I Design" />
      <div className="design-page">
        <div className="page-title">Design</div>
        <div className="cards-container">
          {data.galleries.edges.map((gallery, index) => {
            const image = gallery.node.images.filter(
              (image) => image.title === gallery.node.coverImage
            );
            return (
              <Link
                to={`${gallery.node.slug}`}
                className="card-link"
                key={index}
              >
                <div className="card-container">
                  <div className="image-container">
                    <GatsbyImage
                      className="image"
                      image={image[0].gatsbyImageData}
                      alt={image[0].description}
                    />
                  </div>
                  <div className="card-title">{gallery.node.galleryTitle}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default DesignPage;

export const pageQuery = graphql`
  query {
    galleries: allContentfulDesignGallery(sort: { fields: order, order: ASC }) {
      edges {
        node {
          slug
          galleryTitle
          coverImage
          images {
            title
            description
            gatsbyImageData(layout: FULL_WIDTH, formats: [JPG], quality: 75)
          }
        }
      }
    }
  }
`;
