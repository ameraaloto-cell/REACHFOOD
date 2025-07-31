import { motion } from 'framer-motion'
import { ShoppingCart, Star, Award } from 'lucide-react'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Hair Wax',
      price: '€25',
      description: 'Professional hold with natural ingredients',
      rating: 5,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Beard Oil Collection',
      price: '€35',
      description: 'Nourishing blend for healthy beard growth',
      rating: 5,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Styling Pomade',
      price: '€20',
      description: 'Classic hold with matte finish',
      rating: 5,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Gift Card',
      price: '€50',
      description: 'Perfect gift for the discerning gentleman',
      rating: 5,
      image: '/api/placeholder/300/300'
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
            
            <h1 className="section-title">Premium Products</h1>
            <p className="section-subtitle">
              Discover our curated collection of premium grooming products, 
              carefully selected to maintain your style between visits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="aspect-square bg-dark-700 rounded-lg mb-4 flex items-center justify-center">
                  <ShoppingCart className="w-16 h-16 text-primary-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-400">{product.price}</span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <button className="btn-primary w-full">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop 