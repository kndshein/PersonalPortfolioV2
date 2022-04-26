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
import Modal from "./modal";

export const ModalContext = createContext(null);

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalCardData, setModalCardData] = React.useState(null);

  const handleModal = (data) => {
    if (showModal) {
      setShowModal(false);
      setModalCardData(null);
      document.body.className = "";
    } else {
      setShowModal(true);
      setModalCardData(data);
      document.body.className = "modal-disable";
    }
  };

  const handleEscPress = (event) => {
    if (showModal && event.keyCode === 27) {
      handleModal();
    }
  };

  return (
    <>
      <Modal
        cardData={modalCardData}
        showModal={showModal}
        handleModal={handleModal}
      />
      <Navbar />
      <ModalContext.Provider
        value={{
          showModal: showModal,
          setShowModal: setShowModal,
          handleModal: handleModal,
        }}
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
