import { useState, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isArabic = location.pathname.startsWith('/ar')
  const currentLang = isArabic ? 'AR' : 'EN'

  const navItems = useMemo(() => {
    if (isArabic) {
      return [
        { name: 'الرئيسية', path: '/ar' },
        { name: 'المنتجات', path: '/ar/services' },
        { name: 'الابتكار', path: '/ar/portfolio' },
        { name: 'من نحن', path: '/ar/about' },
        { name: 'المتجر', path: '/ar/shop' },
        { name: 'اتصل بنا', path: '/ar/contact' },
      ]
    }
    return [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/services' },
      { name: 'Innovation', path: '/portfolio' },
      { name: 'About', path: '/about' },
      { name: 'Shop', path: '/shop' },
      { name: 'Contact', path: '/contact' },
    ]
  }, [isArabic])

  const toggleLanguage = () => {
    const path = location.pathname
    if (isArabic) {
      // remove /ar prefix safely
      if (path === '/ar') {
        navigate('/', { replace: false })
      } else if (path.startsWith('/ar/')) {
        navigate(path.slice(3), { replace: false }) // '/ar'.length === 3
      } else {
        navigate('/', { replace: false })
      }
    } else {
      // add /ar prefix
      navigate(path === '/' ? '/ar' : `/ar${path}`, { replace: false })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={isArabic ? '/ar' : '/'} className="flex items-center space-x-3">
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
              <span className="text-gray-800"><span className="text-[#007BA7]">R</span><span className="text-orange-400">E</span><span className="text-[#007BA7]">A</span><span className="text-[#007BA7]">C</span><span className="text-[#007BA7]">H</span><span className="text-[#007BA7]">F</span><span className="text-orange-400">OO</span><span className="text-[#007BA7]">D</span></span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-orange-400 hover:text-orange-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Navigation Actions */}
          <div className={`hidden md:flex items-center space-x-4 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-orange-300/50 text-orange-400 hover:text-orange-500 hover:border-orange-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{currentLang}</span>
            </button>
            
            {/* Shopping Cart */}
            <Link
              to="/shop"
              className="relative p-2 text-orange-400 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
            
            {/* Order CTA */}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:from-teal-400 hover:to-teal-500 transition-all duration-200 flex items-center space-x-2"
            >
              <span>{isArabic ? 'اطلب الآن' : 'Order Now'}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden ${isArabic ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-400 hover:text-orange-500 p-2"
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
            <div className={`px-2 pt-2 pb-3 space-y-1 bg-white/90 border-t border-gray-200/30 ${isArabic ? 'text-right' : ''}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-orange-400 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-1 rounded-full border border-orange-300/50 text-orange-400"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLang}</span>
                </button>
                <Link
                  to={isArabic ? '/ar/shop' : '/shop'}
                  className="relative p-2 text-orange-400"
                >
                  <ShoppingCart className="w-6 h-6" />
                </Link>
              </div>
              <Link
                to={isArabic ? '/ar/booking' : '/booking'}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mx-3 rounded-md text-base font-medium bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 text-center"
              >
                {isArabic ? 'اطلب الآن' : 'Order Now'}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar