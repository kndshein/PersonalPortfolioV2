import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="landing-text">
      <h1>
        Yello! My name is Kaung,
        <span>pronounced like King </span>
        <span>Kong.</span>
      </h1>
      <p>
        Front-End Developer
        <br />
        Graphic Designer
        <br />
        Avid Gamer
        <br />
        Photographer
        <br />
        Keyboard Enthusiast
      </p>
      <Link to="/about" id="more-about-me">
        More About Me
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
