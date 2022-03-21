import React from "react";
import './CategoryCard.css'
import selfhelp from '../../assets/categories/1.jpg'

const CategoryCard = () => {
  return (
    <div class="category-card normal-shadow">
      <a href="/pages/product-page/product-page.html">
        <img src={selfhelp} alt="" />
      </a>
    </div>
  );
};

export default CategoryCard;
