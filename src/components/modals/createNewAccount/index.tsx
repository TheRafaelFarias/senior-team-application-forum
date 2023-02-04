import { ModalProps } from "@/components/modal";
import { useModal } from "@/components/modal/hooks/useModal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import { signInWithGoogle } from "@/services/auth/google";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const CreateNewAccountModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  const { closeModal } = useModal();

  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Authentication</ModalTitle>
      <ModalButton onClick={() => signInWithGoogle(closeModal)}>
        <FaGoogle />
        Login with Google
      </ModalButton>
    </ModalContainer>
  );
};

export default CreateNewAccountModal;
