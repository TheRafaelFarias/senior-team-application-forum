import Input from "@/components/input";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import React from "react";

const CreateNewAccountModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Create a new Account</ModalTitle>
      <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Password" />
      <Input name="repeatedPassword" placeholder="Repeat password" />
      <ModalButton>Submit</ModalButton>
    </ModalContainer>
  );
};

export default CreateNewAccountModal;
