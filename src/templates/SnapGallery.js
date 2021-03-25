import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapGallery = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title={data.gallery.galleryTitle} />
        <div className="snap-gallery">
          {data.gallery.images.map((image, index) => {
            return (
              <div key={index}>
                <GatsbyImage
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
