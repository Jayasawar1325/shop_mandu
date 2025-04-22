import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
const CartTotal = () => {
  const { getCartAmount,navigate } = useContext(ShopContext)
  
  return (
    <div className='bg-[#f8f3e0] p-6 rounded'>
      <h2 className='text-2xl font-bold mb-6'>Cart Totals</h2>
      
      <div className='flex flex-col gap-4'>
        <div className="flex justify-between items-center">
          <p className="font-medium">Subtotal</p>
          <p className="text-gray-700">NRS {getCartAmount().toLocaleString()}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-bold">Total</p>
          <p className="font-bold text-orange-500">NRS {getCartAmount().toLocaleString()}</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default CartTotal