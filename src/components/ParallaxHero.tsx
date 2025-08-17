import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Leaf, Flame, Sparkles } from 'lucide-react'

const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900" />
        {/* Dynamic Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-900/50"
          style={{ opacity }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Heat Waves */}
        <motion.div
          className="absolute top-20 left-20 text-teal-400/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Zap className="w-12 h-12" />
        </motion.div>

        {/* Floating Leaf */}
        <motion.div
          className="absolute top-40 right-20 text-green-400/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Leaf className="w-10 h-10" />
        </motion.div>

        {/* Floating Sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-teal-400/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Flame className="w-8 h-8 text-teal-400 mr-3" />
            <span className="text-teal-400 font-semibold text-lg">
              Revolutionary Food Technology
            </span>
            <span className="text-2xl ml-2">🚀</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Reach
            <motion.span 
              className="block text-3xl md:text-4xl text-teal-400 mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              FOOD
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Revolutionizing nutrition with self-heating meals that activate in 5 minutes. 
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
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Meals
            </motion.a>
            <motion.a
              href="/portfolio"
              className="border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See Innovation
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ParallaxHero 