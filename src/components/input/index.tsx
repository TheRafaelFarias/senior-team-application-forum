import React from "react";
import { InputContainer, InputPlaceholder, InputStyled } from "./styles";

const Input: React.FC = () => {
  return (
    <InputContainer>
      <InputPlaceholder>Title</InputPlaceholder>
      <InputStyled placeholder="Enter thread title here" />
    </InputContainer>
  );
};

export default Input;
