import { Category } from "@/types/category";
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

export async function getCategoryWithAllTopics(categoryId: string) {
  const categoryRef = doc(firestore, "categories", categoryId);
  const categoryDoc = await getDoc(categoryRef);
  const category = { ...categoryDoc.data(), id: categoryId } as Category;

  const topicsQuery = query(
    collection(firestore, `categories/${categoryId}/topics`),
    orderBy("createdAt", "asc")
  );
  const topicsDocument = await getDocs(topicsQuery);
  const topics = topicsDocument.docs.map((document) => {
    const topic = document.data();
    return {
      id: document.id,
      ...topic,
    };
  }) as Array<TopicWithoutThread>;

  category["topics"] = topics;

  return category as unknown as Category;
}
