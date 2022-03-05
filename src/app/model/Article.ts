import {Author} from "./Author";

export interface Article {
  id: string,
  title: string,
  payload: string,
  author: Author,
  createdAt: Date,
  updatedAt: Date
}
