import { Div } from "@/styles/globals";
import Image from "next/image";
import React from "react";
import {
  ThreadPreviewContainer,
  ThreadPreviewInformationText,
  ThreadPreviewUserImageWrapper,
  ThreadPreviewUserInformationContainer,
} from "./styles";

const ThreadPreview: React.FC = () => {
  return (
    <ThreadPreviewContainer>
      <ThreadPreviewUserImageWrapper>
        <Image src="/test-user-profile.png" fill alt="" />
      </ThreadPreviewUserImageWrapper>
      <Div flexDirection="column" justifyContent="space-around">
        <h1>
          Lorem ipsum dolor sit amet consectetur. Potenti malesuada elementum
          mauris neque mauris lacinia ullamcorper. Tellus ut porta aliquet
          egestas. Tortor sagittis gravida ac ultrices tristique adipiscing
          dignissim sed neque. Diam erat tincidunt nibh urna enim nec. Porttitor
          vitae nisi aliquet nulla fames habitant erat nulla. Elementum mi
          porttitor pretium blandit
        </h1>
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
