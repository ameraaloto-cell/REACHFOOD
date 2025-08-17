import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Mountain, 
  Building, 
  Heart,
  Globe,
  Zap,
  Users,
  Truck,
  Clock,
  Award
} from 'lucide-react'

const Services = () => {
  const serviceCategories = [
    {
      category: 'Emergency Relief Services',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      description: 'Rapid nutrition deployment for disaster zones and crisis situations',
      applications: [
        'Disaster response and relief operations',
        'Refugee camp nutrition programs',
        'Emergency preparedness kits',
        'First responder support'
      ],
      image: '/images/1.jpg',
      stats: { deployments: '15+ countries', response: '24-hour', capacity: '10,000+ meals' }
    },
    {
      category: 'Adventure & Outdoor Services',
      icon: Mountain,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Lightweight nutrition solutions for extreme environments and outdoor activities',
      applications: [
        'Mountain climbing expeditions',
        'Military field operations',
        'Remote research stations',
        'Extended camping trips'
      ],
      image: '/images/2.jpg',
      stats: { altitude: '8,000m tested', weight: '40% lighter', temperature: '-40°C rated' }
    },
    {
      category: 'Corporate Wellness Services',
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Office-friendly nutrition programs for busy professionals and teams',
      applications: [
        '24/7 workplace nutrition',
        'Remote worker meal programs',
        'Conference and event catering',
        'Shift worker nutrition support'
      ],
      image: '/images/3.jpg',
      stats: { companies: '200+ served', productivity: '+25% reported', satisfaction: '98% rating' }
    },
    {
      category: 'Healthcare & Senior Services',
      icon: Heart,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      description: 'Specialized nutrition support for healthcare facilities and senior communities',
      applications: [
        'Hospital patient nutrition',
        'Senior living facilities',
        'Home healthcare support',
        'Therapeutic diet programs'
      ],
      image: '/images/4.jpg',
      stats: { facilities: '150+ partners', compliance: '100% dietary', satisfaction: '96% rating' }
    },
    {
      category: 'Educational Institution Services',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Campus nutrition solutions for students and educational programs',
      applications: [
        'University dining programs',
        'School emergency preparedness',
        'Field study expeditions',
        'International exchange programs'
      ],
      image: '/images/5.jpg',
      stats: { students: '50,000+ served', schools: '75+ institutions', nutrition: '100% balanced' }
    },
    {
      category: 'Global Distribution Services',
      icon: Globe,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      description: 'Worldwide supply chain and distribution network for scalable nutrition access',
      applications: [
        'International aid distribution',
        'Remote location delivery',
        'Bulk institutional supply',
        'Custom packaging solutions'
      ],
      image: '/images/6.jpg',
      stats: { countries: '25+ active', logistics: '48-hour delivery', scale: '1M+ meals/month' }
    }
  ]

  const keyFeatures = [
    {
      icon: Zap,
      title: '3-5 Minute Activation',
      description: 'Revolutionary self-heating technology that works anywhere'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support and emergency response capabilities'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Halal certified, FDA approved, and accessibility compliant'
    },
    {
      icon: Truck,
      title: 'Global Delivery',
      description: 'Worldwide distribution network with rapid deployment'
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
              <Globe className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                Global Nutrition Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Service Categories</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive nutrition solutions tailored to diverse environments and communities. 
              From emergency relief to corporate wellness, we deliver hot, nutritious meals anywhere they're needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Service Solutions</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Specialized nutrition services designed for specific environments, communities, and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 rounded-full ${service.bgColor}`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.category}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Applications:</h4>
                    <ul className="space-y-1">
                      {service.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm text-slate-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-teal-600">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Why Choose R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D Services?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Comprehensive nutrition solutions backed by revolutionary technology and global expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Reliability',
                description: 'Deployed in 25+ countries with 99.9% success rate in critical situations',
                icon: Shield
              },
              {
                title: 'Scalable Solutions',
                description: 'From individual meals to large-scale institutional deployments',
                icon: Zap
              },
              {
                title: 'Global Support',
                description: '24/7 worldwide support network with rapid response capabilities',
                icon: Globe
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
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
              Ready to Deploy Nutrition Solutions?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific requirements and create a custom nutrition solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                Contact Our Team
              </Link>
              <Link
                to="/shop"
                className="border-2 border-teal-400 text-teal-300 font-semibold py-4 px-8 rounded-lg hover:bg-teal-400 hover:text-white transition-all"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services