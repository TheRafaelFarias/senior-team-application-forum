import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavbarSideContent = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

export const NavbarWebsiteText = styled.h1`
  font-weight: 700;
  font-size: 1.625rem;
  color: ${(props) => props.theme.primary};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.tertiaryText};
  background-color: ${(props) => props.theme.secondary};
`;

export const NavbarUserInformationsContainer = styled.div`
  display: flex;
  column-gap: 0.825rem;
  align-items: center;
`;

export const NavbarUsername = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMobileButton = styled(NavbarButton)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
