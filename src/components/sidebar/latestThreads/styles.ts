import styled from "styled-components";

export const LatestThreadContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  white-space: nowrap;
  gap: 0.625rem;

  & > div:last-of-type {
    overflow: hidden;
  }

  & > * > h3 {
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 1rem;
  }

  & > * > p {
    font-size: 0.8rem;
  }
`;

export const LatestThreadUserImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  min-height: 3rem;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.beige};
`;
