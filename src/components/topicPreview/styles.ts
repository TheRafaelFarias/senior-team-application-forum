import styled from "styled-components";

export const TopicPreviewContainer = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.75rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 1rem;
`;

export const TopicPreviewName = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.primaryText};
`;
