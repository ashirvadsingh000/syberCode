"use client"

import { motion } from "framer-motion"
import { FaShieldAlt, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa"
import bgVideo from '../../public/Video/bg2.mp4';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
        {/* Background Video */}
       
      <section className="relative h-[40vh] flex items-center bg-black/90 ">
      <video
          className="absolute inset-0 w-full h-full object-fill z-0 bg-black/40 "
          src={bgVideo}
          autoPlay
          loop
          muted
        />
        <div className="container mx-auto px-4 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300">Your trusted partner in ethical cybersecurity education</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At SyberCode, we are dedicated to providing comprehensive cybersecurity education with a strong emphasis
                on ethics. Our experienced team and advanced technology infrastructure help students develop the skills
                they need to succeed in the digital world.
              </p>
              <p className="text-gray-300">
                We continuously improve and innovate to understand our students' needs and provide the most appropriate
                solutions for their learning journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-black/50 p-6 rounded-lg">
                <FaShieldAlt className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-gray-400">Top-tier cybersecurity education</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg">
                <FaUsers className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <p className="text-gray-400">Expert and experienced instructors</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg">
                <FaLightbulb className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-400">Cutting-edge learning technologies</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg">
                <FaChartLine className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-400">Continuous development and progress</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

