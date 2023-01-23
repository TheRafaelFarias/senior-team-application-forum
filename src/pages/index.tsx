import { BreadcrumbItem } from "@/components/breadcrumb/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import TopicPreview from "@/components/topicPreview";
import { Div } from "@/styles/globals";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junior Team Forums</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Div flexDirection="column" gapY={1.625}>
        <Navbar />
        <Div flexDirection="row" gapX={1.125}>
          <Sidebar />
          <Div
            flexDirection="column"
            gapY={0.5}
            style={{ overflow: "hidden", width: "100%" }}
          >
            <Div flexDirection="row" style={{ marginLeft: 20 }}>
              <BreadcrumbItem active>General</BreadcrumbItem>
            </Div>
            {/* <ThreadPreview />
            <ThreadPreview />
            <ThreadPreview /> */}
            <TopicPreview />
            <TopicPreview />
            <TopicPreview />
            <TopicPreview />
          </Div>
        </Div>
      </Div>
    </>
  );
}
