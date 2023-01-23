import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
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
