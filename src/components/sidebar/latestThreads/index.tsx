import React, { useEffect, useState } from "react";
import { CardContainer, CardContentContainer, CardTitle } from "../styles";

import { getLatestThreads } from "@/services/thread/getLatestThreads";
import { Div } from "@/styles/globals";
import { ThreadPreviewWithAuthor } from "@/types/thread";
import { User } from "firebase/auth";
import Image from "next/image";
import {
  LatestThreadContainer,
  LatestThreadUserImageContainer,
} from "./styles";

type LatestThreadProps = {
  title: string;
  author: User;
};

const LatestThread: React.FC<LatestThreadProps> = (thread) => {
  return (
    <LatestThreadContainer>
      <LatestThreadUserImageContainer>
        <Image src={thread.author.photoURL!} alt="" fill />
      </LatestThreadUserImageContainer>
      <Div flexDirection="column" justifyContent="space-around">
        <h3>{thread.title}</h3>
        <p>{thread.author.displayName}</p>
      </Div>
    </LatestThreadContainer>
  );
};

const SidebarLatestThreads: React.FC = () => {
  const [latestThreads, setLatestThreads] = useState<
    Array<ThreadPreviewWithAuthor>
  >([]);

  useEffect(() => {
    (async () => {
      const latestThreadsResponses = await getLatestThreads();
      setLatestThreads(latestThreadsResponses);
    })();
  }, []);

  return (
    <CardContainer>
      <CardTitle>Latest threads</CardTitle>
      <CardContentContainer>
        {latestThreads.map((thread) => (
          <LatestThread
            key={thread.id}
            title={thread.title}
            author={thread.author}
          />
        ))}
      </CardContentContainer>
    </CardContainer>
  );
};

export default SidebarLatestThreads;
