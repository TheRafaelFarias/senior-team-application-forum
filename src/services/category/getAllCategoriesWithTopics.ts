import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../firebase";
import { getCategoryWithAllTopics } from "../topic/getCategoryWithAllTopics";

export async function getAllCategoriesWithTopics() {
  const categoriesRef = collection(firestore, "categories");
  const categoriesDoc = await getDocs(categoriesRef);
  const categoriesWithItsTopics = categoriesDoc.docs.map(async (category) => {
    const categoryWithTopics = await getCategoryWithAllTopics(category.id);
    return categoryWithTopics;
  });

  return Promise.all(categoriesWithItsTopics);
}
