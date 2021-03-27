import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapGallery = ({ data }) => {
  // console.log(data.gallery.images);
  // let images = [];
  // while (data.gallery.images.length > 0) {
  //   let current = [];
  //   current.push(data.gallery.images.shift());
  //   current.push(data.gallery.images.shift());
  //   images.push(current);
  // }
  let images = [];
  let column = Math.floor(data.gallery.images.length / 3);
  images.push(data.gallery.images.splice(0, column));
  images.push(data.gallery.images.splice(0, column));
  images.push(data.gallery.images);
  console.log(images);

  return (
    <>
      <Layout>
        <SEO title={data.gallery.galleryTitle} />
        <div className="snap-gallery">
          <div className="gallery-title">{data.gallery.galleryTitle}</div>
          {images.map((column, columnIndex) => {
            return (
              <div className={`column-${columnIndex + 1}`} key={columnIndex}>
                {column.map((image, imageIndex) => {
                  return (
                    <div className="image-container" key={imageIndex}>
                      <GatsbyImage
                        className="image"
                        image={image.gatsbyImageData}
                        alt={image.description}
                      />
                    </div>
                  );
                })}
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
