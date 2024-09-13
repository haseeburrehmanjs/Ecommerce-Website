import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { CircularProgress } from '@mui/material'

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
        {productData.length > 0 ? <div className='flex justify-center mt-20 flex-wrap gap-5'>{productData.map(item => (
          <ProductCard key={item.id} item={item}/>
        ))}</div> : <div className='h-[70vh] flex justify-center items-center'><CircularProgress /></div>}
      </div>
    </>
  )
}

export default Product
