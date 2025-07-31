import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Scissors, Clock } from 'lucide-react'
import ParallaxHero from '../components/ParallaxHero'

const Home = () => {
  const services = [
    {
      name: 'Premium Haircut',
      price: '€45',
      duration: '45 min',
      description: 'Professional cut with consultation and styling'
    },
    {
      name: 'Beard Trim & Style',
      price: '€25',
      duration: '30 min',
      description: 'Precision beard grooming and styling'
    },
    {
      name: 'Hot Towel Shave',
      price: '€35',
      duration: '40 min',
      description: 'Traditional straight razor shave with hot towels'
    }
  ]

  const testimonials = [
    {
      name: 'Michael Schmidt',
      rating: 5,
      text: 'Sezer is absolutely incredible. Best haircut I\'ve ever had. The attention to detail is unmatched.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'David Müller',
      rating: 5,
      text: 'Germany\'s Best Barber 2016 - well deserved! Every visit feels like a luxury experience.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Thomas Weber',
      rating: 5,
      text: 'Professional, skilled, and creates exactly what you want. Highly recommend!',
      image: '/api/placeholder/60/60'
    }
  ]

  return (
    <div className="pt-16">
      {/* Premium Parallax Hero Section */}
      <ParallaxHero />

      {/* Services Preview */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Premium Services</h2>
            <p className="section-subtitle">
              Discover our signature services crafted with precision and luxury in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Scissors className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-primary-400">{service.price}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/booking" className="btn-primary w-full">
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              Hear from our satisfied clients about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-primary-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the difference that made Sezer 
              Germany's Best Barber 2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/booking" className="bg-white text-primary-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Book Appointment
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-900 transition-colors">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 