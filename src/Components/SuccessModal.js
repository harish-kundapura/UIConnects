import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import style from "../Components/SuccessModal.module.css";

const SuccessModal = ({
  modalShow,
  setModalShow,
  filledValues,
  setLoading,
}) => {
  console.log("filledValues", filledValues);

  const handleClose = () => {
    setModalShow(false);
    setLoading(false);
  };

  return (
    <div>
      <Modal
        show={modalShow}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className={`${style.headerText} `}>
            UI CONNECT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            "Thank you for the submission {filledValues?.name}. We will contact
            you either by {filledValues?.email} or {filledValues?.mobile} if we
            need more information".{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SuccessModal;
