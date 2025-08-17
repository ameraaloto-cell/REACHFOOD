import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/services' },
    { name: 'Innovation', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'EN' ? 'AR' : 'EN')
    // Here you would implement actual language switching logic
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-teal-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img 
                src="/images/logo.jpg" 
                alt="ReachFood Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-serif font-bold"
            >
              <span className="text-white">Reach</span>
              <span className="text-teal-400">Food</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-teal-400'
                    : 'text-gray-300 hover:text-teal-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Navigation Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-teal-600/50 text-gray-300 hover:text-white hover:border-teal-500 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{currentLang}</span>
            </button>
            
            {/* Shopping Cart */}
            <Link
              to="/shop"
              className="relative p-2 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
            
            {/* Order CTA */}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:from-teal-400 hover:to-teal-500 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-t border-teal-700/30">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-teal-400 bg-slate-700'
                      : 'text-gray-300 hover:text-teal-400 hover:bg-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-1 rounded-full border border-teal-600/50 text-gray-300"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang}</span>
                </button>
                <Link
                  to="/shop"
                  className="relative p-2 text-gray-300"
                >
                  <ShoppingCart className="w-6 h-6" />
                </Link>
              </div>
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mx-3 rounded-md text-base font-medium bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 text-center"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 