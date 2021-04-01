import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="I Snap" />
      <div className="snap-page">
        <div className="page-title">Snap</div>
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
                  <div className="cover-image-wrap">
                    <div className="cover-image">
                      <div className="image-container">
                        <GatsbyImage
                          className="image"
                          image={image[0].gatsbyImageData}
                          alt={image[0].description}
                        />
                      </div>
                    </div>
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

export default SnapPage;

export const pageQuery = graphql`
  query {
    galleries: allContentfulSnapGallery(sort: { fields: order, order: ASC }) {
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
