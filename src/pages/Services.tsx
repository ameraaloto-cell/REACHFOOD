import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scissors, Clock, Star, Award, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      category: 'Hair Services',
      items: [
        {
          name: 'Premium Haircut',
          price: '€45',
          duration: '45 min',
          description: 'Professional consultation, precision cutting, and styling with premium products.',
          features: ['Consultation included', 'Premium styling products', 'Style recommendations']
        },
        {
          name: 'Executive Cut',
          price: '€55',
          duration: '60 min',
          description: 'Luxury haircut experience with extended consultation and premium treatment.',
          features: ['Extended consultation', 'Premium products', 'Style education', 'Follow-up care']
        },
        {
          name: 'Kids Haircut (Under 12)',
          price: '€25',
          duration: '30 min',
          description: 'Gentle and patient approach for young clients.',
          features: ['Child-friendly environment', 'Patience and care', 'Parent consultation']
        }
      ]
    },
    {
      category: 'Beard Services',
      items: [
        {
          name: 'Beard Trim & Style',
          price: '€25',
          duration: '30 min',
          description: 'Precision beard grooming with shaping and styling.',
          features: ['Beard consultation', 'Precision trimming', 'Styling guidance']
        },
        {
          name: 'Beard & Haircut Combo',
          price: '€60',
          duration: '75 min',
          description: 'Complete grooming package for hair and beard.',
          features: ['Full consultation', 'Coordinated styling', 'Premium products']
        },
        {
          name: 'Beard Sculpting',
          price: '€35',
          duration: '45 min',
          description: 'Advanced beard shaping and sculpting for defined looks.',
          features: ['Advanced techniques', 'Detailed sculpting', 'Style maintenance tips']
        }
      ]
    },
    {
      category: 'Shaving Services',
      items: [
        {
          name: 'Hot Towel Shave',
          price: '€35',
          duration: '40 min',
          description: 'Traditional straight razor shave with hot towels and premium products.',
          features: ['Hot towel treatment', 'Straight razor shave', 'Premium aftershave']
        },
        {
          name: 'Luxury Shave Experience',
          price: '€50',
          duration: '60 min',
          description: 'Ultimate shaving experience with extended treatment and care.',
          features: ['Extended hot towel treatment', 'Multiple passes', 'Premium products', 'Aftercare']
        }
      ]
    },
    {
      category: 'Grooming Packages',
      items: [
        {
          name: 'The Executive Package',
          price: '€85',
          duration: '90 min',
          description: 'Complete luxury grooming experience for the discerning gentleman.',
          features: ['Premium haircut', 'Beard sculpting', 'Hot towel treatment', 'Style consultation']
        },
        {
          name: 'The VIP Experience',
          price: '€120',
          duration: '120 min',
          description: 'Ultimate luxury package with extended services and premium treatment.',
          features: ['Executive haircut', 'Beard sculpting', 'Luxury shave', 'Premium products', 'Style education']
        }
      ]
    }
  ]

  const addOns = [
    {
      name: 'Hair Wash & Conditioning',
      price: '€10',
      duration: '15 min'
    },
    {
      name: 'Hair Styling',
      price: '€15',
      duration: '20 min'
    },
    {
      name: 'Beard Oil Treatment',
      price: '€8',
      duration: '10 min'
    },
    {
      name: 'Scalp Treatment',
      price: '€12',
      duration: '15 min'
    }
  ]

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
            
            <h1 className="section-title">Premium Services</h1>
            <p className="section-subtitle">
              Discover our signature services crafted with precision and luxury in mind. 
              Each service is designed to provide you with the ultimate grooming experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="card group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-center mb-6">
                      <Scissors className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <span className="text-2xl font-bold text-primary-400">{service.price}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/booking" className="btn-primary w-full">
                      Book Now
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Enhance your experience with our premium add-on services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-xl font-bold text-primary-400">{addOn.price}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {addOn.duration}
                  </span>
                </div>
                <Link to="/booking" className="btn-secondary w-full">
                  Add to Booking
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Why Choose AUX THE BARBER?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
              Experience the difference that made Sezer Germany's Best Barber 2016
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-primary-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Award-Winning Excellence</h3>
              <p className="text-primary-100">
                Germany's Best Barber 2016 - a title earned through years of dedication and skill
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Scissors className="w-16 h-16 text-primary-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Precision & Skill</h3>
              <p className="text-primary-100">
                Every cut is crafted with precision, attention to detail, and artistic vision
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Star className="w-16 h-16 text-primary-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Luxury Experience</h3>
              <p className="text-primary-100">
                Premium products, comfortable environment, and personalized service
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover why Sezer is Germany's Best Barber 2016
            </p>
            <Link to="/booking" className="btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 