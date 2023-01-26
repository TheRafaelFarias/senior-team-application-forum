import {
  BreadcrumbItem,
  BreadcrumbItemContainer,
} from "@/components/breadcrumb/styles";
import { useModal } from "@/components/modal/hooks/useModal";
import { ModalButton } from "@/components/modal/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ThreadPreview from "@/components/threadPreview";
import { getSpecificTopicWithCategoryAndAllThreadsPreview } from "@/services/topic/getSpecificTopicWithCategory";
import { Div } from "@/styles/globals";
import { CreateNewThreadOrCommentText } from "@/styles/thread";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

const TopicInformations = ({
  topic,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { changeCurrentModal } = useModal();

  return (
    <>
      <Head>
        <title>{`${topic.name} Topic - Junior Team Forums`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <BreadcrumbItemContainer>
              <Link
                href={{
                  pathname: "/[categoryId]",
                  query: {
                    categoryId: topic.category.id,
                  },
                }}
              >
                <BreadcrumbItem>{topic.category.name}</BreadcrumbItem>
              </Link>
              <Link
                href={{
                  pathname: "/[categoryId]/[topicId]",
                  query: {
                    categoryId: topic.category.id,
                    topicId: topic.id,
                  },
                }}
              >
                <BreadcrumbItem active>{topic.name}</BreadcrumbItem>
              </Link>
            </BreadcrumbItemContainer>
            <Div flexDirection="column" gapY={0.5}>
              {topic.threads.length == 0 && (
                <Div flexDirection="column" gapY={1} alignItems="center">
                  <CreateNewThreadOrCommentText>
                    This topic still doesn&apos;t have a thread
                  </CreateNewThreadOrCommentText>
                  <ModalButton
                    onClick={() => changeCurrentModal("createNewThread")}
                  >
                    Create new thread
                  </ModalButton>
                </Div>
              )}
              {topic.threads.map((threadPreview) => (
                <ThreadPreview
                  key={threadPreview.id}
                  threadPreview={threadPreview}
                  categoryId={topic.category.id}
                  topicId={topic.id}
                />
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { categoryId, topicId } = context.query;

  const topicInformation =
    await getSpecificTopicWithCategoryAndAllThreadsPreview(
      categoryId?.toString()!,
      topicId?.toString()!
    );

  return {
    props: {
      topic: topicInformation,
    },
  };
};

export default TopicInformations;
