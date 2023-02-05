import { User } from "firebase/auth";
import { Category } from "./category";
import { ThreadComment, ThreadCommentWithAuthorObject } from "./comment";
import { TopicWithoutThread } from "./topic";

export interface Thread {
  id: string;
  title: string;
  createdAt: number;
  content: string;
  comments: Array<ThreadComment | ThreadCommentWithAuthorObject>;
  authorId: string;
}

export type ThreadWithCategoryAndTopicNames = {
  topic: TopicWithoutThread;
  category: Pick<Category, "id" | "name">;
} & ThreadWithUser;

export type ThreadPreview = Omit<Thread, "content" | "comments">;
export type ThreadPreviewWithAuthor = ThreadPreview & {
  author: User;
};

export type ThreadWithUser = Thread & {
  author: User;
};
