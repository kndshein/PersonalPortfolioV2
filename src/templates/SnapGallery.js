import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapGallery = ({ data }) => {
  console.log(data.gallery.images);
  let images = [];
  while (data.gallery.images.length > 0) {
    let current = [];
    current.push(data.gallery.images.shift());
    current.push(data.gallery.images.shift());
    images.push(current);
  }

  return (
    <>
      <Layout>
        <SEO title={data.gallery.galleryTitle} />
        <div className="snap-gallery">
          {images.map((image, index) => {
            return (
              <div className="row-container" key={index}>
                <div className="image-container">
                  <img
                    src={image[0].gatsbyImageData.images.fallback.src}
                    alt={image[0].description}
                  />
                </div>
                <div className="image-container">
                  <img
                    src={image[1].gatsbyImageData.images.fallback.src}
                    alt={image[1].description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default SnapGallery;

export const pageQuery = graphql`
  query($slug: String!) {
    gallery: contentfulSnapGallery(slug: { eq: $slug }) {
      slug
      galleryTitle
      images {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH, formats: [JPG], quality: 75)
      }
    }
  }
`;
