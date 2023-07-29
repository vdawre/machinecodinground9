import React from 'react'
import Navbar from '../components/Navbar'
import CategorytListLayout from '../components/ProductListLayout'

const ProductListing = () => {
  return (
    <div className='hStack nowrap'>
      <Navbar />
      <CategorytListLayout />
    </div>
  )
}

export default ProductListing