import React from "react";
import { FaPoop } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="error-page">
        <div className="title">
          404. <FaPoop size={50} />. <div>Something went wrong.</div>
        </div>
        <div className="poop">
          Since you're already here, might as well read about that one time I{" "}
          <a href="" target="_blank" rel="noreferrer">
            pooped my pants.
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
