/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal";

import { useModal } from "./modalcontext";

const Layout = ({ children }) => {
  const { modalData, showModal, handleModal } = useModal();

  return (
    <>
      <Modal
        modalData={modalData}
        showModal={showModal}
        handleModal={handleModal}
      />
      <Navbar />

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

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
