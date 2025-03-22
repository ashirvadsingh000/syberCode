import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ServicesPage from "./pages/services"
import ContactPage from "./pages/contact"
import GamePage from "./pages/game"
import SyberSos from "./pages/opensas"
import Soultion from "./pages/solution"
import Partners from "./pages/partners"
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kurumsal" element={<AboutPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/get-game" element={<GamePage />} />
          <Route path="/cozumler" element={<Soultion />} />
          <Route path="/SyberSaaS" element={<SyberSos />} />
          <Route path="/is-ortaklari" element={<Partners />} />
        </Routes>
      </Layout>
    </Router>
  )
}

