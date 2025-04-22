import { MapPin, Phone, Clock } from "lucide-react"

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch With Us</h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be
        There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Address</h3>
              <p className="text-gray-700">New Baneshwar</p>
              <p className="text-gray-700">Kathmandu</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="text-gray-700">Mobile: +(977) 9765634234</p>
              <p className="text-gray-700">Phone: 0123456</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Working Time</h3>
              <p className="text-gray-700">Monday-Friday: 9:00 - 22:00</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Hi! I'd like to ask about"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
