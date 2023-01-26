import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import { InputPlaceholder } from "@/components/input/styles";
import { ModalProps } from "@/components/modal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import RichTextInput from "@/components/richtextinput";
import { getAllCategoriesWithTopics } from "@/services/category/getAllCategoriesWithTopics";
import { Div } from "@/styles/globals";
import { Category } from "@/types/category";
import { TopicWithoutThread } from "@/types/topic";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DropdownsContainer } from "../createNewAccount/styles";

interface ThreadFormValues {
  title: string;
}

const CreateNewThreadModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  const { control, handleSubmit } = useForm<ThreadFormValues>();
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);
  const [selectedTopic, setSelectedTopic] = useState<
    TopicWithoutThread | undefined
  >(undefined);
  const [categoriesWithTopics, setCategoriesWithTopics] = useState<Category[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const categoriesWithItsTopics = await getAllCategoriesWithTopics();
      setCategoriesWithTopics(categoriesWithItsTopics);
    })();
  }, []);
  return (
    <ModalContainer onClick={defaultOnClick}>
      <ModalTitle>Let&apos;s create a new thread</ModalTitle>
      <DropdownsContainer>
        <Dropdown
          placeholder="Select a category"
          secondaryPlaceholder="Click here to see all categories"
          data={categoriesWithTopics.map((category) => category.name)}
          onClickOption={(categoryName) => {
            const category = categoriesWithTopics.filter(
              (value) => value.name === categoryName
            );
            setSelectedCategory(category[0]);
          }}
        />
        <Dropdown
          placeholder="Select a topic"
          secondaryPlaceholder="Click to see all category topics"
          data={
            selectedCategory
              ? categoriesWithTopics
                  .filter(
                    (cateogry) => cateogry.name == selectedCategory.name
                  )[0]
                  .topics.map((topic) => topic.name)
              : []
          }
          onClickOption={(topicName) => {
            const topic = categoriesWithTopics
              .filter((cateogry) => cateogry.name == selectedCategory!.name)[0]
              .topics.filter((topic) => topic.name === topicName);
            setSelectedTopic(topic[0]);
          }}
        />
      </DropdownsContainer>
      <Input
        control={control}
        name="title"
        placeholder="Title"
        secondaryPlaceholder="Enter thread title here"
      />
      <Div flexDirection="column" gapY={1} style={{ width: "100%" }}>
        <InputPlaceholder>Content</InputPlaceholder>
        <RichTextInput />
      </Div>
      <ModalButton>Submit</ModalButton>
    </ModalContainer>
  );
};

export default CreateNewThreadModal;
