import { Topic, TopicWithoutThread } from "./topic";

export interface Category {
  id: string;
  name: string;
  iconColor: string;
  topics: Array<TopicWithoutThread>;
}
