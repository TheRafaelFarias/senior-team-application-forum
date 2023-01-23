import { Div } from "@/styles/globals";
import styled from "styled-components";

export const ThreadPreviewContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  border-radius: 1rem;
  font-size: 0.725rem;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.primaryText};
  height: fit-content;
  background-color: ${(props) => props.theme.secondary};

  & > div:last-of-type {
    overflow: hidden;
  }

  & > * > h1 {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ThreadPreviewUserImageWrapper = styled.div`
  position: relative;
  width: 5rem;
  min-width: 5rem;
  height: 5rem;
  min-height: 5rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ThreadPreviewInformationText = styled.p`
  color: ${(props) => props.theme.tertiaryText};
`;
