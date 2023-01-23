import React from "react";
import { CardContainer, CardContentContainer, CardTitle } from "../styles";

import { Div } from "@/styles/globals";
import Image from "next/image";
import {
  LatestThreadContainer,
  LatestThreadUserImageContainer,
} from "./styles";

type LatestThreadProps = {
  title?: string;
  author?: {
    name: string;
    imageURL: string;
  };
};

const LatestThread: React.FC<LatestThreadProps> = (thread) => {
  return (
    <LatestThreadContainer>
      <LatestThreadUserImageContainer>
        <Image src="/test-user-profile.png" alt="" fill />
      </LatestThreadUserImageContainer>
      <Div flexDirection="column" justifyContent="space-around">
        <h3>
          The 4-step SEO framework that led to a 1000% increase in traffic.
          Let’s talk about blogging and SEO...
        </h3>
        <p>Rafael Farias</p>
      </Div>
    </LatestThreadContainer>
  );
};

const SidebarLatestThreads: React.FC = () => {
  return (
    <CardContainer>
      <CardTitle>Latest threads</CardTitle>
      <CardContentContainer>
        <LatestThread />
        <LatestThread />
        <LatestThread />
      </CardContentContainer>
    </CardContainer>
  );
};

export default SidebarLatestThreads;
