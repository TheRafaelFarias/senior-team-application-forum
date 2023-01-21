import Image from "next/image";
import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import UserImage from "../userImage";
import {
  NavbarButton,
  NavbarContainer,
  NavbarSideContent,
  NavbarUserInformationsContainer,
  NavbarUsername,
  NavbarWebsiteText,
} from "./styles";

const Navbar: React.FC = () => {
  const isLogged = true;

  return (
    <NavbarContainer>
      <NavbarSideContent>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Junior Team Forums logo that has a gradient orange background with a white lighting in the center of it"
        />
        <NavbarWebsiteText>Junior Team Forums</NavbarWebsiteText>
      </NavbarSideContent>

      <NavbarSideContent>
        <NavbarButton>
          <HiMagnifyingGlass size={20} />
        </NavbarButton>
        {isLogged ? (
          <NavbarUserInformationsContainer>
            <UserImage />
            <NavbarUsername>Rafael Farias</NavbarUsername>
            <BiCaretDown color="white" size={16} />
          </NavbarUserInformationsContainer>
        ) : (
          <NavbarButton>
            <FiLogIn color="white" size={18} />
          </NavbarButton>
        )}
      </NavbarSideContent>
    </NavbarContainer>
  );
};

export default Navbar;
