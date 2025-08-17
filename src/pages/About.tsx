import { motion } from 'framer-motion'
import { Atom, Globe, Lightbulb, Heart, Leaf } from 'lucide-react'

const About = () => {
  const foundingValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering breakthrough food technology that transforms how nutrition is accessed worldwide',
      color: 'text-orange-400'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Creating solutions for emergency relief, adventure, professional life, and family wellness',
      color: 'text-red-400'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Building a circular economy where packaging becomes part of the natural ecosystem',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Ensuring nutrition is accessible to all communities regardless of circumstances or abilities',
      color: 'text-blue-400'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Al-Rahman',
      role: 'CEO & Co-Founder',
      background: 'Former NASA food scientist with 15 years in space nutrition technology',
      expertise: 'Food Science, Space Technology, Product Innovation',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Ahmed Kaseem',
      role: 'CTO & Co-Founder',
      background: 'Chemical engineer specializing in sustainable packaging and reaction chemistry',
      expertise: 'Chemical Engineering, Sustainable Materials, Technology Development',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Dr. Maria Santos',
      role: 'Head of Nutrition',
      background: 'Registered dietitian and food technologist with expertise in emergency nutrition',
      expertise: 'Clinical Nutrition, Food Safety, Cultural Cuisine',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Omar Ibrahim',
      role: 'Head of Sustainability',
      background: 'Environmental scientist focused on circular economy and biodegradable materials',
      expertise: 'Environmental Science, Circular Economy, Biodegradable Packaging',
      image: '/api/placeholder/200/200'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'ReachFood founded with mission to revolutionize emergency nutrition access'
    },
    {
      year: '2021',
      title: 'Technology Breakthrough',
      description: 'Successfully developed safe, reliable self-heating technology using calcium oxide reactions'
    },
    {
      year: '2022',
      title: 'Sustainability Innovation',
      description: 'Created first biodegradable packaging embedded with native wildflower seeds'
    },
    {
      year: '2023',
      title: 'Cultural Partnership',
      description: 'Partnered with MENA culinary experts to ensure authentic flavors and Halal certification'
    },
    {
      year: '2024',
      title: 'Accessibility Integration',
      description: 'Launched Braille labeling and audio scanning features for inclusive access'
    },
    {
      year: '2025',
      title: 'Global Scale',
      description: 'Expanding to serve emergency organizations, outdoor enthusiasts, and corporate wellness programs'
    }
  ]

  const stats = [
    {
      number: '5',
      unit: 'Minutes',
      description: 'Heating time from ambient to 65°C'
    },
    {
      number: '100%',
      unit: 'Biodegradable',
      description: 'Packaging transforms into wildflowers'
    },
    {
      number: '15+',
      unit: 'Countries',
      description: 'Emergency relief deployments'
    },
    {
      number: '1M+',
      unit: 'Meals',
      description: 'Served in critical situations'
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
              <Atom className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                Revolutionizing Nutrition Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About ReachFood</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to ensure that hot, nutritious meals are accessible to everyone, everywhere. 
              Through groundbreaking self-heating technology and sustainable innovation, we're transforming 
              how the world thinks about nutrition access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Our Mission: Nutrition Without Limits
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  ReachFood was born from a simple but powerful realization: access to hot, nutritious food 
                  shouldn't depend on infrastructure, location, or circumstances. Whether you're an aid worker 
                  in a crisis zone, an adventurer on a mountain peak, or a busy professional in the city, 
                  everyone deserves quality nutrition.
                </p>
                <p>
                  Our founders, Dr. Sarah Al-Rahman and Ahmed Kaseem, combined their expertise in space food 
                  technology and sustainable chemistry to create a solution that seemed impossible: meals that 
                  heat themselves safely and completely, with packaging that gives back to the environment.
                </p>
                <p>
                  Today, ReachFood represents more than just innovative technology. We're building a movement 
                  toward inclusive, sustainable nutrition that respects cultural heritage while serving the 
                  most critical needs of our time.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.description}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-slate-600 mb-2">
                      {stat.unit}
                    </div>
                    <div className="text-xs text-slate-500">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Every decision we make is guided by our commitment to innovation, impact, sustainability, and accessibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundingValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
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
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-800/50 mb-4"
                  >
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-teal-100 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team brings together expertise in food science, technology, sustainability, and cultural cuisine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{member.background}</p>
                <div className="text-xs text-slate-500">
                  <strong>Expertise:</strong> {member.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              From breakthrough innovation to global impact - the ReachFood timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6 hover:bg-slate-800/70 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-teal-400 mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{milestone.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Join the Nutrition Revolution
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Whether you're interested in our technology, want to partner with us, or simply share our vision 
              for accessible nutrition, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.a>
              <motion.a
                href="/services"
                className="border-2 border-teal-500 text-teal-600 font-semibold py-4 px-8 rounded-lg hover:bg-teal-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Technology
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About