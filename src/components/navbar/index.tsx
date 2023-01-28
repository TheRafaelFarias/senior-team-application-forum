import { defaultTheme } from "@/config/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCreate, IoMdMenu } from "react-icons/io";
import { useModal } from "../modal/hooks/useModal";
import UserImage from "../userImage";
import {
  NavbarButton,
  NavbarContainer,
  NavbarMobileButton,
  NavbarSideContent,
  NavbarUserInformationsContainer,
  NavbarUsername,
  NavbarWebsiteText,
} from "./styles";

const Navbar: React.FC = () => {
  const { changeCurrentModal } = useModal();

  const handleSidebarOpenButton = () => {
    const sidebarElementAttribute = document
      .getElementById("sidebar")
      ?.attributes!.getNamedItem("data-sidebar-open")!;
    const isSidebarOpen = Boolean(sidebarElementAttribute!.value!);
    if (isSidebarOpen) {
      sidebarElementAttribute.value = "true";
    } else {
      sidebarElementAttribute.value = "false";
    }
  };

  return (
    <NavbarContainer>
      <Link href="/">
        <NavbarSideContent>
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Junior Team Forums logo that has a gradient orange background with a white lighting in the center of it"
          />
          <NavbarWebsiteText>Junior Team Forums</NavbarWebsiteText>
        </NavbarSideContent>
      </Link>

      <NavbarSideContent>
        <NavbarButton
          onClick={() => {
            changeCurrentModal("createNewThread");
          }}
        >
          <IoMdCreate size={25} />
        </NavbarButton>
        <NavbarMobileButton onClick={handleSidebarOpenButton}>
          <IoMdMenu size={30} color={defaultTheme.tertiaryText} />
        </NavbarMobileButton>
        <NavbarUserInformationsContainer>
          <UserImage />
          <NavbarUsername>Rafael Farias</NavbarUsername>
        </NavbarUserInformationsContainer>
      </NavbarSideContent>
    </NavbarContainer>
  );
};

export default Navbar;
