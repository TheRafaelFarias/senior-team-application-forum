import React from "react";
import UserImage from "../userImage";
import {
  ThreadContainer,
  ThreadContentContainer,
  ThreadInformationsDetails,
} from "./styles";

const Thread: React.FC = () => {
  return (
    <ThreadContainer>
      <ThreadInformationsDetails>
        <UserImage />
        <h1>
          The 4-step SEO framework that led to a 1000% increase in traffic.
          Let’s talk about blogging and SEO...
        </h1>
        <p>2 hours ago</p>
      </ThreadInformationsDetails>
      <ThreadContentContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur. Potenti malesuada elementum
          mauris neque mauris lacinia ullamcorper. Tellus ut porta aliquet
          egestas. Tortor sagittis gravida ac ultrices tristique adipiscing
          dignissim sed neque. Diam erat tincidunt nibh urna enim nec. Porttitor
          vitae nisi aliquet nulla fames habitant erat nulla. Elementum mi
          porttitor pretium blandit. Pharetra eu lectus facilisis a viverra nunc
          nunc. Sed at et gravida integer. Viverra praesent et mi a. Integer a
          augue phasellus mauris. Leo massa elit nullam scelerisque ipsum ut
          egestas tristique. Lacus aliquet hendrerit mauris mus ipsum euismod
          feugiat sollicitudin ultrices. Habitasse ut sed vitae sapien metus
          faucibus posuere tellus rutrum. Placerat urna amet semper nulla neque
          nunc convallis at commodo. Mi ut eu dictumst volutpat sit purus fusce
          tempor tristique. Id odio amet vitae scelerisque diam turpis massa.
          Sit facilisis euismod scelerisque in. A aliquam sit eu amet imperdiet.
          Ac orci mattis proin ipsum. Curabitur volutpat purus nibh placerat eu
          proin risus molestie. Vitae at auctor magna mattis sed enim donec
          accumsan. Ut quam tristique dignissim pellentesque.
          <br />
          <br />
          Tincidunt tortor sapien netus elementum interdum. Massa feugiat netus
          lectus praesent aliquam duis magna. Mattis amet dictum tempor blandit
          lacus hendrerit dictum. Donec ridiculus aliquam sed elementum ac.
          Vitae sit id mattis nisl eu dictum. Nec sed eget blandit turpis diam
          amet purus pharetra. Faucibus sit lacus dictum scelerisque aliquam.
          Justo adipiscing fusce ac viverra hendrerit. Fusce massa cursus neque
          facilisis vestibulum. Elementum ultrices imperdiet purus congue
          aliquam duis fames. In adipiscing adipiscing sed dolor.
          <br />
          <br />
          Vulputate nunc pharetra sed ligula nunc. Sed non ut velit sit erat
          commodo cum pretium sollicitudin. Pulvinar etiam sed augue leo
          facilisis proin massa. Lorem aliquam tortor egestas et sit mauris id
          purus praesent. Aliquam dui lectus bibendum mollis montes. Proin
          ultrices vitae suspendisse sagittis. Facilisis placerat justo purus
          quam duis morbi. Aliquam ac nunc in lorem quam malesuada ornare
          pellentesque. Amet orci ante vulputate eget lacus. Nunc dignissim
          facilisi id ac. Scelerisque mi in in integer lorem commodo sodales sed
          cursus. Ultricies risus a a etiam. Morbi amet quam lobortis diam.
          Aliquam quis cursus sagittis euismod risus amet. Aliquam enim
          vulputate aliquam nec lobortis pretium posuere vitae ultrices.
        </p>
      </ThreadContentContainer>
    </ThreadContainer>
  );
};

export default Thread;
