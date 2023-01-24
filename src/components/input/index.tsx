import React from "react";
import { InputContainer, InputPlaceholder, InputStyled } from "./styles";

interface InputProps {
  name: string
  placeholder: string;
  secondaryPlaceholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, secondaryPlaceholder }) => {
  return (
    <InputContainer>
      <InputPlaceholder>{placeholder}</InputPlaceholder>
      <InputStyled
        placeholder={secondaryPlaceholder && "Enter thread title here"}
      />
    </InputContainer>
  );
};

export default Input;
