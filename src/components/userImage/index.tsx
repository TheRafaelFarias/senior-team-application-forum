import Image from "next/image";
import React from "react";
import {
  UserImageWithBorderContainer,
  UserImageWithBorderWrapper,
} from "./styles";

interface UserImageProps {
  type?: "normal" | "circle";
}

const UserImage: React.FC<UserImageProps> = ({ type = "normal" }) => {
  if (type === "normal")
    return (
      <UserImageWithBorderWrapper>
        <UserImageWithBorderContainer>
          <Image src="/test-user-profile.png" fill alt="" />
        </UserImageWithBorderContainer>
      </UserImageWithBorderWrapper>
    );

  if (type == "circle") return <div></div>;

  return <></>;
};

export default UserImage;
