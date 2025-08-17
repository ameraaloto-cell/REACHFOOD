import { motion } from 'framer-motion'

const ParallaxHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Display */}
      <img 
        src="/images/bannger.jpg"
        alt="ReachFood hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Glassy Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-teal-900/70 to-slate-900/70 backdrop-blur-sm rounded-2xl -m-8"></div>
        
        {/* Content */}
        <div className="relative z-10 py-8">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-teal-400 font-semibold">
              Revolutionary Food Technology
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Revolutionizing nutrition with self-heating meals that activate in 3-5 minutes. 
          Sustainable, accessible, and culturally authentic food for everyone, everywhere.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.a
            href="/services"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.a>
          <motion.a
            href="/about"
            className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxHero