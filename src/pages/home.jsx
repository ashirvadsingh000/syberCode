import { motion } from "framer-motion"
import { FaKey, FaBullseye, FaClock } from "react-icons/fa"
import { MdCastForEducation } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";

import bgVideo from '../../public/Video/bg4.mp4';

export default function HomePage() {
  return (
    <div className=" overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute  inset-0  bg-black/50  object-fill w-full h-full
     z-0 "
          src={bgVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-Anta">Inspiring Students in the Ethical Cyber World!</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            We provide ethical content and resources to help students develop their skills and knowledge in
            cybersecurity while maintaining the highest ethical standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-red-900/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <FaKey className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity Awareness</h3>
              <p className="text-gray-400">
              Empowering students to recognize and respond to cyber threats effectively.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                <FaBullseye className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hands-On Cyber Labs</h3>
              <p className="text-gray-400"> Engage in practical labs that simulate real-world cybersecurity scenarios.</p>
            </motion.div>

            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <RiUserCommunityLine  className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-400"> Join a vibrant community for ongoing support and knowledge sharing.</p>
            </motion.div>
          </div>
          {/* Links Section */}
          
          <div className="mt-20 text-center">
            <h2 className="text-4xl  mb-4 font-myfont ">-- Useful Links --</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li><a href="https://vegamovies.hn/" className="text-blue-500 hover:underline">https://vegamovies.hn/</a></li>
              <li><a href="https://vegamovies.rs/" className="text-blue-500 hover:underline">https://vegamovies.rs/</a></li>
              <li><a href="https://hindilinks4u.green/" className="text-blue-500 hover:underline">https://hindilinks4u.green/</a></li>
              <li><a href="https://uhdmovies.fyi/" className="text-blue-500 hover:underline">https://uhdmovies.fyi/</a></li>
              <li><a href="https://www.mp4moviez.capital/" className="text-blue-500 hover:underline">https://www.mp4moviez.capital/</a></li>
              <li><a href="https://www.filmyzilla.net.ng/" className="text-blue-500 hover:underline">https://www.filmyzilla.net.ng/</a></li>
            </ul>
          </div>


          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold  mb-4 font-myfont ">-- Browser --</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li><a href="https://www.torproject.org/download/" className="text-blue-500 hover:underline">https://www.torproject.org/download/</a></li>
             
            </ul>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-4xl  mb-4 font-myfont ">-- Dark Web --</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li><a href="http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion/" className="text-blue-500 hover:underline">http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion/</a></li>
              <li><a href="http://haystak5njsmn2hqkewecpaxetahtwhsbsa64jom2k22z5afxhnpxfid.onion/" className="text-blue-500 hover:underline">http://haystak5njsmn2hqkewecpaxetahtwhsbsa64jom2k22z5afxhnpxfid.onion/</a></li>
              <li><a href="http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/" className="text-blue-500 hover:underline">http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/</a></li>
              <li><a href="http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion" className="text-blue-500 hover:underline">http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion</a></li>
            </ul>
          </div>
          {/* second boxes */}
          <div className="  mt-9 last:grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <MdCastForEducation  className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical Education</h3>
              <p className="text-gray-400">
              Learn cybersecurity with a strong foundation in ethics and responsible practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                <FaBullseye className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Learning Resources</h3>
              <p className="text-gray-400"> Access hands-on labs and exercises designed for students at all skill levels..</p>
            </motion.div>

            <motion.div
              className="bg-black/50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <FaClock className="text-6xl text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Learning Support</h3>
              <p className="text-gray-400">  Continuous access to resources and community support for your learning journey.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
