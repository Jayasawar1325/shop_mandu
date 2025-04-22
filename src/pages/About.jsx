import { Heart, ShoppingBag, Truck, Users, Star, Mail, ArrowRight, Contact } from "lucide-react"
import { assets } from "../assets/assets"


 export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={assets.about_img}
          alt="Forever - About Us"
          width={1600}
          height={800}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center">Creating timeless fashion that lasts forever</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
            At shopmandu, we bring you a curated blend of modern fa shion and traditional Nepali essence. Inspired by local craftsmanship and global trends, our mission is to offer stylish, comfortable, and affordable clothing for everyone. Rooted in the heart of Kathmandu, we celebrate culture, creativity, and community—one outfit at a time.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to quality means that every piece is crafted to last, reducing waste and promoting a more
              sustainable approach to fashion. We source ethically produced materials and work with partners who share
              our values.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 text-white bg-black rounded-md font-medium hover:bg-black/80 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img src='https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg' alt="Our workshop" fill className="object-contain" />
          </div>
        </div>
      </section>

    </div>
  )
}
