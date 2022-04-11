import React from 'react'
import './Filter.css';

export const Filter = () => {
  return (
    <aside className="aside">
          <div className="side-heading">
            <h4>Filters</h4>
            <p>Clear</p>
          </div>
          <div className="price-range">
            <h5>Price</h5>
            <span>₹0 - ₹1000+</span>
            <div className="range-slider">
              <input type="range" />
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
                />
                <span className="check-desc">Self Help</span>
              </label>
              <label htmlFor="fiction" className="options-input">
                <input
                  type="checkbox"
                  name=""
                  id="fiction"
                  className="checkbox-input"
                />
                <span className="check-desc">Fiction</span>
              </label>
              <label htmlFor="non-fiction" className="options-input">
                <input
                  type="checkbox"
                  name=""
                  id="non-fiction"
                  className="checkbox-input"
                />
                <span className="check-desc">Non-Fiction</span>
              </label>
            </div>
          </div>
          <div className="ratings">
            <h5>Ratings</h5>
            <label className="options-input custom-radio-btn">
                <input type="radio" name="ratings"  className="radiomark"/>
                <span className="check-desc">4 Stars & above</span>
            </label>
            <label className="options-input custom-radio-btn">
                <input type="radio" name="ratings"  className="radiomark"/>
                <span className="check-desc">3 Stars & above</span>
            </label>
            <label className="options-input custom-radio-btn">
                <input type="radio" name="ratings"  className="radiomark"/>
                <span className="check-desc">2 Stars & above</span>
            </label>
            <label className="options-input custom-radio-btn">
                <input type="radio" name="ratings"  className="radiomark"/>
                <span className="check-desc">1 Stars & above</span>
            </label>
        </div>
        </aside>
  )
}

