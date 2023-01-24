import styled from "styled-components";

export const ModalWithBackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  min-width: 600px;
  height: fit-content;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 1.25rem;
  padding: 2.625rem 2.5rem 2rem;
`;

export const ModalTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.primaryText};
`;

export const ModalButton = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 600;
  max-width: 10rem;
  transition: 200ms;
  max-height: 1.625rem;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primary};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
