import Input from "@/components/input";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  const { control, handleSubmit } = useForm<LoginFormValues>();

  const handleLoginSubmit = async (values: LoginFormValues) => {
    // TODO
  };

  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Loign in an already existing account</ModalTitle>
      <Input control={control} name="email" placeholder="Email" />
      <Input control={control} name="password" placeholder="Password" />
      <ModalButton onClick={handleSubmit(handleLoginSubmit)}>Login</ModalButton>
    </ModalContainer>
  );
};

export default LoginModal;
