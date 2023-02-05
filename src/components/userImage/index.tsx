import Image from "next/image";
import React from "react";
import {
  UserImageWithBorderContainer,
  UserImageWithBorderWrapper,
} from "./styles";

interface UserImageProps {
  type?: "normal" | "circle";
  photoUrl: string;
}

const UserImage: React.FC<UserImageProps> = ({ type = "normal", photoUrl }) => {
  if (type === "normal")
    return (
      <UserImageWithBorderWrapper>
        <UserImageWithBorderContainer>
          <Image
            referrerPolicy="no-referrer"
            src={photoUrl ?? ""}
            fill
            alt=""
          />
        </UserImageWithBorderContainer>
      </UserImageWithBorderWrapper>
    );

  if (type == "circle") return <div></div>;

  return <></>;
};

export default UserImage;
