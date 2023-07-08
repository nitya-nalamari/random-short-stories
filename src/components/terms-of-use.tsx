import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

export default function TermsOfUse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link color="#FFFFFF" onClick={onOpen}>
        Terms of use
      </Link>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms of use</ModalHeader>
          <ModalCloseButton />
          <ModalBody>These are our terms of use</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
