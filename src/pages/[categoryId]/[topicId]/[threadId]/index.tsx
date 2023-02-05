import {
  BreadcrumbItem,
  BreadcrumbItemContainer,
} from "@/components/breadcrumb/styles";
import { useModal } from "@/components/modal/hooks/useModal";
import Navbar from "@/components/navbar";
import RichTextInput from "@/components/richtextinput";
import Sidebar from "@/components/sidebar";
import Thread from "@/components/thread";
import { ThreadNewCommentTitle } from "@/components/thread/styles";
import { auth } from "@/services/firebase";
import { addCommentToAThread } from "@/services/thread/addCommentToAThread";
import { getSpecificThreadWithCategoryAndTopicInformations } from "@/services/thread/getSpecificThreadWithCategoryAndTopicInformations";
import { Div } from "@/styles/globals";
import {
  AddNewThreadCommentButton,
  ThreadAndCommentsDivider,
} from "@/styles/thread";
import { ThreadCommentWithAuthorObject } from "@/types/comment";
import { convertToRaw, EditorState } from "draft-js";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const ThreadInformations = ({
  thread,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { changeCurrentModal } = useModal();
  const [user] = useAuthState(auth);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleNewCommentSubmition = async () => {
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    try {
      const document = await addCommentToAThread(
        {
          categoryId: thread.category.id,
          topicId: thread.topic.id,
          threadId: thread.id,
        },
        content,
        user!.uid
      );

      router.reload();
    } catch (error) {}
  };

  const openCommentEditorHandler = () => {
    if (user === null) {
      toast(
        "Log in to your Google account to create a comment on this thread",
        {
          position: "top-right",
          type: "error",
        }
      );
      changeCurrentModal("createNewAccount");
      return;
    }

    setIsEditorOpen(true);
  };

  return (
    <>
      <Head>
        <title>{`${thread.title} - Junior Team Forums`}</title>
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
                    categoryId: thread.category.id,
                  },
                }}
              >
                <BreadcrumbItem>{thread.category.name}</BreadcrumbItem>
              </Link>
              <Link
                href={{
                  pathname: "/[categoryId]/[topicId]",
                  query: {
                    categoryId: thread.category.id,
                    topicId: thread.topic.id,
                  },
                }}
              >
                <BreadcrumbItem>{thread.topic.name}</BreadcrumbItem>
              </Link>
              <Link
                href={{
                  pathname: "/[categoryId]/[topicId]/[threadId]",
                  query: {
                    categoryId: thread.category.id,
                    topicId: thread.topic.id,
                    threadId: thread.id,
                  },
                }}
              >
                <BreadcrumbItem active>{thread.title}</BreadcrumbItem>
              </Link>
            </BreadcrumbItemContainer>
            <Div flexDirection="column" gapY={0.5}>
              <Div flexDirection="column" gapY={1.875}>
                <Thread thread={thread} />
                <AddNewThreadCommentButton onClick={openCommentEditorHandler}>
                  Add a new comment
                </AddNewThreadCommentButton>
              </Div>

              <ThreadAndCommentsDivider />

              {isEditorOpen && (
                <>
                  <ThreadNewCommentTitle>
                    Add a comment to this thread
                  </ThreadNewCommentTitle>
                  <RichTextInput
                    editorState={editorState}
                    setEditorState={setEditorState}
                  />
                  <AddNewThreadCommentButton
                    onClick={handleNewCommentSubmition}
                    style={{ alignSelf: "center" }}
                  >
                    Comment
                  </AddNewThreadCommentButton>

                  <ThreadAndCommentsDivider />
                </>
              )}

              <Div flexDirection="column" gapY={1}>
                {thread.comments.length >= 1 &&
                  thread.comments.map((comment) => (
                    <Thread
                      key={comment.id}
                      noTitle
                      // @ts-ignore
                      thread={{
                        createdAt: comment.createdAt,
                        author: (comment as ThreadCommentWithAuthorObject)
                          .author,
                        content: comment.commentContent,
                      }}
                    />
                  ))}
              </Div>
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
  const { categoryId, topicId, threadId } = context.query;

  try {
    const threadInformations =
      await getSpecificThreadWithCategoryAndTopicInformations(
        categoryId?.toString()!,
        topicId?.toString()!,
        threadId?.toString()!
      );

    return {
      props: {
        thread: threadInformations,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default ThreadInformations;
