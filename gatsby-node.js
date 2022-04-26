const path = require("path");
const slash = require("slash");

// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
//   if (getConfig().mode === "production") {
//     actions.setWebpackConfig({
//       devtool: false,
//     });
//   }
// };

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
        allContentfulDesignGallery {
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

      const designTemplate = path.resolve("./src/templates/DesignGallery.js");

      const snapTemplate = path.resolve("./src/templates/SnapGallery.js");

      result.data.allContentfulDesignGallery.edges.forEach((gallery) => {
        createPage({
          path: `/design/${gallery.node.slug}/`,
          component: slash(designTemplate),
          context: {
            slug: gallery.node.slug,
          },
        });
      });

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
