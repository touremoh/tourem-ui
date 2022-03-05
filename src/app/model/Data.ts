import {Article} from "./Article";

export interface Data {
  content: Article[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  first: boolean,
  numberOfElements: number,
  empty: boolean
}
