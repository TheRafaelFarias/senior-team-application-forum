import { Category } from "./category";
import { ThreadComment } from "./comment";
import { TopicWithoutThread } from "./topic";

export interface Thread {
  id: string;
  title: string;
  createdAt: Date;
  content: string;
  comments: Array<ThreadComment>;
}

export type ThreadWithCategoryAndTopicNames = {
  topic: TopicWithoutThread;
  category: Pick<Category, "id" | "name">;
} & Thread;

export type ThreadPreview = Omit<Thread, "content" | "comments">;
