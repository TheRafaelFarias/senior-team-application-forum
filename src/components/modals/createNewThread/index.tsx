import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import { Div } from "@/styles/globals";
import React from "react";

const CreateNewThreadModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Let&apos;s create a new thread</ModalTitle>
      <Div flexDirection="row" gapX={1.625} style={{ width: "100%" }}>
        <Dropdown
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
        <Dropdown
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
      </Div>
      <Input />
      <ModalButton>Teste</ModalButton>
    </ModalContainer>
  );
};

export default CreateNewThreadModal;
