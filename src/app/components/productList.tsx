"use client"
import React, { useState } from 'react'
import { useAppSelector,useAppDispatch } from '../store/hooks'
import { addProduct } from '../store/slices/product';
import { addCart } from '../store/slices/cart';


const ProductList = () => {
    const[name,setName]=useState("");
    const[category,setCategory]=useState("");
    const[qty,setQty]=useState(0);
    const products=useAppSelector(state=>state.productArray)
    const cart=useAppSelector(state=>state.cartArray)
    const dispatch=useAppDispatch()
   
  return (
    
    <div>
        <div className='grid grid-cols-4 gap-3 bg-green-300 w-[95%] mx-auto p-4 rounded-md' >

<input type="text" placeholder="item name" className='bg-green-200 text-lg rounded-md'
value={name}
onChange={(e)=>setName(e.target.value)}/>  
<input type="text" placeholder="category" className='bg-green-200 text-lg rounded-md'
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>  
<input type="number" placeholder="qty" className='bg-green-200 text-lg rounded-md'
value={qty}
onChange={(e:any)=>setQty(e.target.value)}
/>  
<button onClick={()=>dispatch(addProduct({name:name,category:category,qty:qty}))} className='bg-purple-900 rounded-md'>Add item</button>

        </div>
        <h1>Product List  </h1>
        <div className='grid grid-cols-3 gap-4'>
        {
        products.map((item,i)=>{
            return(
            <div className='w-350 border rounded-md bg-purple-400' key={i}>
                <h1>{item.name}</h1>
                <p>{item.category}</p>
                <p>{item.qty}</p>
                <button onClick={()=>dispatch(addCart({name:item.name,category:item.category,qty:item.qty}))}    className='bg-black text-white rounded-sm w-32 m-4'>add cart</button>
            </div>)
        })}
        </div></div>
  )
}

export default ProductList