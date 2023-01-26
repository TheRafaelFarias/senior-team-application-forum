import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCreate } from "react-icons/io";
import { useModal } from "../modal/hooks/useModal";
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
  const { changeCurrentModal } = useModal();

  return (
    <NavbarContainer>
      <NavbarSideContent>
        <Link href="/">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Junior Team Forums logo that has a gradient orange background with a white lighting in the center of it"
          />
          <NavbarWebsiteText>Junior Team Forums</NavbarWebsiteText>
        </Link>
      </NavbarSideContent>

      <NavbarSideContent>
        <NavbarButton
          onClick={() => {
            changeCurrentModal("createNewThread");
          }}
        >
          <IoMdCreate size={25} />
        </NavbarButton>
        <NavbarUserInformationsContainer>
          <UserImage />
          <NavbarUsername>Rafael Farias</NavbarUsername>
        </NavbarUserInformationsContainer>
      </NavbarSideContent>
    </NavbarContainer>
  );
};

export default Navbar;
