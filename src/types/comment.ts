import { User } from "firebase/auth";

export interface ThreadComment {
  id: string;
  commentContent: string;
  authorId: string;
  createdAt: number;
}

export type ThreadCommentWithAuthorObject = ThreadComment & {
  author: User;
};
