import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SnapGallery = ({ data }) => {
  const [images] = React.useState([]);

  React.useState(() => {
    let column = Math.round(data.gallery.images.length / 3);
    images.push(data.gallery.images.slice(0, column));
    images.push(data.gallery.images.slice(column, column * 2));
    images.push(data.gallery.images.slice(column * 2));
  }, []);

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
