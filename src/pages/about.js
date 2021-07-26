import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Form from "../components/form";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="I am" />
      <div className="about-page">
        <div className="about-text">
          <img
            id="profile-pic"
            src="https://res.cloudinary.com/kndshein/image/upload/c_crop,g_north,h_867,w_734/v1609575414/Project%20One/About/IMG_0469_tdsdwo.jpg"
            alt="Selfie of Kaung"
          />
          <h2>
            Yello! My name is Kaung,
            {/* <br /> */}
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
            I am a full-stack developer with a passion for design. My background
            is in Biochemistry and Studio Art, the former I pursued as a pre-med
            student.
            <br />
            <br />I love tech, gadgets, and a good bagel, egg, and cheese. I am
            obsessed with self-improvement, minimalist aesthetics, and
            mechanical keyboards -- all very costly things I can't afford. In my
            free time, you can find me putting games in my wishlist but not
            actually playing them. As I realize that this bio has gotten far too
            similar to a dating profile, here's{" "}
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
        <Form />
      </div>
    </Layout>
  );
};

export default AboutPage;
