import { BreadcrumbItem } from "@/components/breadcrumb/styles";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import TopicPreview from "@/components/topicPreview";
import { getCategoryWithAllTopics } from "@/services/topic/getCategoryWithAllTopics";
import { Div } from "@/styles/globals";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

const CategoryInformations = ({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{`${category?.name} Category - Junior Team Forums`}</title>
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
            <Div flexDirection="row" style={{ marginLeft: 20 }}>
              <Link
                href={{
                  pathname: "/[categoryId]",
                  query: {
                    categoryId: category?.id,
                  },
                }}
              >
                <BreadcrumbItem active>{category?.name}</BreadcrumbItem>
              </Link>
            </Div>
            <Div flexDirection="column" gapY={0.5}>
              {category?.topics.map((topic) => (
                <TopicPreview
                  key={topic.id}
                  topic={topic}
                  categoryId={category.id}
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
  const { categoryId } = context.query;

  if (!categoryId || categoryId == "favicon.ico")
    return {
      props: {},
    };

  const categoryInformation = await getCategoryWithAllTopics(
    categoryId?.toString()!
  );

  return {
    props: {
      category: categoryInformation,
    },
  };
};

export default CategoryInformations;
