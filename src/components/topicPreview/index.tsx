import { defaultTheme } from "@/config/theme";
import { Div } from "@/styles/globals";
import { TopicWithoutThread } from "@/types/topic";
import { useRouter } from "next/router";
import React from "react";
import { IoChevronForwardSharp, IoMegaphoneOutline } from "react-icons/io5";
import { TopicPreviewContainer, TopicPreviewName } from "./styles";

const TopicPreview: React.FC<{
  topic: TopicWithoutThread;
  categoryId: string;
}> = ({ topic, categoryId }) => {
  const router = useRouter();

  return (
    <TopicPreviewContainer
      onClick={() => {
        router.push(`${categoryId}/${topic.id}`);
      }}
    >
      <Div flexDirection="row" gapX={1}>
        <IoMegaphoneOutline color={defaultTheme.primaryText} size={20} />
        <TopicPreviewName>{topic.name}</TopicPreviewName>
      </Div>
      <IoChevronForwardSharp color={defaultTheme.primaryText} size={20} />
    </TopicPreviewContainer>
  );
};

export default TopicPreview;
