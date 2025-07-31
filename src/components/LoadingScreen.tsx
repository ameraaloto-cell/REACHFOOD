import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { Scissors, Award } from 'lucide-react'

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('Initializing...')

  useEffect(() => {
    const texts = [
      'Initializing...',
      'Loading premium experience...',
      'Preparing luxury interface...',
      'Setting up Germany\'s Best Barber 2016...',
      'Ready!'
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return newProgress
      })

      if (currentIndex < texts.length - 1) {
        setCurrentText(texts[currentIndex])
        currentIndex++
      }
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    gsap.to('.scissors-icon', {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: 'none'
    })
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-900 flex items-center justify-center"
      >
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="mb-8"
          >
            <div className="relative">
              <Scissors className="scissors-icon w-16 h-16 text-primary-400 mx-auto mb-4" />
              <Award className="w-8 h-8 text-primary-400 absolute -top-2 -right-2" />
            </div>
            <h1 className="text-4xl font-serif font-bold gradient-text">
              AUX THE BARBER
            </h1>
            <p className="text-primary-400 font-semibold mt-2">
              Germany's Best Barber 2016
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto mb-6">
            <div className="bg-dark-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-gray-400 text-lg"
          >
            {currentText}
          </motion.p>

          {/* Progress Percentage */}
          <motion.p
            className="text-primary-400 font-bold text-2xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen 