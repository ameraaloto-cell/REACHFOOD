import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Globe, Users, Building, Lightbulb } from 'lucide-react'

const Contact = () => {
  const contactTypes = [
    {
      title: 'General Inquiries',
      icon: Mail,
      email: 'info@reachfood.com',
      description: 'Questions about our products, technology, or company',
      color: 'text-teal-400'
    },
    {
      title: 'Partnership Opportunities',
      icon: Users,
      email: 'partnerships@reachfood.com',
      description: 'Emergency organizations, corporate wellness, distribution partnerships',
      color: 'text-blue-400'
    },
    {
      title: 'Technology & Innovation',
      icon: Lightbulb,
      email: 'tech@reachfood.com',
      description: 'Technical questions, R&D collaborations, innovation discussions',
      color: 'text-orange-400'
    },
    {
      title: 'Press & Media',
      icon: Globe,
      email: 'media@reachfood.com',
      description: 'Media inquiries, press releases, interview requests',
      color: 'text-purple-400'
    }
  ]

  const offices = [
    {
      location: 'MENA Operations Center',
      address: 'Dubai Technology Park, UAE',
      country: 'United Arab Emirates',
      focus: 'Cultural Cuisine & Regional Partnerships'
    },
    {
      location: 'Jordan Office',
      address: 'Amman, Jordan',
      country: 'Jordan',
      focus: 'Research & Development Hub'
    },
    {
      location: 'KSA Office',
      address: 'Riyadh, Saudi Arabia',
      country: 'Saudi Arabia',
      focus: 'Regional Distribution & Partnerships'
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
                Connect With ReachFood
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Whether you're interested in partnerships, have questions about our technology, 
              or want to bring ReachFood to your organization, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Choose the best way to reach us based on your specific needs and interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactTypes.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.div
                  key={contact.title}
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
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 mb-4"
                  >
                    <IconComponent className={`w-8 h-8 ${contact.color}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{contact.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{contact.description}</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                  >
                    {contact.email}
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-100 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-teal-100 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">Organization (Optional)</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                    placeholder="Your organization or company"
                  />
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">Inquiry Type</label>
                  <select className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm">
                    <option value="">Select inquiry type</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="emergency">Emergency Relief Programs</option>
                    <option value="corporate">Corporate Wellness</option>
                    <option value="technology">Technology Questions</option>
                    <option value="media">Media/Press Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm resize-none"
                    placeholder="Tell us about your interest in ReachFood..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Global Presence</h2>
                <p className="text-teal-100 mb-8 leading-relaxed">
                  ReachFood operates globally with strategic locations that support our mission 
                  of making nutrition accessible everywhere. From technology development to 
                  cultural cuisine expertise and emergency response.
                </p>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={office.location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{office.location}</h3>
                      <p className="text-teal-100 text-sm mb-1">{office.address}</p>
                      <p className="text-teal-300 text-sm mb-2">{office.country}</p>
                      <p className="text-slate-300 text-sm">{office.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Response Times</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-100">General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-teal-100">Partnership opportunities: 2-5 business days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-orange-400" />
                    <span className="text-teal-100">Emergency relief: Priority response</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-600 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-6">
              Ready to Transform Nutrition Access?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join organizations worldwide who are using ReachFood to provide reliable, 
              hot nutrition in any environment, anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Products
              </motion.a>
              <motion.a
                href="/about"
                className="border-2 border-orange-400 text-orange-200 font-semibold py-4 px-8 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Our Mission
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact