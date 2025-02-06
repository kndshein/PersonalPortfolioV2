import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { MARKS } from "@contentful/rich-text-types";
import { MdOpenInNew } from "react-icons/md";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Form from "../components/form";

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Italic = ({ children }) => <span className="italic">{children}</span>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
  },
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="I am" />
      <div className="about-page">
        <div className="about-text">
          <GatsbyImage
            className="profile-pic"
            image={data.profilepic.edges[0].node.gatsbyImageData}
            alt={data.profilepic.edges[0].node.description}
            title={data.profilepic.edges[0].node.description}
          />
          <h2>
            Yello! My name is Kaung,
            <div>
              <span>pronounced like King </span>
              <span>Kong.</span>
            </div>
          </h2>
          <div className="brand-statement">
            Full-stack developer building software through the lens of science,
            data, and aesthetics. Driven by creating solutions for a dynamic
            balance of form and function. Constantly striving for a “no-effort”
            look with maximum effort.
          </div>
          <div className="bio">
            Or as my{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dougleinen.com/"
            >
              friend
            </a>{" "}
            puts it...
          </div>
          <div className="brand-statement second">
            Full-stack developer suffering from impostor syndrome who builds
            sites through the lens of over-thinking. Driven by OCD. Occasionally
            striving for well-thought through look, but also sometimes just
            wanting to do things that aren't viewed as pretentious in his mind.
          </div>
          <div className="bio">
            My background is in Biochemistry and Studio Art, the former I
            pursued as a pre-med student. I love tech, gadgets, and a good
            bagel, egg, and cheese. I am obsessed with self-improvement,
            minimalism, and mechanical keyboards -- all very costly things I
            can't afford. In my free time, you can find me putting games in my
            wishlist but not actually playing them. As I realize that this bio
            has gotten far too similar to a dating profile, here's{" "}
            <a
              href="https://medium.com/the-haven/my-hate-hate-relationship-with-vinegar-b627593cf96"
              target="_blank"
              rel="noopener noreferrer"
            >
              an article I wrote
            </a>{" "}
            that'll tell you more about myself better than I can.
          </div>
        </div>
        <div className="entries-container">
          {data.entries.edges.map((entry, index) => {
            return (
              <div
                key={index}
                className="entry"
                id={entry.node.highlight ? "highlight" : ""}
              >
                <div className="date">
                  <span className="month">{entry.node.month}</span>
                  <span className="year bold">{entry.node.year}</span>
                </div>
                <div className="event-container">
                  <div className="event">
                    <div className={`${entry.node.link ? "margin" : ""}`}>
                      {renderRichText(entry.node.event, options)}
                    </div>{" "}
                    {entry.node.link && (
                      <a
                        className="learn-more"
                        href={entry.node.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                        <MdOpenInNew size={20} style={{ marginLeft: "5px" }} />
                      </a>
                    )}
                  </div>
                  {entry.node.duration && (
                    <div className="duration">{entry.node.duration}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* <Form /> */}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  {
    entries: allContentfulAboutMeTimeline(sort: { fields: order, order: ASC }) {
      edges {
        node {
          link
          duration
          event {
            raw
          }
          month
          year
          highlight
        }
      }
    }
    profilepic: allContentfulAsset(
      filter: { title: { eq: "About Me Profile Picture" } }
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
