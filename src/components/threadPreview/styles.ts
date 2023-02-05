import { Div } from "@/styles/globals";
import styled from "styled-components";

export const ThreadPreviewContainer = styled.button`
  border: none;
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  border-radius: 1rem;
  font-size: 0.725rem;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: ${(props) => props.theme.primaryText};
  height: fit-content;
  background-color: ${(props) => props.theme.secondary};

  & > div:last-of-type {
    overflow: hidden;
    height: 100%;
  }

  & > * > h1 {
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
  }
`;

export const ThreadPreviewUserImageWrapper = styled.div`
  position: relative;
  width: 5rem;
  min-width: 5rem;
  height: 5rem;
  min-height: 5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.beige};
  border-radius: 0.625rem;
`;

export const ThreadPreviewUserInformationContainer = styled(Div).attrs({
  flexDirection: "row",
  alignItems: "center",
})`
  gap: 0.625rem;

  & > h3 {
    color: white;
    font-size: 0.8rem;
  }

  & > div {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme.secondaryText};
    opacity: 0.3;
    border-radius: 999px;
  }

  & > p {
    color: ${(props) => props.theme.tertiaryText};
  }
`;

export const ThreadPreviewInformationText = styled.p`
  color: ${(props) => props.theme.tertiaryText};
`;
