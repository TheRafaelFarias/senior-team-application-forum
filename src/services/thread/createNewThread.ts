import { Category } from "@/types/category";
import { TopicWithoutThread } from "@/types/topic";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore/lite";
import { firestore } from "../firebase";

export async function createNewThread(
  thread: {
    content: string;
    title: string;
    category: Category;
    topic: TopicWithoutThread;
  },
  author: User
) {
  try {
    return await addDoc(
      collection(
        firestore,
        "categories",
        thread.category.id,
        "topics",
        thread.topic.id,
        "threads"
      ),
      {
        ...thread,
        createdAt: Date.now(),
        authorId: author.uid,
      }
    );
  } catch (error) {
    console.log(error);
  }
}
