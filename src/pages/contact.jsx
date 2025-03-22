"use client"

import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-black/90">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with our team</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-2xl text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-300">+91 9569732035</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-2xl text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">namises0@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-300">
                      siddhaur,
                      <br />
                      baraabanki,                      <br />
                      up -225413
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-black/30 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Map will be displayed here</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

