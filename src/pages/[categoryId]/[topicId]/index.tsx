import { BreadcrumbItem } from "@/components/breadcrumb/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ThreadPreview from "@/components/threadPreview";
import { Div } from "@/styles/globals";
import Head from "next/head";
import React from "react";

const TopicInformations: React.FC = () => {
  return (
    <>
      <Head>
        <title>Announcements Topic - Junior Team Forums</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Div flexDirection="column" gapY={1.625}>
        <Navbar />
        <Div flexDirection="row" gapX={1.125}>
          <Sidebar />
          <Div
            flexDirection="column"
            gapY={2}
            style={{ overflow: "hidden", width: "100%" }}
          >
            <Div flexDirection="row" style={{ marginLeft: 20 }}>
              <BreadcrumbItem>General</BreadcrumbItem>
              <BreadcrumbItem active>Announcements</BreadcrumbItem>
            </Div>
            <Div flexDirection="column" gapY={0.5}>
              <ThreadPreview />
              <ThreadPreview />
              <ThreadPreview />
              <ThreadPreview />
              <ThreadPreview />
              <ThreadPreview />
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default TopicInformations;
