import React from "react";
import './CategoryCard.css'
import selfhelp from '../../assets/categories/1.jpg'
import { Link } from "react-router-dom";

const CategoryCard = ({categories}) => {
  return (
    categories && categories.map(e => {
      return (
        <div class="category-card normal-shadow" key={e._id}>
        <Link to="/products">
        <img src={e.image} alt="" />
        </Link>
        </div>
      )
    })

      
    
  );
};

export default CategoryCard;
