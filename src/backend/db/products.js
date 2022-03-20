import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: "$39.99",
    categoryName: "self-help",
    badge: "BestSeller",
    image: "https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    price: "$49.99",
    categoryName: "non-fiction",
    badge: "",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "$799.99",
    categoryName: "non-fiction",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The Man who sold his Ferrari",
    author: "Robin Sharma",
    price: "$99.99",
    categoryName: "self-help",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/410BqHSamiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "$199.99",
    categoryName: "non-fiction",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41yu2qXhXXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$29.99",
    categoryName: "non-fiction",
    badge: "",
    image: "https://images-eu.ssl-images-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The 5 AM Club",
    author: "Robin Sharma",
    price: "$59.99",
    categoryName: "non-fiction",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41MC15v6UIL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The Compound Effect",
    author: "Darren Hardy",
    price: "$99.99",
    categoryName: "self-help",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41kbdfeipVS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "$149.99",
    categoryName: "fiction",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51OuP0mmnwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    _id: uuid(),
    title: "Man's Search for Meaning",
    author: "Viktor E Frankl",
    price: "$69.99",
    categoryName: "fiction",
    badge: "BestSeller",
    image: "https://images-na.ssl-images-amazon.com/images/I/415+jozXUNL._SY344_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Will",
    author: "Will Smith",
    price: "$99.99",
    categoryName: "non-fiction",
    badge: "New",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51povAtTE5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
];
