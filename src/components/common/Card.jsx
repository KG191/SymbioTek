import { motion } from 'framer-motion'
import { cardHover } from '../../utils/animations'

export default function Card({ children, className = '', animate = true, ...props }) {
  const Component = animate ? motion.div : 'div'

  return (
    <Component
      className={`card ${className}`}
      whileHover={animate ? cardHover : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
