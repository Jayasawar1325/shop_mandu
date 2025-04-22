import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [quantity, setQuantity] = useState(1)

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  return productData ?
    <div className='container mx-auto px-4 py-6'>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 order-2 md:order-1 md:w-1/6">
            {productData.image.map((item, index) => (
              <img 
                src={item} 
                onClick={() => setImage(item)} 
                key={index} 
                alt="" 
                className='w-20 h-20 object-cover cursor-pointer' 
              />
            ))}
          </div>
          
          {/* Main Image */}
          <div className='order-1 md:order-2 md:w-4/6'>
            <img src={image} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className='text-2xl md:text-3xl font-medium'>Long Sleeve Red Shirt</h1>
          
          <p className='mt-4 text-gray-600'>Rs. 250,000.00</p>
          
          <div className='mt-2 flex'>
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-300">★</span>
            </div>
          </div>
          
          <p className='mt-6 text-gray-700'>
            there is something that we need to take it to further and then it is something that we need to findout someone for the country and then it is something that take sme so far
          </p>
          
          {/* Quantity and Add to Cart */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button 
                onClick={handleDecrement}
                className="px-4 py-2 text-lg"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center py-2"
              />
              <button 
                onClick={handleIncrement}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={() => addToCart(productData._id)}
              className="bg-white border border-gray-300 hover:bg-gray-50 text-black px-8 py-2 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    : <div className='opacity-0'></div>
}

export default Product