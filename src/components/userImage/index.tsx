import { auth } from "@/services/firebase";
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  UserImageWithBorderContainer,
  UserImageWithBorderWrapper,
} from "./styles";

interface UserImageProps {
  type?: "normal" | "circle";
}

const UserImage: React.FC<UserImageProps> = ({ type = "normal" }) => {
  const [user] = useAuthState(auth);

  if (type === "normal")
    return (
      <UserImageWithBorderWrapper>
        <UserImageWithBorderContainer>
          <Image src={user?.photoURL ?? ""} fill alt="" />
        </UserImageWithBorderContainer>
      </UserImageWithBorderWrapper>
    );

  if (type == "circle") return <div></div>;

  return <></>;
};

export default UserImage;
