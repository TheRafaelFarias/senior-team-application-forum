import { MouseEvent } from "react";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 1.25rem;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    left: 0px;
    padding-left: 2rem;
    top: 0px;
    height: 100%;
    padding-top: calc(1.875rem * 2);

    &[data-sidebar-open="true"] {
      display: flex;
    }
  }
`;

export const SidebarCloseButtonWrapper = styled.button`
  border: none;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  right: 2rem;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const CardContainer = styled.div.attrs({
  onClick: (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  },
})`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 1rem;
  padding: 1.25rem;
  row-gap: 1.25rem;
  max-width: 300px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.primaryText};
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.625rem;
`;
