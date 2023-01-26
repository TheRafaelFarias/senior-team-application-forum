import {
  BreadcrumbItem,
  BreadcrumbItemContainer,
} from "@/components/breadcrumb/styles";
import { useModal } from "@/components/modal/hooks/useModal";
import { ModalButton } from "@/components/modal/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ThreadPreview from "@/components/threadPreview";
import { firestore } from "@/services/firebase";
import { getCategoryLatestThreads } from "@/services/thread/getLatestThreads";
import { Div } from "@/styles/globals";
import { CreateNewThreadOrCommentText } from "@/styles/thread";
import { Category } from "@/types/category";
import { collection, getDocs } from "firebase/firestore/lite";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

const Home = ({
  allCategories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { changeCurrentModal } = useModal();

  return (
    <>
      <Head>
        <title>Junior Team Forums</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Div flexDirection="column" gapY={1.625}>
        <Navbar />
        <Div flexDirection="row" gapX={1.125}>
          <Sidebar allCategories={allCategories} />
          <Div
            flexDirection="column"
            gapY={2}
            style={{ overflow: "hidden", width: "100%" }}
          >
            {allCategories.map((category) => (
              <Div flexDirection="column" gapY={0.5} key={category.iconColor}>
                <Div flexDirection="column" gapY={0.75}>
                  <BreadcrumbItemContainer>
                    <Link href="/[categoryId]" as={`/${category.id}`}>
                      <BreadcrumbItem active style={{ marginLeft: 20 }}>
                        {category.name}
                      </BreadcrumbItem>
                    </Link>
                  </BreadcrumbItemContainer>
                  <Div flexDirection="column" gapY={0.375}>
                    {category.latestThreads.length == 0 && (
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
                    {category.latestThreads.map((thread) => (
                      <ThreadPreview
                        key={thread.id}
                        categoryId={category.id}
                        topicId={thread.topic.id}
                        threadPreview={thread}
                      />
                    ))}
                  </Div>
                </Div>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const allCategoriesSnapshot = await getDocs(
    collection(firestore, "categories")
  );

  const allCategories = await Promise.all(
    allCategoriesSnapshot.docs.map(async (value) => {
      const categoryLatestThreads = await getCategoryLatestThreads(value.id);

      return {
        id: value.id,
        ...(value.data() as Omit<Category, "id">),
        latestThreads: categoryLatestThreads,
      };
    })
  );

  return {
    props: {
      allCategories: allCategories,
    },
  };
};

export default Home;
