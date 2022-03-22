import { v4 as uuid } from "uuid";
import selfhelp from "../../assets/categories/1.jpg"
import fiction from "../../assets/categories/3.jpg"
import nonfiction from "../../assets/categories/2.jpg"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image: {fiction}
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image: {nonfiction}
  },
  {
    _id: uuid(),
    categoryName: "self-help",
    description:
      "the action or process of bettering oneself or overcoming one's problems without the aid of others",
      image: {selfhelp}
  },
];
