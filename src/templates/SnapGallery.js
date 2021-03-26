import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapGallery = ({ data }) => {
  console.log(data.gallery.images);
  // let images = [];
  // while (data.gallery.images.length > 0) {
  //   let current = [];
  //   current.push(data.gallery.images.shift());
  //   current.push(data.gallery.images.shift());
  //   images.push(current);
  // }

  return (
    <>
      <Layout>
        <SEO title={data.gallery.galleryTitle} />
        <div className="snap-gallery">
          {data.gallery.images.map((image, index) => {
            return (
              <div className="image-container" key={index}>
                <GatsbyImage
                  className="poop"
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
