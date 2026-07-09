import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import Directory from './pages/Directory.jsx'
import Membership from './pages/Membership.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
