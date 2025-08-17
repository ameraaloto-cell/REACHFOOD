import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Leaf, Zap, Globe, Shield } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-teal-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/images/logo.jpg" 
                    alt="ReachFood Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl font-serif font-bold">
                  <span className="text-white">Reach</span>
                  <span className="text-teal-400">Food</span>
                </div>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Revolutionizing nutrition with self-heating meals and sustainable packaging. 
                Bringing hot, culturally authentic food to emergency zones, adventures, and busy lives worldwide.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://instagram.com/reachfood"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/reachfood"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/reachfood"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-slate-300">5-Min Heating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-slate-300">Plantable Packaging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300">MENA Flavors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-slate-300">Accessible Design</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Products & Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Meal Kits
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Innovation Lab
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Subscriptions
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4 mt-6">Categories</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">Emergency Relief</span>
              </li>
              <li>
                <span className="text-slate-400">Adventure Meals</span>
              </li>
              <li>
                <span className="text-slate-400">Professional Quick</span>
              </li>
              <li>
                <span className="text-slate-400">Family Wellness</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400">Global Distribution</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400">+1-800-REACH-FOOD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400">hello@reachfood.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-teal-400" />
                <span className="text-slate-400">24/7 Emergency Support</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-4 mt-6">Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  NGO Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Corporate Sales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Distribution Network
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-teal-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © 2024 ReachFood. Revolutionizing nourishment worldwide.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-teal-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-teal-400 text-sm">
              Terms of Service
            </Link>
            <Link to="/sustainability" className="text-slate-400 hover:text-teal-400 text-sm">
              Sustainability
            </Link>
            <Link to="/accessibility" className="text-slate-400 hover:text-teal-400 text-sm">
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 