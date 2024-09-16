import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='p-4 bg-gray-950 text-white flex justify-between items-center'>
        <div className='container mx-auto'>
          <h1 className='text-3xl'>Grocery Store</h1>
        </div>
        <div>
          <ul id='list' className='flex gap-3'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='product'>Product</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
