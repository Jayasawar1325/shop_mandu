import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([])
        useEffect(()=>{
                const bestProducts = products.filter((item)=>item.bestseller )
                setBestSeller(bestProducts.slice(0,3))
        },[products])
  return (
    <div className='my-10'>
        <div className=' text-3xl py-8'>
   <h2>Featured Products</h2>
    <p className=' m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Here are the top featured collections from the website which are given as follows
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6">
                    {bestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
                    ))}
                </div>
        
    </div>

  )
}

export default BestSeller