import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const DesignGallery = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Layout>
        <Seo title={data.gallery.galleryTitle} />
        <div className="design-gallery">
          <div className="gallery-title">
            <span>DESIGN:</span>
            {data.gallery.galleryTitle}
          </div>
          {data.gallery.images.map((image, index) => {
            return (
              <div className="image-container" key={index}>
                <GatsbyImage
                  className="image"
                  image={image.gatsbyImageData}
                  alt={image.description}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default DesignGallery;

export const pageQuery = graphql`
  query($slug: String!) {
    gallery: contentfulDesignGallery(slug: { eq: $slug }) {
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
