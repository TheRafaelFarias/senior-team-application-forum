import { Category } from "@/types/category";
import { ThreadPreview, ThreadPreviewWithAuthor } from "@/types/thread";
import { Topic } from "@/types/topic";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore/lite";
import { firestore } from "../firebase";

export async function getSpecificTopicWithCategoryAndAllThreadsPreview(
  categoryId: string,
  topicId: string
) {
  const categoryRef = doc(firestore, "categories", categoryId);
  const categoryDoc = await getDoc(categoryRef);
  const category = { ...categoryDoc.data(), id: categoryId } as Category;

  const topicRef = doc(firestore, "categories", categoryId, "topics", topicId);
  const topicDoc = await getDoc(topicRef);
  const topic = {
    ...topicDoc.data(),
    id: topicDoc.id,
  } as Topic<ThreadPreviewWithAuthor>;

  const threadsQuery = query(
    collection(firestore, `categories/${categoryId}/topics/${topicId}/threads`)
  );
  const threadsDocument = await getDocs(threadsQuery);
  const threads = (await Promise.all(
    threadsDocument.docs.map(async (document) => {
      const threadPreview = document.data() as Omit<ThreadPreview, "id">;

      const threadPreviewAuthorRef = doc(
        firestore,
        "users",
        threadPreview.authorId
      );
      const threadPreviewAuthorDoc = await getDoc(threadPreviewAuthorRef);
      const threadPreviewAuthor = threadPreviewAuthorDoc.data();

      return {
        id: document.id,
        author: threadPreviewAuthor,
        ...threadPreview,
      };
    })
  )) as Array<ThreadPreviewWithAuthor>;

  topic["threads"] = threads;

  return {
    category,
    ...topic,
  };
}
