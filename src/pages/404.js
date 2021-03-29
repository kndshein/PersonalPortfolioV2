import React from "react";
import jeffsum from "jeffsum";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  const [paragraphs] = React.useState([]);
  for (let i = 0; i < 10; i++) {
    paragraphs.push(jeffsum(6));
  }

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Poop.</h1>
      <h4>Something went wrong.</h4>
      <p>
        Since you're here, might as well read about that one time I pooped my
        pants.
      </p>
      <p>
        Oh, and here's randomly generated Jeff Goldblum text placeholder from{" "}
        <a href="https://jeffsum.com" target="_blank" rel="noreferrer">
          Jeffsum
        </a>
      </p>
      {paragraphs.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </Layout>
  );
};

export default NotFoundPage;
