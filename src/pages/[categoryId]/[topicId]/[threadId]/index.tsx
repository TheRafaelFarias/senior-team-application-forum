import { BreadcrumbItem } from "@/components/breadcrumb/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Thread from "@/components/thread";
import { Div } from "@/styles/globals";
import {
  AddNewThreadCommentButton,
  ThreadAndCommentsDivider,
} from "@/styles/thread";
import Head from "next/head";
import React from "react";

const ThreadInformations: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          The 4-step SEO framework that led to a 1000% increase in traffic -
          Junior Team Forums
        </title>
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
              <BreadcrumbItem>Announcements</BreadcrumbItem>
              <BreadcrumbItem active>Thread Title</BreadcrumbItem>
            </Div>
            <Div flexDirection="column" gapY={0.5}>
              <Div flexDirection="column" gapY={1.875}>
                <Thread />
                <AddNewThreadCommentButton>
                  Add a new comment
                </AddNewThreadCommentButton>
              </Div>

              <ThreadAndCommentsDivider />

              <Div flexDirection="column" gapY={1}>
                <Thread />
                <Thread />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default ThreadInformations;
