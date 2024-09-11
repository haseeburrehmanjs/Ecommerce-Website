import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'

const Product = () => {
  const [productData, setproductData] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(responce => {
        console.log(responce.data.products);
        setproductData(responce.data.products)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='cotainer mx-auto'>
        {productData ? <div className='flex justify-center mt-20 flex-wrap gap-5'>{productData.map(item => (
          <ProductCard key={item.id} item={item}/>
        ))}</div> : <div className='flex justify-center items-center'><Spinner/></div>}
      </div>
    </>
  )
}

export default Product
