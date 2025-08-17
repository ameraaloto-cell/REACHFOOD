import { motion } from 'framer-motion'
import { ShoppingCart, Star, Zap, Leaf, CheckCircle, Globe, Heart } from 'lucide-react'

const Shop = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Emergency Relief Starter Kit',
      price: '$89',
      originalPrice: '$120',
      description: 'Complete nutrition solution for emergency situations with 8 diverse meals',
      rating: 5,
      reviews: 127,
      features: ['8 self-heating meals', '2-year shelf life', 'No cooking equipment needed', 'Halal certified'],
      badge: 'Best Seller',
      image: '/api/placeholder/300/300',
      category: 'Emergency Relief'
    },
    {
      id: 2,
      name: 'Adventure Explorer Pack',
      price: '$65',
      originalPrice: null,
      description: 'Lightweight, high-energy meals perfect for outdoor adventures and camping',
      rating: 5,
      reviews: 89,
      features: ['5 compact meals', 'High calorie density', 'Weather resistant', 'Ultra-lightweight'],
      badge: 'Adventure Pro',
      image: '/api/placeholder/300/300',
      category: 'Adventure'
    },
    {
      id: 3,
      name: 'Professional Quick Meal Set',
      price: '$45',
      originalPrice: null,
      description: 'Convenient, office-friendly nutrition for busy professionals',
      rating: 5,
      reviews: 203,
      features: ['4 balanced meals', 'No mess heating', 'Office-appropriate', 'Sustained energy'],
      badge: 'Office Favorite',
      image: '/api/placeholder/300/300',
      category: 'Professional'
    },
    {
      id: 4,
      name: 'Family Wellness Bundle',
      price: '$75',
      originalPrice: '$95',
      description: 'Kid-friendly, nutritious meals the whole family will love',
      rating: 5,
      reviews: 156,
      features: ['6 family-size meals', 'Kid-approved taste', 'Hidden vegetables', 'Family sharing'],
      badge: 'Family Size',
      image: '/api/placeholder/300/300',
      category: 'Family'
    },
    {
      id: 5,
      name: 'Cultural Heritage Collection',
      price: '$55',
      originalPrice: null,
      description: 'Authentic MENA-inspired flavors with traditional recipes',
      rating: 5,
      reviews: 94,
      features: ['5 cultural meals', 'Authentic spices', 'Traditional recipes', 'Halal certified'],
      badge: 'Authentic',
      image: '/api/placeholder/300/300',
      category: 'Cultural'
    },
    {
      id: 6,
      name: 'Sustainability Sample Pack',
      price: '$25',
      originalPrice: null,
      description: 'Try our plantable packaging with 3 popular meal varieties',
      rating: 5,
      reviews: 67,
      features: ['3 sample meals', 'Plantable packaging', 'Eco-friendly', 'Wildflower seeds'],
      badge: 'Eco-Friendly',
      image: '/api/placeholder/300/300',
      category: 'Sustainability'
    }
  ]

  const subscriptionPlans = [
    {
      name: 'Emergency Preparedness',
      monthlyPrice: '$89',
      annualPrice: '$890',
      savings: '$178',
      meals: '8 meals/month',
      features: [
        'Mixed emergency meal selection',
        'Extended shelf life storage',
        'Priority shipping',
        'Emergency planning guide',
        'Bulk organization discounts'
      ],
      popular: false
    },
    {
      name: 'Adventure Explorer',
      monthlyPrice: '$49',
      annualPrice: '$490',
      savings: '$98',
      meals: '4 meals/month',
      features: [
        'High-energy outdoor meals',
        'Ultra-lightweight packaging',
        'Weather-resistant design',
        'Adventure meal planning',
        'Gear partnership discounts'
      ],
      popular: true
    },
    {
      name: 'Corporate Wellness',
      monthlyPrice: '$129',
      annualPrice: '$1290',
      savings: '$258',
      meals: '12 meals/month',
      features: [
        'Office-optimized meals',
        'Team sharing options',
        'Wellness program integration',
        'Nutrition tracking',
        'Corporate volume discounts'
      ],
      popular: false
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                ReachFood Product Showcase
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Nutrition Solutions</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Discover our complete range of self-heating meal solutions designed for every situation - 
              from emergency relief to outdoor adventures, professional life to family wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Each product is carefully designed to meet specific needs while delivering the same revolutionary 
              5-minute self-heating technology and sustainable packaging
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-teal-300 rounded-xl p-6 shadow-lg hover:shadow-xl group transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Product Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    <Zap className="w-3 h-3 inline mr-1" />
                    5 min heating
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-xs text-teal-600 font-medium mb-3">{product.category}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-teal-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-teal-500 fill-current" />
                    ))}
                    <span className="text-sm text-slate-600 ml-2">({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 text-center text-sm leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-2">
                  <motion.button
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Inquiry
                  </motion.button>
                  <motion.button
                    className="w-full border-2 border-teal-500 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white transition-all font-semibold text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Subscription Plans</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Regular delivery of nutrition solutions tailored to your lifestyle. Save up to 20% with annual plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border-2 rounded-xl p-8 text-center transition-all duration-300 ${
                  plan.popular 
                    ? 'border-teal-500/70 hover:border-teal-400 scale-105' 
                    : 'border-teal-700/30 hover:border-teal-500/50'
                }`}
                whileHover={{ 
                  scale: plan.popular ? 1.05 : 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-teal-400">{plan.monthlyPrice}</span>
                      <span className="text-teal-200">/month</span>
                    </div>
                    <div className="text-sm text-teal-300">
                      or {plan.annualPrice}/year (save {plan.savings})
                    </div>
                    <div className="text-teal-200 text-sm">
                      {plan.meals} included
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-teal-100 text-left">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-6 rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact for Pricing
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ReachFood Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Why Choose ReachFood?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Every product represents our commitment to innovation, sustainability, and accessibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">5-Minute Technology</h3>
              <p className="text-slate-600 text-sm">
                Revolutionary self-heating that works anywhere, anytime, without external power
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Leaf className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Plantable Packaging</h3>
              <p className="text-slate-600 text-sm">
                Biodegradable packaging embedded with seeds that transform into wildflowers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Cultural Authenticity</h3>
              <p className="text-slate-600 text-sm">
                MENA-inspired flavors with Halal certification and traditional recipes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Accessibility Focus</h3>
              <p className="text-slate-600 text-sm">
                Braille labeling, audio scanning, and inclusive design for all communities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Experience ReachFood?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific needs, request samples, or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact for Pricing
              </motion.a>
              <motion.a
                href="/services"
                className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-lg hover:bg-slate-100 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Our Technology
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Shop