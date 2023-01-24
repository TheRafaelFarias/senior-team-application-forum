import styled from "styled-components";

export const AddNewThreadCommentButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryText};
  font-size: 0.825rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  width: fit-content;
  border: none;
  align-self: flex-end;
`;

export const ThreadAndCommentsDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.875rem 0px;
  background-color: ${(props) => props.theme.tertiaryText};
`;
