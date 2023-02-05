import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import { InputPlaceholder } from "@/components/input/styles";
import { ModalProps } from "@/components/modal";
import { useModal } from "@/components/modal/hooks/useModal";
import {
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "@/components/modal/styles";
import RichTextInput from "@/components/richtextinput";
import { getAllCategoriesWithTopics } from "@/services/category/getAllCategoriesWithTopics";
import { auth } from "@/services/firebase";
import { createNewThread } from "@/services/thread/createNewThread";
import { Div } from "@/styles/globals";
import { Category } from "@/types/category";
import { TopicWithoutThread } from "@/types/topic";
import { convertToRaw, EditorState } from "draft-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DropdownsContainer } from "../createNewAccount/styles";

interface ThreadFormValues {
  title: string;
}

const CreateNewThreadModal: React.FC<ModalProps> = ({ defaultOnClick }) => {
  const { control, handleSubmit } = useForm<ThreadFormValues>();
  const [user] = useAuthState(auth);
  const { closeModal, changeCurrentModal } = useModal();
  const router = useRouter();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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

  const handleCreateNewThreadSubmit = async (values: ThreadFormValues) => {
    if (selectedCategory == undefined || selectedTopic == undefined) return;

    const thread = {
      category: selectedCategory,
      topic: selectedTopic,
      ...values,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    };

    try {
      const threadDocument = await createNewThread(thread, user!);
      router
        .replace({
          pathname: "/[categoryId]/[topicId]/[threadId]",
          query: {
            categoryId: thread.category.id,
            topicId: thread.topic.id,
            threadId: threadDocument?.id,
          },
        })
        .then(() => {
          closeModal();
        });
    } catch (error) {}
  };

  useEffect(() => {
    if (user === null) {
      toast("Log in to your Google account to create a new thread", {
        position: "top-right",
        type: "error",
      });
      closeModal();
      changeCurrentModal("createNewAccount");
      return;
    }
  }, [user]);

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
        <RichTextInput
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </Div>
      <ModalButton onClick={handleSubmit(handleCreateNewThreadSubmit)}>
        Submit
      </ModalButton>
    </ModalContainer>
  );
};

export default CreateNewThreadModal;
