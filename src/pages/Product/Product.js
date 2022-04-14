import "./Product.css";
import React from "react";
import ProductCSS from "./Product.module.css";
import { Filter, ProductCard } from "../../components";
import { CartState } from "../../context/Context";

export const Product = () => {
  const {
    state: { products },
    productState: {
      sortBy,
      rating,
      sliderValue,
      searchQuery,
      categorySelfHelp,
      categoryFiction,
      categoryNonFiction,
    },
  } = CartState();
  const transformProducts = () => {
    let sortedProducts = products;
    if (rating) {
      if (rating === "ONE_STAR") {
        sortedProducts = sortedProducts.filter((item) => item.ratings >= 1);
      }
      if (rating === "TWO_STAR") {
        sortedProducts = sortedProducts.filter((item) => item.ratings >= 2);
      }
      if (rating === "THREE_STAR") {
        sortedProducts = sortedProducts.filter((item) => item.ratings >= 3);
      }
      if (rating === "FOUR_STAR") {
        sortedProducts = sortedProducts.filter((item) => item.ratings >= 4);
      }
    }
    if (sortBy) {
      if (sortBy === "lowToHigh") {
        sortedProducts = sortedProducts
          .slice()
          .sort((a, b) => a.price - b.price);
      }
      if (sortBy === "highToLow") {
        sortedProducts = sortedProducts
          .slice()
          .sort((a, b) => b.price - a.price);
      }
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    if (sliderValue) {
      sortedProducts = sortedProducts.filter(
        (item) => item.price <= sliderValue
      );
    }
    if (
      categorySelfHelp === true ||
      categoryFiction === true ||
      categoryNonFiction === true
    ) {
      const a = sortedProducts.filter((item) =>
        categorySelfHelp ? item.categoryName === "self-help" : false
      );
      const b = sortedProducts.filter((item) =>
        categoryFiction ? item.categoryName === "fiction" : false
      );
      const c = sortedProducts.filter((item) =>
        categoryNonFiction ? item.categoryName === "non-fiction" : false
      );
      sortedProducts = [...a, ...b, ...c];
    }
    return sortedProducts;
  };
  return (
    <>
      <div className={`content-container ${ProductCSS["content-container"]}`}>
        <Filter />
        <main className={`main-content ${ProductCSS["main-content"]}`}>
          <div className="product-listing">
            <div className="products-header">
              <h3>Showing All Products</h3>
              <span>(Showing {products.length} products)</span>
            </div>
            <div className="product-cards">
              {transformProducts().map((info) => {
                return <ProductCard product={info} key={info._id} />;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
