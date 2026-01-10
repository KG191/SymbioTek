import { motion } from 'framer-motion'
import { buttonHover } from '../../utils/animations'

export default function Button({ children, className = '', variant = 'primary', href, ...props }) {
  const buttonClass = `btn ${variant === 'primary' ? 'btn--primary' : variant === 'ghost' ? 'btn--ghost' : ''} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={buttonHover}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={buttonClass}
      whileHover={buttonHover}
      {...props}
    >
      {children}
    </motion.button>
  )
}
