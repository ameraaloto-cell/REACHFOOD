import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import PremiumCursor from './components/PremiumCursor'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for premium experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-900">
        {/* Premium Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
        </AnimatePresence>

        {/* Premium Custom Cursor */}
        <PremiumCursor />

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <motion.div
                      key="home"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Home />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/services" 
                  element={
                    <motion.div
                      key="services"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Services />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/portfolio" 
                  element={
                    <motion.div
                      key="portfolio"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Portfolio />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/booking" 
                  element={
                    <motion.div
                      key="booking"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Booking />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, rotateY: 15 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: -15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <About />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/shop" 
                  element={
                    <motion.div
                      key="shop"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Shop />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Contact />
                    </motion.div>
                  } 
                />
              </Routes>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
