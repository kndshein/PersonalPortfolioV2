import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GrInstagram, GrLinkedinOption, GrMedium } from "react-icons/gr";
import { motion } from "framer-motion";

import Seo from "../components/seo";
import ThemeToggler from "../components/themetoggler";

const HomePage = ({ data }) => {
  let num = [...new Array(75).fill(1)],
    num2 = [...new Array(120).fill(1)];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <Seo title="Home" />
      <div className="homepage-container">
        <div className="links-container">
          <div className="logo-container">
            <Link to="/" className="logo-content">
              Kaung Nan Dar Shein
            </Link>
          </div>
          <div className="links">
            <div className="code">
              <Link to="/code/">
                <div className="link-title">I code.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span key={index}>CODE</span>;
                  })}
                </div>
                <GatsbyImage
                  className="image"
                  image={data.allContentfulAsset.edges[3].node.gatsbyImageData}
                  alt={data.allContentfulAsset.edges[3].node.description}
                />
              </Link>
            </div>
            <div className="snap">
              <Link to="/design/">
                <div className="link-title">I design.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span key={index}>DESIGN</span>;
                  })}
                </div>
                <GatsbyImage
                  className="image"
                  image={data.allContentfulAsset.edges[0].node.gatsbyImageData}
                  alt={data.allContentfulAsset.edges[0].node.description}
                />
              </Link>
            </div>
            <div className="design">
              <Link to="/snap/">
                <div className="link-title">I snap.</div>
                <div className="link-hover">
                  {num.map((x, index) => {
                    return <span key={index}>SNAP</span>;
                  })}
                </div>
                <GatsbyImage
                  className="image"
                  image={data.allContentfulAsset.edges[1].node.gatsbyImageData}
                  alt={data.allContentfulAsset.edges[1].node.description}
                />
              </Link>
            </div>
            <div className="about">
              <Link to="/about/">
                <div className="link-title">I am.</div>
                <div className="link-hover">
                  {num2.map((x, index) => {
                    return <span key={index}>AM</span>;
                  })}
                </div>
                <GatsbyImage
                  className="image"
                  image={data.allContentfulAsset.edges[2].node.gatsbyImageData}
                  alt={data.allContentfulAsset.edges[2].node.description}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div>
            <span>Software Developer</span>
          </div>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kndshein/"
              >
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/durian.puberty/"
              >
                <GrInstagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@kndshein"
              >
                <GrMedium />
              </a>
            </li>
            <ThemeToggler />
          </ul>
        </div>
      </div>
    </motion.main>
  );
};

export default HomePage;

export const pageQuery = graphql`
  {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "MM 0909"
            "Code Card"
            "TeacherSouls - Businesscard Mockup"
            "Profile Picture Alt"
          ]
        }
      }
      sort: { fields: contentful_id, order: ASC }
    ) {
      edges {
        node {
          description
          gatsbyImageData(quality: 50, formats: [JPG], layout: FULL_WIDTH)
        }
      }
    }
  }
`;
