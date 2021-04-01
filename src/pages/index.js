import React from "react";
import { graphql, Link } from "gatsby";
import Typist from "react-typist";
import { GatsbyImage } from "gatsby-plugin-image";
import { GrInstagram, GrLinkedinOption, GrMedium } from "react-icons/gr";

import SEO from "../components/seo";

const HomePage = ({ data }) => {
  console.log(data.allContentfulAsset.edges[0].node.gatsbyImageData);
  var num = [],
    num2 = [],
    i = 0,
    j = 0,
    len = 75,
    len2 = 120;
  while (++i <= len) num.push(i);
  while (++j <= len2) num2.push(i);

  return (
    <>
      <SEO title="Home" />
      <div className="homepage-container">
        <div className="links-container">
          <div className="logo-container">
            <Link to="/" className="logo-content">
              Kaung Nan Dar Shein
            </Link>
          </div>
          <div className="links">
            <div className="code">
              <Link to="/code">
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
              <Link to="/design">
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
              <Link to="/snap">
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
              <Link to="/about">
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
          <Typist
            avgTypingDelay={40}
            stdTypingDelay={0}
            cursor={{ blink: true, element: "." }}
          >
            <span>Front-End Developer</span>
            <Typist.Backspace count={19} delay={800} />
            <span>Graphic Designer</span>
            <Typist.Backspace count={16} delay={500} />
            <span>Biochemist</span>
            <Typist.Backspace count={10} delay={800} />
            <span>Keyboard Enthusiast</span>
            <Typist.Backspace count={19} delay={500} />
            <span>Avid Gamer</span>
            <Typist.Backspace count={10} delay={800} />
            <span>Minimalist</span>
            <Typist.Backspace count={10} delay={800} />
            <span>Planted Aquarium Admirer</span>
            <Typist.Backspace count={24} delay={500} />
            <span>Full-Stack Developer</span>
          </Typist>
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
          </ul>
        </div>
      </div>
    </>
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
