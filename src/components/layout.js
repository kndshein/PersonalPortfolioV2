/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Navbar from "./navbar";
import Footer from "./footer";

export const ModalContext = createContext(null);

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />
      <ModalContext.Provider
        value={{ showModal: showModal, setShowModal: setShowModal }}
      >
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          {children}
        </motion.main>
      </ModalContext.Provider>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
