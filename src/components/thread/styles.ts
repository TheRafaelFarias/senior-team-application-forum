import styled from "styled-components";

export const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;
  border-radius: 1rem;
  padding: 2.5rem 1.875rem;
  background-color: ${(props) => props.theme.secondary};
`;

export const ThreadInformationsDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  & > h1 {
    font-weight: 600;
    white-space: nowrap;
    font-size: 1.125rem;
    color: ${(props) => props.theme.primaryText};
  }

  & > p {
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const ThreadContentContainer = styled.div`
  color: ${(props) => props.theme.primaryText};
  font-size: 0.825rem;
  font-weight: 400;
`;

export const ThreadNewCommentTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.primaryText};
`;
