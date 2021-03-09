const path = require("path");
const slash = require("slash");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulSnapGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.error) {
        console.log("Error with contentful data", result.errors);
      }

      const snapTemplate = path.resolve("./src/templates/gallery.js");

      result.data.allContentfulSnapGallery.edges.forEach((gallery) => {
        createPage({
          path: `/snap/${gallery.node.slug}/`,
          component: slash(snapTemplate),
          context: {
            slug: gallery.node.slug,
          },
        });
      });
    })
    .catch((error) => console.log("Error with contentful data", error));
};
