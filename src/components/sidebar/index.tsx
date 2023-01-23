import React from "react";
import SidebarCategories from "./categories";
import SidebarLatestThreads from "./latestThreads";
import { SidebarContainer } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarCategories />
      <SidebarLatestThreads />
    </SidebarContainer>
  );
};

export default Sidebar;
