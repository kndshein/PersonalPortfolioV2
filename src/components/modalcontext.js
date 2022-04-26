import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    data: null,
    type: null,
    dataArray: null,
  });

  const handleModal = (index, type, dataArray) => {
    console.log(index, type, dataArray);
    if (!index && showModal) {
      setShowModal(false);
      setModalData({ index: null, type: null, dataArray: null });
      document.body.className = "";
    } else {
      setShowModal(true);
      setModalData({ index: index, type: type, dataArray: dataArray });
      document.body.className = "modal-disable";
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalData: modalData,
        showModal: showModal,
        setShowModal: setShowModal,
        handleModal: handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
