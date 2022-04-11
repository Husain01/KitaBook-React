import './Product.css'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

import ProductCSS from './Product.module.css'
import { Filter, ProductCard } from '../../components'


export const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('api/products')
        setProducts(res.data.products)
      })();
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <div className={`content-container ${ProductCSS['content-container']}`}>
      <Filter />
        <main className={`main-content ${ProductCSS["main-content"]}`}>
          <div className='product-listing'>
            <div className='products-header'>
              <h3>Showing All Products</h3>
              <span>(Showing {products.length} products)</span>
            </div>
            <div className='product-cards'>
              {
                products && products.map((info) => {
                  return <ProductCard product={info} key={info._id}/>
                })}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

