import { Thread } from "@/types/thread";
import { convertFromRaw, Editor, EditorState } from "draft-js";
import React from "react";
import UserImage from "../userImage";
import {
  ThreadContainer,
  ThreadContentContainer,
  ThreadInformationsDetails,
} from "./styles";

const Thread: React.FC<{ thread: Thread; noTitle?: boolean }> = ({
  thread,
  noTitle,
}) => {
  const threadContent = convertFromRaw(JSON.parse(thread.content as any));
  const threadCreatedDate = new Date(thread.createdAt);

  return (
    <ThreadContainer>
      <ThreadInformationsDetails>
        <UserImage />
        {!noTitle && <h1>{thread.title}</h1>}
        <p>{getTimeAgoDate(threadCreatedDate)}</p>
      </ThreadInformationsDetails>
      <ThreadContentContainer>
        <Editor
          readOnly
          editorState={EditorState.createWithContent(threadContent)}
          onChange={() => {}}
        />
      </ThreadContentContainer>
    </ThreadContainer>
  );
};

export default Thread;
