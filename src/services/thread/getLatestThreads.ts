import { Category } from "@/types/category";
import { ThreadPreview, ThreadPreviewWithAuthor } from "@/types/thread";
import { TopicWithoutThread } from "@/types/topic";
import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore/lite";
import { firestore } from "../firebase";

export async function getLatestThreads() {
  const latestThreadsQuery = query(
    collectionGroup(firestore, "threads"),
    orderBy("createdAt", "asc"),
    limit(3)
  );

  const latestThreadsDocs = await getDocs(latestThreadsQuery);

  const latestThreads = await Promise.all(
    latestThreadsDocs.docs.map(async (value) => {
      const threadData = value.data() as Omit<ThreadPreview, "id">;
      const authorRef = doc(firestore, "users", threadData.authorId);
      const authorDoc = await getDoc(authorRef);

      return {
        id: value.id,
        author: authorDoc.data(),
        ...threadData,
      };
    })
  );

  return latestThreads as Array<ThreadPreviewWithAuthor>;
}

export async function getCategoryLatestThreads(categoryId: string) {
  const latestThreadsQuery = query(
    collectionGroup(firestore, "threads"),
    where("category.id", "==", categoryId),
    orderBy("createdAt", "asc"),
    limit(3)
  );

  const latestThreadsDocs = await getDocs(latestThreadsQuery);

  const latestThreads = latestThreadsDocs.docs.map((value) => {
    return {
      id: value.id,
      ...value.data(),
    };
  });

  return latestThreads as Array<
    ThreadPreview & {
      category: Category;
      topic: Topic<Thread>;
    }
  >;
}
