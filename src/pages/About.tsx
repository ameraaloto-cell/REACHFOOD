import { motion } from 'framer-motion'
import { Award, Scissors, Star, MapPin, Clock, Phone } from 'lucide-react'

const About = () => {
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
            
            <h1 className="section-title">About Sezer Soylu</h1>
            <p className="section-subtitle">
              Meet the master craftsman behind AUX THE BARBER. Discover the journey, 
              passion, and dedication that earned Sezer the prestigious title of Germany's Best Barber 2016.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                The Journey to Excellence
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Sezer Soylu's journey in the art of barbering began over 15 years ago, 
                  driven by a passion for precision and a deep appreciation for the craft. 
                  What started as an apprenticeship in traditional barbering techniques 
                  evolved into a lifelong pursuit of excellence.
                </p>
                <p>
                  Through years of dedicated practice and continuous learning, Sezer 
                  mastered both classic and contemporary barbering techniques. His 
                  commitment to perfection and attention to detail quickly set him apart 
                  in the industry, earning him recognition among peers and clients alike.
                </p>
                <p>
                  In 2016, Sezer's exceptional skills, innovative techniques, and 
                  unwavering dedication to customer satisfaction earned him the prestigious 
                  title of Germany's Best Barber, a recognition that continues to inspire 
                  his work every day.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-dark-700 rounded-lg flex items-center justify-center">
                <Scissors className="w-32 h-32 text-primary-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">
              The accolades that validate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <Award className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Germany's Best Barber 2016</h3>
              <p className="text-gray-400">
                National recognition for excellence in barbering, customer service, and innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <Star className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Customer Excellence Award</h3>
              <p className="text-gray-400">
                Consistent 5-star ratings and exceptional client satisfaction over 10+ years
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <Scissors className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Master Craftsman Certification</h3>
              <p className="text-gray-400">
                Advanced certification in precision cutting and contemporary styling techniques
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Philosophy</h2>
            <p className="section-subtitle">
              The principles that guide every cut, every style, and every client interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
              <p className="text-gray-400">
                Every cut is executed with surgical precision and attention to detail
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                Combining traditional techniques with contemporary trends and styles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Unwavering commitment to delivering the highest quality service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
              <p className="text-gray-400">
                Creating memorable experiences that exceed client expectations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">Berlin, Germany</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
              <p className="text-gray-400">Mon-Sat: 9AM-8PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Phone className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
              <p className="text-gray-400">+49 30 1234 5678</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 