"use client"

import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext)

  // Hardcoded review data (as requested)
  const rating = 4.5
  const reviewCount = 126

  return (
    <Link className="text-gray-800 cursor-pointer block" to={`/product/${id}`}>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img src={image[0] || "/placeholder.svg"} className="w-full h-64 object-cover" alt={name} />

        <div className="p-4">
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">From Nepal</p>

          <div className="flex items-center mb-2">
            {/* Star rating */}
            <div className="flex text-amber-400 mr-1">
              <Star fill="#FBBF24" size={16} />
              <Star fill="#FBBF24" size={16} />
              <Star fill="#FBBF24" size={16} />
              <Star fill="#FBBF24" size={16} />
              <Star fill="#FBBF24" strokeWidth={0} fillOpacity={0.5} size={16} />
            </div>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>

          <p className="text-base font-bold">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
