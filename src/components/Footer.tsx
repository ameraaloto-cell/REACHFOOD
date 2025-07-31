import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
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
              <div className="text-2xl font-serif font-bold gradient-text mb-4">
                AUX THE BARBER
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Germany's Best Barber 2016. Experience luxury grooming with Sezer Soylu, 
                where every cut tells a story of excellence and precision.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/aux_the_barber"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/auxthebarber"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/auxthebarber"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">Berlin, Germany</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">+49 30 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">info@auxthebarber.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 AUX THE BARBER. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 