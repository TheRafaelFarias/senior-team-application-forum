import { addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "../firebase";

export async function addCommentToAThread(
  thread: {
    categoryId: string;
    topicId: string;
    threadId: string;
  },
  commentContent: string
) {
  try {
    return await addDoc(
      collection(
        firestore,
        "categories",
        thread.categoryId,
        "topics",
        thread.topicId,
        "threads",
        thread.threadId,
        "comments"
      ),
      {
        commentContent,
        createdAt: Date.now()
      }
    );
  } catch (error) {
    console.log(error);
  }
}
