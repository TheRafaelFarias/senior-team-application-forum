import { getTimeAgoDate } from "@/helpers/date";
import { Div } from "@/styles/globals";
import { ThreadPreviewWithAuthor as ThreadPreviewType } from "@/types/thread";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  ThreadPreviewContainer,
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
        <Image src={threadPreview.author.photoURL!} fill alt="" />
      </ThreadPreviewUserImageWrapper>
      <Div flexDirection="column" justifyContent="space-around">
        <h1>{threadPreview.title}</h1>
        <Div
          flexDirection="row"
          style={{ width: "100%" }}
          justifyContent="space-between"
        >
          <ThreadPreviewUserInformationContainer>
            <h3>{threadPreview.author.displayName}</h3>
            <div></div>
            <p>{getTimeAgoDate(threadPreview.createdAt)}</p>
          </ThreadPreviewUserInformationContainer>
        </Div>
      </Div>
    </ThreadPreviewContainer>
  );
};

export default ThreadPreview;
