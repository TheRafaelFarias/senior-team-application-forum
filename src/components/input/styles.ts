import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const InputPlaceholder = styled.p`
  color: ${(props) => props.theme.quartiaryText};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const InputStyled = styled.input`
  border: none;
  outline: none;
  text-align: start;
  border-radius: 0.375rem;
  padding: 0.625rem 1.25rem;
  color: ${(props) => props.theme.primaryText};
  background: ${(props) => props.theme.secondary};

  cursor: pointer;

  &::placeholder {
    color: ${(props) => props.theme.secondaryText};
  }
`;
