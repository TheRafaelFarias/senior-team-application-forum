import { Category } from "@/types/category";
import { Thread, ThreadPreview } from "@/types/thread";
import { Topic } from "@/types/topic";
import {
  collectionGroup,
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

  const latestThreads = latestThreadsDocs.docs.map((value) => {
    return {
      id: value.id,
      ...value.data(),
    };
  });

  return latestThreads as Array<ThreadPreview>;
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
