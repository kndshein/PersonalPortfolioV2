import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import Seo from "../components/seo";

const DesignGallery = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.gallery.galleryTitle} />
      <div className="design-gallery">
        <div className="gallery-title">
          <span>DESIGN:</span>
          {data.gallery.galleryTitle}
        </div>
        {data.gallery.images.map((image, index) => {
          return (
            <Image index={index} imageArray={data.gallery.images} key={index} />
          );
        })}
      </div>
    </Layout>
  );
};

export default DesignGallery;

export const pageQuery = graphql`
  query ($slug: String!) {
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
