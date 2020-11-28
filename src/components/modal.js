import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import modalStyles from "./modal.module.scss";

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = (props) => setModal(!modal);

  return (
    <div className={modalStyles.body}>
      <Button color="outline-warning" onClick={toggle}>{props.buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tech-E Trash</ModalHeader>
        <ModalBody>
            {props.children}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;