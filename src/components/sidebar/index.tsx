import { Category } from "@/types/category";
import React from "react";
import SidebarCategories from "./categories";
import SidebarLatestThreads from "./latestThreads";
import { SidebarContainer } from "./styles";

const Sidebar: React.FC<{ allCategories?: Array<Category> }> = ({
  allCategories,
}) => {
  return (
    <SidebarContainer>
      <SidebarCategories allCategories={allCategories} />
      <SidebarLatestThreads />
    </SidebarContainer>
  );
};

export default Sidebar;
