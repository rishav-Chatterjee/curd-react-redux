import React from "react";
import Modal from "react-modal";

const SuccessModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={true} style={customStyles}>
      Expenditure added
    </Modal>
  );
};

export default SuccessModal;
