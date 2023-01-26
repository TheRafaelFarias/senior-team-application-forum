import { Div } from "@/styles/globals";
import { ThreadPreview as ThreadPreviewType } from "@/types/thread";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  ThreadPreviewContainer,
  ThreadPreviewInformationText,
  ThreadPreviewUserImageWrapper,
  ThreadPreviewUserInformationContainer,
} from "./styles";

const ThreadPreview: React.FC<{
  threadPreview: ThreadPreviewType;
  categoryId: string;
  topicId: string;
}> = ({ threadPreview, categoryId, topicId }) => {
  const router = useRouter();

  return (
    <ThreadPreviewContainer
      onClick={() => {
        router.push({
          pathname: "/[categoryId]/[topicId]/[threadId]",
          query: {
            categoryId,
            topicId,
            threadId: threadPreview.id,
          },
        });
      }}
    >
      <ThreadPreviewUserImageWrapper>
        <Image src="/test-user-profile.png" fill alt="" />
      </ThreadPreviewUserImageWrapper>
      <Div flexDirection="column" justifyContent="space-around">
        <h1>{threadPreview.title}</h1>
        <Div
          flexDirection="row"
          style={{ width: "100%" }}
          justifyContent="space-between"
        >
          <ThreadPreviewUserInformationContainer>
            <h3>Rafael Farias</h3>
            <div></div>
            <p>3 days ago</p>
          </ThreadPreviewUserInformationContainer>
          <Div flexDirection="row" gapX={2}>
            <ThreadPreviewInformationText>
              244,564 Views
            </ThreadPreviewInformationText>
            <ThreadPreviewInformationText>
              244,564 Views
            </ThreadPreviewInformationText>
            <ThreadPreviewInformationText>
              244,564 Views
            </ThreadPreviewInformationText>
          </Div>
        </Div>
      </Div>
    </ThreadPreviewContainer>
  );
};

export default ThreadPreview;
