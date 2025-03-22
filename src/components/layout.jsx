"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../../public/logo.svg"
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { useState } from "react"

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#020B16] text-white flex flex-col">
      {/* Top bar */}
      <div className="bg-black/50 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p>be secure. be ethical. stay safe</p>
          <div className="flex items-center gap-4">
            <span>Follow Us</span>
            <div className="flex gap-2">
              <Link to="#" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                <FaTwitter />
              </Link>
              <Link to="#" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                <FaLinkedin />
              </Link>
              <Link to="#" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black/90 sticky top-0 z-50 shadow-sm shadow-purple-400">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-between items-center">
            <Link to="/">
              <motion.img
                src={logo}
                alt="SyberCode"
                className="h-16"
                whileHover={{ scale: 1.05 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/kurumsal" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                About Us
              </Link>
              <Link to="/is-ortaklari" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                Partners
              </Link>
              <Link to="/hizmetler" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                Services
              </Link>
              <Link to="/cozumler" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                Solutions
              </Link>
              <Link to="/sybersaas" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                SyberSaaS
              </Link>
              <Link to="/get-game" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                Get Game
              </Link>
              <Link to="/iletisim" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <RiCloseLine className="text-2xl border rounded-full " /> : <RiMenu3Line />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div className="md:hidden pt-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex flex-col gap-4">
                <get-gameLink to="/kurumsal"
 className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  About Us
                </get-gameLink>
                <Link to="/is-ortaklari" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  Partners
                </Link>
                <Link to="/hizmetler" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  Services
                </Link>
                <Link to="/cozumler" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  Solutions
                </Link>
                <Link to="/sybersaas" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  SyberSaaS
                </Link>
                <Link to="/get-game" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  Get Game
                </Link>
                <Link to="/iletisim" className="hover:text-blue-400 hover:border-b border-b-purple-400">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black/80 mt-20 ">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img
                src={logo}
                alt="SyberCode"
                className="h-16 mb-4"
              />
              <p className="text-gray-400 mb-4">
                SyberCode is a leading organization providing cybersecurity solutions and consulting services. We use
                the latest technologies to protect and secure our clients' digital assets.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/kurumsal" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/cozumler" className="text-gray-400 hover:text-white">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/is-ortaklari" className="text-gray-400 hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/sybersaas" className="text-gray-400 hover:text-white">
                    SyberSaaS
                  </Link>
                </li>
                <li>
                  <Link to="/get-game" className="text-gray-400 hover:text-white">
                    Get Game
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/hizmetler/penetrasyon-testleri" className="text-gray-400 hover:text-white">
                    Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler/zafiyet-yonetimi" className="text-gray-400 hover:text-white">
                    Vulnerability Management
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler/soc-hizmetleri" className="text-gray-400 hover:text-white">
                    SOC Services
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler/danismanlik" className="text-gray-400 hover:text-white">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler/egitim" className="text-gray-400 hover:text-white">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-blue-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  <a href="mailto:info@sybercode.com" className="text-gray-400 hover:text-white">
                    namises0@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-blue-400 mt-1" />
                  <span className="text-gray-400">123 Cyber Street, Suite 400, Tech City, CA 94000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SyberCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
