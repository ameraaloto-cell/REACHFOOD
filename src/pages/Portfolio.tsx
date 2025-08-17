import { motion } from 'framer-motion'
import { 
  Zap, 
  Leaf, 
  Globe, 
  Thermometer, 
  Atom, 
  Recycle, 
  Lightbulb, 
  Shield, 
  Clock, 
  Beaker
} from 'lucide-react'

const Portfolio = () => {
  const innovations = [
    {
      id: 1,
      title: 'Self-Heating Technology',
      category: 'Core Innovation',
      description: 'Revolutionary calcium oxide reaction system that heats meals to 65°C in exactly 5 minutes without external power',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      details: ['Calcium oxide reaction chamber', 'Precisely controlled heating', 'Safe food-grade materials', 'No batteries required']
    },
    {
      id: 2,
      title: 'Plantable Packaging',
      category: 'Sustainability',
      description: 'Biodegradable packaging embedded with native plant seeds that transforms waste into new life',
      icon: Leaf,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      details: ['Native wildflower seeds', 'Biodegradable materials', 'Zero waste lifecycle', 'Soil enrichment']
    },
    {
      id: 3,
      title: 'Cultural Recipe Engine',
      category: 'Culinary Innovation',
      description: 'AI-powered system that preserves authentic MENA flavors while optimizing for nutrition and shelf-life',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      details: ['Traditional recipe analysis', 'Nutritional optimization', 'Flavor preservation', 'Cultural authenticity']
    },
    {
      id: 4,
      title: 'Temperature Control System',
      category: 'Safety Technology',
      description: 'Advanced thermal regulation ensures optimal heating temperature without risk of burns or overcooking',
      icon: Thermometer,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      details: ['Thermal regulation', 'Burn prevention', 'Optimal food temperature', 'Safety mechanisms']
    },
    {
      id: 5,
      title: 'Accessibility Features',
      category: 'Inclusive Design',
      description: 'Braille labeling, audio scanning, and tactile indicators make our meals accessible to everyone',
      icon: Shield,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      details: ['Braille labeling', 'Audio QR codes', 'Tactile indicators', 'Universal design']
    },
    {
      id: 6,
      title: 'Preservation Science',
      category: 'Food Technology',
      description: 'Advanced preservation techniques maintain nutritional value and authentic flavors for extended shelf life',
      icon: Beaker,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      details: ['Nutrient preservation', 'Natural stabilizers', 'Flavor compounds', 'Extended shelf life']
    }
  ]

  const researchAreas = [
    {
      title: 'Molecular Gastronomy',
      description: 'Advanced food science techniques to enhance flavor while maintaining nutritional integrity',
      icon: Atom,
      color: 'text-cyan-400'
    },
    {
      title: 'Sustainable Materials',
      description: 'Research into biodegradable packaging materials that support plant growth',
      icon: Recycle,
      color: 'text-green-400'
    },
    {
      title: 'Thermal Engineering',
      description: 'Optimization of heat transfer systems for consistent, safe meal preparation',
      icon: Lightbulb,
      color: 'text-yellow-400'
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
              <Lightbulb className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                Revolutionary Food Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Innovation Lab</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge technology and sustainable innovations that power ReachFood's revolutionary meal system. 
              From self-heating mechanisms to plantable packaging, we're reimagining what's possible in food technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Core Innovations</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The groundbreaking technologies that make ReachFood's vision a reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon
              return (
                <motion.div
                  key={innovation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-teal-300 rounded-xl p-6 shadow-lg hover:shadow-xl group hover:scale-105 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 mb-4">
                      <IconComponent className={`w-8 h-8 ${innovation.color}`} />
                    </div>
                    <div className="absolute top-2 right-2 bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {innovation.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{innovation.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{innovation.description}</p>
                  
                  <div className="space-y-2">
                    {innovation.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Research & Development</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Ongoing research initiatives that continue to push the boundaries of food technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6 text-center hover:bg-slate-800/70 hover:border-teal-500/50 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent className={`w-16 h-16 ${area.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-teal-100 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The step-by-step process that transforms our innovative technology into a hot, delicious meal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Activate',
                description: 'Press the designated heating spot on the package',
                icon: Zap,
                color: 'text-orange-400'
              },
              {
                step: '02',
                title: 'React',
                description: 'Calcium oxide mixes with water to generate heat',
                icon: Beaker,
                color: 'text-blue-400'
              },
              {
                step: '03',
                title: 'Heat',
                description: 'Meal reaches optimal 65°C temperature in 5 minutes',
                icon: Thermometer,
                color: 'text-red-400'
              },
              {
                step: '04',
                title: 'Enjoy',
                description: 'Hot, nutritious meal ready to eat anywhere',
                icon: Clock,
                color: 'text-green-400'
              }
            ].map((process, index) => {
              const IconComponent = process.icon
              return (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-10 h-10 ${process.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 