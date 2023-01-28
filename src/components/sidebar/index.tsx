import { Category } from "@/types/category";
import React, { MouseEvent } from "react";
import { IoClose } from "react-icons/io5";
import SidebarCategories from "./categories";
import SidebarLatestThreads from "./latestThreads";
import { SidebarCloseButtonWrapper, SidebarContainer } from "./styles";

const Sidebar: React.FC<{ allCategories?: Array<Category> }> = ({
  allCategories,
}) => {
  const handleSidebarToggleButton = (event: MouseEvent<any>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();

    const sidebarElementAttribute = document
      .getElementById("sidebar")
      ?.attributes!.getNamedItem("data-sidebar-open")!;
    sidebarElementAttribute.value = "false";
  };

  return (
    <SidebarContainer
      id="sidebar"
      data-sidebar-open="false"
      onClick={handleSidebarToggleButton}
    >
      <SidebarCategories allCategories={allCategories} />
      <SidebarLatestThreads />
      <SidebarCloseButtonWrapper onClick={handleSidebarToggleButton}>
        <IoClose size={20} color="white" />
      </SidebarCloseButtonWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
