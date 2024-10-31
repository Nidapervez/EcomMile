import React from 'react'
import ProductList from '../components/productList'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div className=''>
      <Navbar/>
      <p className=' text-center font-mono text-3xl p-14'>There are countless delicious types of cakes to try! Here are some popular ones</p>
      
      <ProductList/>
    
      
      <Footer/></div>
  )
}

export default Page