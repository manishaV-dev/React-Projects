import React, { useState } from "react";
import ModalBox from "./components/ModalBox";
import "./modal.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      <ModalBox isOpen={showModal} closeModal={() => setShowModal(false)} />
    </>
  );
};

export default Modal;
