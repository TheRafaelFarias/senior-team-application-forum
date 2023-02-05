import {
  ErrorMessage,
  Illustration404PageContainer,
  Illustration404PageWrapper,
  Logo404Container,
  LogoText,
  Page404Container,
  RedirectLink,
} from "@/styles/404";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <Page404Container>
      <Logo404Container>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Junior Team Forums logo that has a gradient orange background with a white lighting in the center of it"
        />
        <LogoText>Junior Team Forums</LogoText>
      </Logo404Container>

      <Illustration404PageContainer>
        <Illustration404PageWrapper>
          <Image src="/404-page-illustration.png" fill alt="" />
        </Illustration404PageWrapper>

        <ErrorMessage>
          Oh no, <span>404</span> error!
          <br />
          Are you on the right page?
        </ErrorMessage>

        <Link href="/">
          <RedirectLink>Click here to go to home page</RedirectLink>
        </Link>
      </Illustration404PageContainer>
    </Page404Container>
  );
};

export default NotFoundPage;
