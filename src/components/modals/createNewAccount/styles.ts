import styled from "styled-components";

export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.625rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 1.25rem;
  }
`;
