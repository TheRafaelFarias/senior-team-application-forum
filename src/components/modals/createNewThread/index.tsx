import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import { InputPlaceholder } from "@/components/input/styles";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import RichTextInput from "@/components/richtextinput";
import { Div } from "@/styles/globals";
import React from "react";
import { DropdownsContainer } from "../createNewAccount/styles";

const CreateNewThreadModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Let&apos;s create a new thread</ModalTitle>
      <DropdownsContainer>
        <Dropdown
          placeholder="Select a category"
          secondaryPlaceholder="Click here to see all categories"
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
        <Dropdown
          placeholder="Select a topic"
          secondaryPlaceholder="Click to see all category topics"
          data={["General", "Minecraft Related", "Staff Applications"]}
        />
      </DropdownsContainer>
      <Input
        name="Title"
        placeholder="Title"
        secondaryPlaceholder="Enter thread title here"
      />
      <Div flexDirection="column" gapY={1} style={{ width: "100%" }}>
        <InputPlaceholder>Content</InputPlaceholder>
        <RichTextInput />
      </Div>
      <ModalButton>Submit</ModalButton>
    </ModalContainer>
  );
};

export default CreateNewThreadModal;
