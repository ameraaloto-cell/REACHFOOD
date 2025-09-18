import { motion } from 'framer-motion'
import { Lightbulb, Heart, Leaf, Globe } from 'lucide-react'

const About = () => {
  const foundingValues = [
    {
      icon: Lightbulb,
      title: 'Innovation based research',
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
      name: 'Amera Otoum',
      role: 'CEO & Packaging CPO',
      background: 'Researcher in Economics and Environmental Psychology. Expert working in emergencies and empowering vulnerable communities.',
      expertise: 'MSc: Economic and Environmental Resources, BS: Agricultural Engineering',
      email: 'Ameraaloto@gmail.com',
      phone: '+962 792977610',
      image: '/images/Amera Otoum.jpg'
    },
    {
      name: 'Aljawharah Alsubaie',
      role: 'CPO-Food Advisor',
      background: 'Researcher in Therapeutic Effectiveness. Filed Patent in 2014, Patent in innovative candy for dental care. Hospital training in NHS hospitals.',
      expertise: 'PhD: Doctor of Pharmacy, MS: Clinical pharmacy as a postgraduate',
      email: 'jalkhuzem@gmail.com',
      phone: '+447508186988',
      image: '/images/Aljawharah Alsubaie.jpg'
    },
    {
      name: 'Wadia Safia',
      role: 'Finance Company Advisor',
      background: 'Expert in Finance / INGOs & Private sector. Certified Finance Manager.',
      expertise: 'BSc: Accounting',
      email: 'wadiasafieh@yahoo.com',
      phone: '00962795657793',
      image: '/images/Wadia Safia.jpg'
    },
    {
      name: 'Dr. Ali Ali Redha',
      role: 'Food R&D part time Advisor',
      background: 'Researcher in Food Bioactives',
      expertise: 'PhD: Food, Nutrition & Health, MSc: Analytical Chemistry, BSc: Chemistry',
      email: 'ali96chemx@gmail.com',
      phone: '+447469772877',
      image: '/images/Ali Ali Redha.jpg'
    },
    {
      name: 'Dr. Mahmoud Alkhateib',
      role: 'Food For Emergency Company Advisor',
      background: 'Served as QRC Consultant Dietitian in Somalia (2011) and led nutrition efforts in multiple disaster management camps (2012–2018). Participated in key regional meetings and courses in Amman and Doha, including leading the Yemen malnutrition assessment mission (2012) and delivering expert presentations (2016–2018).',
      expertise: 'Emergency Nutrition, Disaster Management, Malnutrition Assessment',
      email: 'mahmoudalkhateib@hotmail.com',
      phone: '+962782307141',
      image: '/images/Mahmoud Alkhatib.jpg'
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Research Collaboration',
      description: 'Launched collaboration with Women\'s Research Group and ReashSci'
    },
    {
      year: '2024',
      title: 'Award Recognition',
      description: 'Won Best Research Poster Award (Food Security & Health Recovery) with ReashSci'
    },
    {
      year: '2025',
      title: 'Innovation Development',
      description: 'Developed eco-friendly packaging and 12+ health recovery food recipes'
    },
    {
      year: '2025',
      title: 'Research Publication',
      description: 'Published research on unique recipes & sustainable agriculture for harsh environments'
    },
    {
      year: '2026–2027',
      title: 'Global Events',
      description: 'Served at major global events including Hajj, Umrah, and the World Cup, providing sustainable and culturally authentic meals'
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
      unit: 'Plantable and Biodegradable',
      description: 'Packaging transforms into wildflowers and using as hypotonic Agriculture system'
    },
    {
      number: '15+',
      unit: 'Countries',
      description: 'Emergency relief deployments'
    },
    {
      number: '+1M',
      unit: 'Meals',
      description: 'Serving professionals and families with busy lifestyles'
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D
              <span className="block text-teal-400">Flavors of Innovation</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-8">
              Team Work
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Founded on the belief that nutrition should never be limited by circumstance, 
              ReachFood combines cutting-edge food science with sustainable innovation to deliver 
              hot, nutritious meals anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-700">
                <p>
                  Our journey began at ReachSci — the place where it all started. There, we launched an intervention in Madagascar, a country struggling with famine, food insecurity, and widespread vitamin A deficiency. ReachSci brought our team together to take on this urgent challenge.
                </p>
                <p>
                  It was there we learned how to transform research into real innovation and that experience inspired us to go even further. We developed complete, nutritious meals using local crops, designed to nourish communities while supporting local agriculture.
                </p>
                <p>
                  That's how ReachFood was born: food that not only feeds, but heals, sustains, and grows again.
                </p>
                <p>
                  A heartfelt thanks to ReachSci, and special credit to Dr. Mohammed, the President of ReachSci and our supervisor, for his guidance and support on this journey.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/gg.avif" 
                alt="ReachFood founders in emergency relief setting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Values */}
      <section className="py-20 relative bg-white">
        {/* Background Image */}
        <img 
          src="/images/hero5a.jpg"
          alt="ReachFood difference background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Founding Values
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              These core principles guide every decision we make and every innovation we pursue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundingValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                  <value.icon className={`w-8 h-8 text-teal-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-teal-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experts united by a shared vision of making nutrition accessible to everyone, everywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 mb-3 text-sm">{member.background}</p>
                  <p className="text-slate-500 text-sm mb-4">{member.expertise}</p>
                  {(member.email || member.phone) && (
                    <div className="border-t pt-4">
                      {member.email && (
                        <p className="text-xs text-slate-500 mb-1">
                          <span className="font-medium">Email:</span> {member.email}
                        </p>
                      )}
                      {member.phone && (
                        <p className="text-xs text-slate-500">
                          <span className="font-medium">Tel:</span> {member.phone}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to global impact - the milestones that shaped ReachFood
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-teal-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-br from-slate-900 via-orange-600 to-slate-900 border border-orange-400 rounded-lg p-6 shadow-lg">
                    <div className="text-2xl font-bold text-orange-200 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-orange-100">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Numbers that represent lives touched and communities empowered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.unit}
                </div>
                <div className="text-slate-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About