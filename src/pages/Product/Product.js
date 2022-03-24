import React from 'react'
import { useState, useEffect } from 'react'
import Filter from '../../components/Filters/Filter'
import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('api/products')
        console.log( res.data.products)
        setCategories(res.data.products)
      })();
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
    <Filter/>
    <main className='main-content'>
    <div className='product-listing'>
      <div className='products-header'>
        <h3>Showing All Products</h3>
      </div>
    </div>
    </main>
    </>
    )
}

export default Product