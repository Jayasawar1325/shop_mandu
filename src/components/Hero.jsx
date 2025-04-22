import { ArrowRight } from "lucide-react"
import {  useNavigate } from "react-router-dom"
const Hero = () => {
const navigate = useNavigate()
return (
    <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="relative w-full h-full">
            <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-mnLHkxLW3KSZtsr6socX7E3U6K4jBg.png"
                alt="Fashion collection with model and clothing items"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-end px-4">
            <div className="bg-[#f5e6d3]/80 backdrop-blur-sm p-3 md:p-4 rounded-lg max-w-xs md:max-w-sm">
                <span className="inline-block text-xs font-medium bg-amber-100 px-2 py-1 rounded-full mb-2">New Arrival</span>

                <h1 className="text-sm md:text-lg font-bold text-gray-900 mb-2"></h1>
                    Discover Timeless Style from the Heart of Kathmandu...
                

                <p className="text-xs md:text-sm text-gray-700 mb-4">
                    Trendy, handcrafted clothes designed for comfort and elegance. Shop locally. Dress globally.
                </p>

                <button onClick={() => navigate('/shop')} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-md transition-colors duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    </section>
)
}

export default Hero
