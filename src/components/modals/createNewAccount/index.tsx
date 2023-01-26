import Input from "@/components/input";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import React from "react";
import { useForm } from "react-hook-form";

interface CreateNewAccountFormValues {
  email: string;
  password: string;
  repeatedPassword: string;
}

const CreateNewAccountModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  const { control, handleSubmit } = useForm<CreateNewAccountFormValues>();

  const handleCreateNewAccountSubmit = async (
    values: CreateNewAccountFormValues
  ) => {
    // TODO
  };

  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Create a new Account</ModalTitle>
      <Input control={control} name="email" placeholder="Email" />
      <Input control={control} name="password" placeholder="Password" />
      <Input
        control={control}
        name="repeatedPassword"
        placeholder="Repeat password"
      />
      <ModalButton onClick={handleSubmit(handleCreateNewAccountSubmit)}>
        Submit
      </ModalButton>
    </ModalContainer>
  );
};

export default CreateNewAccountModal;
