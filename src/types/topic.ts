import { ThreadPreview } from "./thread";

export interface Topic<ThreadType extends ThreadPreview> {
  id: string;
  name: string;
  threads: Array<ThreadType>;
}

export type TopicWithoutThread = Omit<Topic<ThreadPreview>, "threads">;
