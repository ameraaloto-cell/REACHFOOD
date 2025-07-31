import { motion } from 'framer-motion'
import { Star, Award, Scissors } from 'lucide-react'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Classic Fade',
      category: 'Haircut',
      description: 'Precision fade with clean lines and perfect graduation',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
    },
    {
      id: 2,
      title: 'Beard Sculpting',
      category: 'Beard',
      description: 'Detailed beard sculpting with defined edges and shape',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
    },
    {
      id: 3,
      title: 'Executive Cut',
      category: 'Haircut',
      description: 'Professional executive style with premium finish',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
    },
    {
      id: 4,
      title: 'Hot Towel Shave',
      category: 'Shave',
      description: 'Traditional straight razor shave with hot towel treatment',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
    },
    {
      id: 5,
      title: 'Modern Undercut',
      category: 'Haircut',
      description: 'Contemporary undercut with textured top and clean sides',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
    },
    {
      id: 6,
      title: 'Beard Trim & Style',
      category: 'Beard',
      description: 'Precision beard trimming with natural styling',
      before: '/api/placeholder/400/400',
      after: '/api/placeholder/400/400'
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
            
            <h1 className="section-title">Portfolio</h1>
            <p className="section-subtitle">
              Discover the artistry and precision that earned Sezer the title of Germany's Best Barber 2016. 
              Each transformation tells a story of skill, creativity, and dedication to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative mb-4">
                  <div className="aspect-square bg-dark-700 rounded-lg mb-4 flex items-center justify-center">
                    <Scissors className="w-16 h-16 text-primary-400" />
                  </div>
                  <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                    {item.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-400 font-semibold">View Details</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-primary-400 fill-current" />
                    <Star className="w-4 h-4 text-primary-400 fill-current" />
                    <Star className="w-4 h-4 text-primary-400 fill-current" />
                    <Star className="w-4 h-4 text-primary-400 fill-current" />
                    <Star className="w-4 h-4 text-primary-400 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
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
              The recognition that validates our commitment to excellence
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
                National recognition for excellence in barbering and customer service
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
                Consistent 5-star ratings and exceptional client satisfaction
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
              <h3 className="text-xl font-semibold text-white mb-2">Master Craftsman</h3>
              <p className="text-gray-400">
                Advanced certification in precision cutting and styling techniques
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 