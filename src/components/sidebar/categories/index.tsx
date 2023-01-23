import React from "react";
import { CardContainer, CardContentContainer, CardTitle } from "../styles";
import { CategoryContainer, CategoryIconContainer } from "./styles";

import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa";

const SidebarCategories: React.FC = () => {
  return (
    <CardContainer>
      <CardTitle>Categories</CardTitle>
      <CardContentContainer>
        <CategoryContainer>
          <CategoryIconContainer iconColor="#EEA956">
            <FaRegNewspaper color="#EEA956" size={40} />
          </CategoryIconContainer>
          <p>General</p>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryIconContainer iconColor="#78BA61">
            <Image
              src="/icons/minecraft-related-icon.svg"
              width={34}
              height={34}
              alt=""
            />
          </CategoryIconContainer>
          <p>Minecraft Related</p>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryIconContainer iconColor="#E59F5E">
            <Image
              src="/icons/staff-applications-icon.svg"
              width={30}
              height={30}
              alt=""
            />
          </CategoryIconContainer>
          <p>Staff Applications</p>
        </CategoryContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

export default SidebarCategories;
