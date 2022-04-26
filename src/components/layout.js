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
  const [modalData, setModalData] = useState({
    data: null,
    type: null,
    dataArray: null,
  });

  const handleModal = (data, type, dataArray) => {
    if (!data && showModal) {
      setShowModal(false);
      setModalData({ data: null, type: null, dataArray: null });
      document.body.className = "";
    } else {
      setShowModal(true);
      setModalData({ data: data, type: type, dataArray: dataArray });
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
        modalData={modalData}
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
