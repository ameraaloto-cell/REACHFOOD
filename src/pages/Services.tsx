import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ShoppingBag, 
  CheckCircle, 
  Flame, 
  Leaf, 
  Shield, 
  Globe,
  Zap,
  Heart,
  Mountain,
  Building
} from 'lucide-react'

const Services = () => {
  const mealCategories = [
    {
      category: 'Emergency Relief Meals',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      items: [
        {
          name: 'Hearty Beef Stew',
          price: '$12.99',
          servings: '2 servings',
          description: 'Slow-cooked beef with root vegetables in a rich bone broth. High protein and nutrient density for emergency situations.',
          features: ['High protein content', 'Extended shelf life', 'No cooking equipment needed', 'Halal certified'],
          badge: 'Best Seller',
          image: '/api/placeholder/300/200'
        },
        {
          name: 'Lentil & Vegetable Soup',
          price: '$11.99',
          servings: '2 servings',
          description: 'Protein-rich lentils with aromatic vegetables and spices. Perfect for vegetarian emergency nutrition.',
          features: ['Plant-based protein', 'Fiber rich', 'Essential vitamins', 'Gluten-free'],
          badge: 'Vegan',
          image: '/api/placeholder/300/200'
        },
        {
          name: 'Chicken & Rice Pilaf',
          price: '$12.99',
          servings: '2 servings',
          description: 'Tender chicken and fragrant rice with traditional MENA spices. A comforting, familiar taste.',
          features: ['Complete protein', 'Complex carbohydrates', 'Traditional flavors', 'Quick heating'],
          badge: 'New',
          image: '/api/placeholder/300/200'
        }
      ]
    },
    {
      category: 'Adventure Meals',
      icon: Mountain,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      items: [
        {
          name: 'Moroccan Tagine',
          price: '$13.99',
          servings: '1 serving',
          description: 'Authentic Moroccan spices with vegetables and chickpeas. Lightweight and energy-dense for outdoor adventures.',
          features: ['Lightweight packaging', 'High energy density', 'Authentic spices', 'Compact size'],
          badge: 'Adventure Pro',
          image: '/api/placeholder/300/200'
        },
        {
          name: 'Turkish Lamb Curry',
          price: '$14.99',
          servings: '1 serving',
          description: 'Rich lamb curry with aromatic spices and tender vegetables. Perfect for cold mountain nights.',
          features: ['High calorie content', 'Warming spices', 'Premium ingredients', 'Weather resistant'],
          badge: 'Premium',
          image: '/api/placeholder/300/200'
        }
      ]
    },
    {
      category: 'Professional Quick Meals',
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      items: [
        {
          name: 'Mediterranean Bowl',
          price: '$11.99',
          servings: '1 serving',
          description: 'Balanced nutrition with quinoa, vegetables, and olive oil. Perfect for busy work schedules.',
          features: ['Balanced nutrition', 'Office-friendly', 'No mess heating', 'Sustained energy'],
          badge: 'Office Favorite',
          image: '/api/placeholder/300/200'
        },
        {
          name: 'Protein Power Bowl',
          price: '$13.99',
          servings: '1 serving',
          description: 'High-protein blend of legumes, grains, and vegetables. Ideal for active professionals.',
          features: ['25g protein', 'Sustained energy', 'Mental clarity', 'Quick consumption'],
          badge: 'High Protein',
          image: '/api/placeholder/300/200'
        }
      ]
    },
    {
      category: 'Family Wellness Meals',
      icon: Heart,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      items: [
        {
          name: 'Kids\' Favorite Pasta',
          price: '$10.99',
          servings: '2 servings',
          description: 'Child-friendly pasta with hidden vegetables and familiar flavors. Nutritious and appealing to young palates.',
          features: ['Kid-approved taste', 'Hidden vegetables', 'No artificial colors', 'Family size'],
          badge: 'Kid Friendly',
          image: '/api/placeholder/300/200'
        },
        {
          name: 'Grandma\'s Comfort Stew',
          price: '$12.99',
          servings: '3 servings',
          description: 'Traditional home-style stew with tender meat and vegetables. Brings families together around nourishing meals.',
          features: ['Family recipe', 'Comfort food', 'Sharing size', 'Traditional spices'],
          badge: 'Family Size',
          image: '/api/placeholder/300/200'
        }
      ]
    }
  ]

  const subscriptionPlans = [
    {
      name: 'Emergency Preparedness',
      price: '$89.99',
      period: 'monthly',
      meals: '8 meals',
      description: 'Essential emergency nutrition for families and organizations'
    },
    {
      name: 'Adventure Explorer',
      price: '$49.99',
      period: 'monthly',
      meals: '4 meals',
      description: 'Perfect for regular outdoor adventures and camping trips'
    },
    {
      name: 'Professional On-the-Go',
      price: '$69.99',
      period: 'monthly',
      meals: '6 meals',
      description: 'Convenient nutrition for busy work schedules'
    },
    {
      name: 'Family Wellness',
      price: '$129.99',
      period: 'monthly',
      meals: '12 meals',
      description: 'Nutritious family meals for busy households'
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
              <Flame className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                Revolutionary Self-Heating Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Curated Meal Kits</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Carefully crafted to suit diverse lifestyles and nutritional needs. Made with real ingredients 
              and cultural authenticity, each meal is packed with rich flavor and supports improved wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meal Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mealCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="mb-16"
              >
                <div className="flex items-center justify-center mb-8">
                  <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />
                  <h2 className="text-3xl font-serif font-bold text-slate-900">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((meal, index) => (
                    <motion.div
                      key={meal.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-teal-300 rounded-xl p-6 shadow-lg hover:shadow-xl group hover:scale-105 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Product Image */}
                      <div className="relative mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {meal.badge && (
                          <div className="absolute top-3 right-3 bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {meal.badge}
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                          <Zap className="w-3 h-3 inline mr-1" />
                          5 min heating
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{meal.name}</h3>
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <span className="text-2xl font-bold text-teal-600">{meal.price}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-600 flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-1" />
                            {meal.servings}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 text-center text-sm leading-relaxed">{meal.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {meal.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link to="/shop" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all flex-1 text-center font-semibold">
                          Add to Cart
                        </Link>
                        <Link to="/booking" className="border-2 border-teal-500 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white transition-all font-semibold">
                          Subscribe
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Subscription Plans Section */}
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
              Regular delivery of nutrition solutions tailored to your lifestyle and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-teal-700/30 hover:border-teal-500/50 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <span className="text-2xl font-bold text-teal-400">{plan.price}</span>
                    <span className="text-teal-200">/{plan.period}</span>
                  </div>
                  <div className="text-teal-200 text-sm mb-4">
                    {plan.meals} included
                  </div>
                </div>
                <p className="text-teal-100 text-sm mb-6 leading-relaxed">{plan.description}</p>
                <Link to="/booking" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-6 rounded-lg hover:from-teal-400 hover:to-teal-500 transition-all font-semibold w-full block text-center">
                  Subscribe Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ReachFood */}
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
              Revolutionary technology meets sustainable innovation to deliver nutrition wherever you need it most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">5-Minute Hot Meals</h3>
              <p className="text-slate-600">
                Revolutionary self-heating technology delivers hot, nutritious meals anywhere without cooking equipment
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
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Sustainable Innovation</h3>
              <p className="text-slate-600">
                Our packaging transforms into plantable seeds, creating a truly circular, sustainable food system
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
              <p className="text-slate-600">
                MENA-inspired flavors with Halal certification and accessibility features for everyone
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
              Ready to Revolutionize Your Meals?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands who've discovered the future of nutrition. Hot, sustainable, culturally authentic meals - anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all">
                Order Individual Meals
              </Link>
              <Link to="/booking" className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-lg hover:bg-slate-100 transition-colors">
                Start Subscription
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 