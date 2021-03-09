import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Gallery = ({ data }) => {
  console.log(data.gallery.images);
  return (
    <div>
      <div>
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
      <div>poop</div>
    </div>
  );
};

export default Gallery;

export const pageQuery = graphql`
  query($slug: String!) {
    gallery: contentfulSnapGallery(slug: { eq: $slug }) {
      slug
      images {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
