import React from "react";
import { Control, Controller } from "react-hook-form";
import { InputContainer, InputPlaceholder, InputStyled } from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  secondaryPlaceholder?: string;
  control: Control<any>;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  secondaryPlaceholder,
  name,
  required,
  control,
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required,
      }}
      name={name}
      render={({ field: { onChange } }) => (
        <InputContainer onChange={onChange}>
          <InputPlaceholder>{placeholder}</InputPlaceholder>
          <InputStyled
            placeholder={secondaryPlaceholder && "Enter thread title here"}
          />
        </InputContainer>
      )}
    />
  );
};

export default Input;
