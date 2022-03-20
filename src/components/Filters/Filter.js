import React from 'react'
import './Filter.css';

const Filter = () => {
  return (
    <aside class="aside">
          <div class="side-heading">
            <h4>Filters</h4>
            <p>Clear</p>
          </div>
          <div class="price-range">
            <h5>Price</h5>
            <span>₹0 - ₹1000+</span>
            <div class="range-slider">
              <input type="range" />
            </div>
          </div>
          <div class="category">
            <h5>Category</h5>
            <div class="category-options">
              <label for="self-help" class="options-input">
                <input
                  type="checkbox"
                  name=""
                  id="self-help"
                  class="checkbox-input"
                />
                <span class="check-desc">Self Help</span>
              </label>
              <label for="fiction" class="options-input">
                <input
                  type="checkbox"
                  name=""
                  id="fiction"
                  class="checkbox-input"
                />
                <span class="check-desc">Fiction</span>
              </label>
              <label for="non-fiction" class="options-input">
                <input
                  type="checkbox"
                  name=""
                  id="non-fiction"
                  class="checkbox-input"
                />
                <span class="check-desc">Non-Fiction</span>
              </label>
            </div>
          </div>
          <div class="ratings">
            <h5>Ratings</h5>
            <label class="options-input custom-radio-btn">
                <input type="radio" name="ratings"  class="radiomark"/>
                <span class="check-desc">4 Stars & above</span>
            </label>
            <label class="options-input custom-radio-btn">
                <input type="radio" name="ratings"  class="radiomark"/>
                <span class="check-desc">3 Stars & above</span>
            </label>
            <label class="options-input custom-radio-btn">
                <input type="radio" name="ratings"  class="radiomark"/>
                <span class="check-desc">2 Stars & above</span>
            </label>
            <label class="options-input custom-radio-btn">
                <input type="radio" name="ratings"  class="radiomark"/>
                <span class="check-desc">1 Stars & above</span>
            </label>
        </div>
        </aside>
  )
}

export default Filter