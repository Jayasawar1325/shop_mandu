import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';
import { Trash } from 'lucide-react';

const Cart = () => {
  const { products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId]
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Cart Items Table */}
      <div className='w-full mb-8'>
        {/* Table Headers */}
        <div className='grid grid-cols-6 bg-[#faf0e6] py-4 px-4'>
          <div className='col-span-1 font-medium'>Image</div>
          <div className='col-span-1 font-medium'>Product</div>
          <div className='col-span-1 font-medium'>Price</div>
          <div className='col-span-1 font-medium'>Quantity</div>
          <div className='col-span-1 font-medium'>Subtotal</div>
          <div className='col-span-1 font-medium'>Remove</div>
        </div>

        {/* Cart Items */}
        {cartData.map((item, index) => {
          const productData = products.find(product => product._id === item._id);
          return (
            <div
              key={index}
              className='grid grid-cols-2 md:grid-cols-6 items-center py-4 px-4 border-b gap-4 md:gap-0'
            >
              {/* Product Image */}
              <div className='col-span-1 flex justify-center md:justify-start'>
                <img 
                  src={productData.image[0]} 
                  className='w-16 h-16 object-cover' 
                  alt={productData.name} 
                />
              </div>
              
              {/* Product Name */}
              <div className='col-span-1'>
                <p className='text-sm md:text-base text-center md:text-left'>{productData.name}</p>
              </div>
              
              {/* Price */}
              <div className='hidden md:block col-span-1'>
                <p className='text-sm md:text-base'>Rs. {productData.price.toLocaleString()}</p>
              </div>
              
              {/* Quantity */}
              <div className='col-span-1 flex justify-center md:justify-start'>
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, Number(e.target.value))
                  }
                  className='border w-16 px-2 py-1 text-center'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
              </div>
              
              {/* Subtotal */}
              <div className='hidden md:block col-span-1'>
                <p className='text-sm md:text-base'>Rs. {(productData.price * item.quantity).toLocaleString()}</p>
              </div>
              
              {/* Remove Button */}
              <div className='col-span-1 flex justify-center'>
                <button
                  onClick={() => updateQuantity(item._id, 0)}
                  className='text-gray-500 hover:text-red-500 cursor-pointer flex flex-col items-center'
                  aria-label="Remove item"
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>


      {/* Cart Total positioned at right corner */}
      <div className="flex justify-end">
        <div className='w-full md:w-1/3'>
          <CartTotal />
          <button onClick={()=>navigate('/place-order')} className="border border-gray-300 rounded py-3 px-8 mt-2 font-medium hover:bg-amber-50 transition-colors duration-200">
          Check Out
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;