import { Category } from "@/types/category";
import { ThreadComment } from "@/types/comment";
import { Thread, ThreadWithCategoryAndTopicNames } from "@/types/thread";
import { TopicWithoutThread } from "@/types/topic";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { firestore } from "../firebase";

export async function getSpecificThreadWithCategoryAndTopicInformations(
  categoryId: string,
  topicId: string,
  threadId: string
) {
  const categoryRef = doc(firestore, "categories", categoryId);
  const categoryDoc = await getDoc(categoryRef);
  const category = { ...categoryDoc.data(), id: categoryId } as Category;

  const topicRef = doc(firestore, "categories", categoryId, "topics", topicId);
  const topicDoc = await getDoc(topicRef);
  const topic = { ...topicDoc.data(), id: topicDoc.id } as TopicWithoutThread;

  const threadRef = doc(
    firestore,
    "categories",
    categoryId,
    "topics",
    topicId,
    "threads",
    threadId
  );
  const threadDoc = await getDoc(threadRef);

  const commentsQuery = query(
    collection(
      firestore,
      "categories",
      categoryId,
      "topics",
      topicId,
      "threads",
      threadDoc.id,
      "comments"
    ),
    orderBy("createdAt", "asc")
  );
  const commentsDocument = await getDocs(commentsQuery);
  const threadComments = commentsDocument.docs.map((document) => {
    const comment = document.data();
    return {
      id: document.id,
      ...comment,
    };
  }) as Array<ThreadComment>;

  const thread = {
    ...threadDoc.data(),
    id: threadDoc.id,
    comments: threadComments,
  } as Thread;

  return {
    category,
    topic,
    ...thread,
  } as ThreadWithCategoryAndTopicNames;
}
