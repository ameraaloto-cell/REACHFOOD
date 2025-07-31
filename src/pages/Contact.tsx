import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary-400 mr-3" />
              <span className="text-primary-400 font-semibold text-lg">
                Germany's Best Barber 2016
              </span>
            </div>
            
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Get in touch to book your appointment or ask any questions. 
              We're here to provide you with the ultimate grooming experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                    placeholder="+49 30 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                    placeholder="Tell us about your grooming needs..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to experience the difference that made Sezer Germany's Best Barber 2016? 
                  Contact us today to book your appointment or learn more about our services.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+49 30 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@auxthebarber.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose AUX THE BARBER?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Germany's Best Barber 2016</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Premium grooming experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Expert consultation and styling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>Luxury atmosphere and service</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 