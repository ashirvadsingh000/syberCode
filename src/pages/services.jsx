"use client"

import { motion } from "framer-motion"
import { FaShieldAlt, FaCode, FaServer, FaLock, FaUserShield, FaNetworkWired } from "react-icons/fa"
import bgVideo from '../../public/Video/bg2.mp4';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Security Testing Workshops",
      description: "Comprehensive penetration testing and security assessment training",
    },
    {
      icon: <FaCode />,
      title: "Secure Coding Courses",
      description: "Learn to develop software with security as a priority",
    },
    {
      icon: <FaServer />,
      title: "Infrastructure Security Training",
      description: "System and network infrastructure security solutions",
    },
    {
      icon: <FaLock />,
      title: "Data Security Education",
      description: "Learn about protecting sensitive data and encryption solutions",
    },
    {
      icon: <FaUserShield />,
      title: "Security Awareness Training",
      description: "Employee awareness and technical training programs",
    },
    {
      icon: <FaNetworkWired />,
      title: "SOC Operations Training",
      description: "Learn about 24/7 security operations center services",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-black/90">
       <video
                className="absolute inset-0 w-full h-full object-fill z-0 bg-black/40 "
                src={bgVideo}
                autoPlay
                loop
                muted
              />
        <div className="container mx-auto px-4 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive cybersecurity education at your fingertips</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black/50 p-8 rounded-lg hover:bg-black/60 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact us for your cybersecurity education needs</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
          >
           <a href=" Tel:9569732035"> Get Started</a>
          </motion.button>
        </div>
      </section>
    </div>
  )
}

