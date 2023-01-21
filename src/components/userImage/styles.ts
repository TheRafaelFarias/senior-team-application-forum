import styled from "styled-components";

export const UserImageWithBorderWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.yellow};
`;

export const UserImageWithBorderContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  position: relative;
  background-color: ${(props) => props.theme.beige};
`;
