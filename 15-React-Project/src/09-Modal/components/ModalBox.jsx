import React, { useRef } from "react";
import useClickOutside from "../hooks/use-click-outside";

const ModalBox = ({ isOpen, closeModal }) => {
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  if (!isOpen) {
    // if modal is not open then return null -- if isOpen is false then return null
    return null;
  }

  return (
    <>
      <div className="modal-container" ref={modalRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          accusamus repellendus odit praesentium quisquam consequatur dolores
          sapiente, modi quaerat officiis. Quaerat facilis repudiandae id magnam
          minima porro! Officia, iste hic?
        </p>

        <button onClick={closeModal}>Close</button>
      </div>
    </>
  );
};

export default ModalBox;
