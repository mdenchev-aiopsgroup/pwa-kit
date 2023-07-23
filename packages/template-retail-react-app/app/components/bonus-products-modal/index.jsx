import React from "react";

import { ModalBody, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "../shared/ui/index";

const BonusProductsModal = ({isOpen, onClose}) => {
    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choice of Bonus Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
}

export default BonusProductsModal