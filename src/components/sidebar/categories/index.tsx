import React, { useEffect, useState } from "react";
import { CardContainer, CardContentContainer, CardTitle } from "../styles";
import { CategoryContainer, CategoryIconContainer } from "./styles";

import { firestore } from "@/services/firebase";
import { Category } from "@/types/category";
import { collection, getDocs } from "firebase/firestore/lite";
import Image from "next/image";
import Link from "next/link";

const SidebarCategories: React.FC<{ allCategories?: Array<Category> }> = ({
  allCategories,
}) => {
  const [allCategoriesState, setAllCategories] = useState(allCategories ?? []);

  useEffect(() => {
    if (Array.isArray(allCategories) && allCategories?.length >= 1) return;

    (async () => {
      const allCategoriesSnapshot = await getDocs(
        collection(firestore, "categories")
      );
      const categories = allCategoriesSnapshot.docs.map((value) => {
        return {
          id: value.id,
          ...value.data(),
        };
      });
      setAllCategories(categories as Array<Category>);
    })();
  }, []);

  return (
    <CardContainer>
      <CardTitle>Categories</CardTitle>
      <CardContentContainer>
        {allCategoriesState.map((category) => (
          <Link key={category.id} href="/[categoryId]" as={`/${category.id}`}>
            <CategoryContainer>
              <CategoryIconContainer iconColor={category.iconColor}>
                <Image
                  src={`/icons/${category.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}-icon.svg`}
                  width={34}
                  height={34}
                  alt=""
                />
              </CategoryIconContainer>
              <p>{category.name}</p>
            </CategoryContainer>
          </Link>
        ))}
      </CardContentContainer>
    </CardContainer>
  );
};

export default SidebarCategories;
