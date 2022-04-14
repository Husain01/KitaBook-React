import React from "react";
import { CartState } from "../../context/Context";
import "./Filter.css";

export const Filter = () => {
  const {
    productState: { sortBy, rating, categorySelfHelp, categoryFiction, categoryNonFiction, sliderValue},
    productDispatch,
  } = CartState();
  return (
    <aside className="aside">
      <div className="side-heading">
        <h4>Filters</h4>
        <p
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear
        </p>
      </div>
      <div className="price-range">
        <h5>Price</h5>
        <span>$0 - $500+</span>
        <div className="range-slider">
          <input type="range" min={10} max={500}
          value={sliderValue} onChange={(e) => productDispatch({
            type: "SLIDER",
            payload: Number(e.target.value)
          })}/>
        </div>
      </div>
      <div className="category">
        <h5>Category</h5>
        <div className="category-options">
          <label htmlFor="self-help" className="options-input">
            <input
              type="checkbox"
              name=""
              id="self-help"
              className="checkbox-input"
              checked={categorySelfHelp}
              onChange={() => productDispatch({ type: "SELFHELP" })}
            />
            <span className="check-desc">Self Help</span>
          </label>
          <label htmlFor="fiction" className="options-input">
            <input
              type="checkbox"
              name=""
              id="fiction"
              className="checkbox-input"
              checked={categoryFiction}
              onChange={() => productDispatch({ type: "FICTION" })}
            />
            <span className="check-desc">Fiction</span>
          </label>
          <label htmlFor="non-fiction" className="options-input">
            <input
              type="checkbox"
              name=""
              id="non-fiction"
              className="checkbox-input"
              checked={categoryNonFiction}
              onChange={() => productDispatch({ type: "NONFICTION" })}
            />
            <span className="check-desc">Non-Fiction</span>
          </label>
        </div>
      </div>
      <div className="ratings">
        <h5>Ratings</h5>
        <label className="options-input custom-radio-btn">
          <input
            type="radio"
            name="ratings"
            className="radiomark"
            checked={rating && rating === "FOUR_STAR"}
            onChange={()=>
            productDispatch({
              type: "SORT_BY_RATING",
              payload: "FOUR_STAR"
            })}
          />
          <span className="check-desc">4 Stars & above</span>
        </label>
        <label className="options-input custom-radio-btn">
          <input type="radio" name="ratings" className="radiomark" 
          checked={rating && rating === "THREE_STAR"}
          onChange={()=>
          productDispatch({
            type: "SORT_BY_RATING",
            payload: "THREE_STAR"
          })}/>
          <span className="check-desc">3 Stars & above</span>
        </label>
        <label className="options-input custom-radio-btn">
          <input type="radio" name="ratings" className="radiomark" 
          checked={rating && rating === "TWO_STAR"}
          onChange={()=>
          productDispatch({
            type: "SORT_BY_RATING",
            payload: "TWO_STAR"
          })}/>
          <span className="check-desc">2 Stars & above</span>
        </label>
        <label className="options-input custom-radio-btn">
          <input type="radio" name="ratings" className="radiomark" 
          checked={rating && rating === "ONE_STAR"}
          onChange={()=>
          productDispatch({
            type: "SORT_BY_RATING",
            payload: "ONE_STAR"
          })}/>
          <span className="check-desc">1 Stars & above</span>
        </label>
      </div>
      <div className="sortBy">
        <h5>Sort By</h5>
        <label className="options-input custom-radio-btn">
          <input
            type="radio"
            name="sortBy"
            className="radiomark"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sortBy && sortBy === "highToLow" ? true : false}
          />
          <span className="check-desc">High to Low</span>
        </label>
        <label className="options-input custom-radio-btn">
          <input
            type="radio"
            name="sortBy"
            className="radiomark"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sortBy && sortBy === "lowToHigh" ? true : false}
          />
          <span className="check-desc">Low to High</span>
        </label>
      </div>
    </aside>
  );
};
