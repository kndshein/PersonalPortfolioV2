import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="I am" />
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
          <p>
            Full-stack developer building software through the lens of science,
            data, and aesthetics. Driven by creating solutions for a dynamic
            balance of form and function. Constantly striving for a “no-effort”
            look with maximum effort. <br />
            <br />
            I am a graphic designer and an aspiring software engineer with a
            background in Biochemistry and Studio Art. After graduating from
            Beloit College, a small liberal arts college in Wisconsin, I worked
            in the chemical industry before pursuing software engineering
            full-time. <br />
            <br />
            As a designer, I strive for intuitive user-interface designs with
            the just the right balance of form vs. function. In this day and
            age, beautiful design should be accessible to anyone.
            <br />
            <br />
            In my free time, you can find me putting games in my wishlist but
            not actually playing them.
          </p>
        </div>
        <Form />
      </div>
    </Layout>
  );
};

export default AboutPage;
