import Input from "@/components/input";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import React from "react";

const LoginModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Loign in an already existing account</ModalTitle>
      <Input />
      <Input />
      <ModalButton>Login</ModalButton>
    </ModalContainer>
  );
};

export default LoginModal;
