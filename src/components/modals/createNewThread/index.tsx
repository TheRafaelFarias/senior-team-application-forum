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
          placeholder="Select a category"
          secondaryPlaceholder="Click here to see all categories"
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
        <Dropdown
          placeholder="Select a topic"
          secondaryPlaceholder="Click to see all category topis"
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
      </Div>
      <Input
        name="Title"
        placeholder="Title"
        secondaryPlaceholder="Enter thread title here"
      />
      <ModalButton>Teste</ModalButton>
    </ModalContainer>
  );
};

export default CreateNewThreadModal;
