import { defaultTheme } from "@/config/theme";
import { Div } from "@/styles/globals";
import React from "react";
import { IoChevronForwardSharp, IoMegaphoneOutline } from "react-icons/io5";
import { TopicPreviewContainer, TopicPreviewName } from "./styles";

const TopicPreview: React.FC = () => {
  return (
    <TopicPreviewContainer>
      <Div flexDirection="row" gapX={1}>
        <IoMegaphoneOutline color={defaultTheme.primaryText} size={20} />
        <TopicPreviewName>Announcements</TopicPreviewName>
      </Div>
      <IoChevronForwardSharp color={defaultTheme.primaryText} size={20} />
    </TopicPreviewContainer>
  );
};

export default TopicPreview;
