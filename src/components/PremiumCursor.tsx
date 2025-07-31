import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PremiumCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .btn-primary, .btn-secondary')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full opacity-80" />
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-2 h-2 bg-primary-400 rounded-full opacity-60" />
      </motion.div>

      {/* Cursor Glow */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          mass: 1,
        }}
      >
        <div className="w-10 h-10 bg-primary-400/20 rounded-full blur-sm" />
      </motion.div>
    </>
  )
}

export default PremiumCursor 