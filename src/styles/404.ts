import styled from "styled-components";

export const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
`;

export const Logo404Container = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.h1`
  font-weight: 700;
  font-size: 1.625rem;
  color: ${(props) => props.theme.primary};
`;

export const Illustration404PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

export const Illustration404PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 400px;

  @media (max-width: 640px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const ErrorMessage = styled.h3`
  font-weight: 700;
  font-size: 1.625rem;
  text-align: center;
  color: ${(props) => props.theme.primaryText};

  & > span {
    color: ${(props) => props.theme.primary};
  }
`;

export const RedirectLink = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
`;
