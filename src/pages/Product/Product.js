import './Product.css'
import React from 'react'
import ProductCSS from './Product.module.css'
import { Filter, ProductCard } from '../../components'
import { CartState } from '../../context/Context'


export const Product = () => {
  const {state} = CartState();
  console.log(state)
  return (
    <>
      <div className={`content-container ${ProductCSS['content-container']}`}>
      <Filter />
        <main className={`main-content ${ProductCSS["main-content"]}`}>
          <div className='product-listing'>
            <div className='products-header'>
              <h3>Showing All Products</h3>
              <span>(Showing {state.products.length} products)</span>
            </div>
            <div className='product-cards'>
              {
                state.products && state.products.map((info) => {
                  return <ProductCard product={info} key={info._id}/>
                })}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

