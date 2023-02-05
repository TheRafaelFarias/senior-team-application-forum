import { Category } from "@/types/category";
import { ThreadComment, ThreadCommentWithAuthorObject } from "@/types/comment";
import {
  Thread,
  ThreadWithCategoryAndTopicNames,
  ThreadWithUser,
} from "@/types/thread";
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

  if (!categoryDoc.exists()) throw new Error("This category was not found");

  const category = { ...categoryDoc.data(), id: categoryId } as Category;

  const topicRef = doc(firestore, "categories", categoryId, "topics", topicId);
  const topicDoc = await getDoc(topicRef);

  if (!topicDoc.exists()) throw new Error("This topic was not found");

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

  if (!threadDoc.exists()) throw new Error("This thread was not found");

  const threadData = threadDoc.data() as Thread;
  const authorUserRef = doc(firestore, "users", threadData.authorId);
  const authorUserDoc = await getDoc(authorUserRef);
  const authorUser = authorUserDoc.data();

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
  const threadComments = (await Promise.all(
    commentsDocument.docs.map(async (document) => {
      const comment = document.data() as Omit<ThreadComment, "id">;

      const commentsAuthorRef = doc(firestore, "users", comment.authorId);
      const authorUserDoc = await getDoc(commentsAuthorRef);
      const authorUser = authorUserDoc.data();

      return {
        id: document.id,
        ...comment,
        author: authorUser,
      };
    })
  )) as Array<ThreadCommentWithAuthorObject>;

  const thread = {
    ...threadDoc.data(),
    id: threadDoc.id,
    comments: threadComments,
    author: authorUser,
  } as ThreadWithUser;

  return {
    category,
    topic,
    ...thread,
  } as ThreadWithCategoryAndTopicNames;
}
