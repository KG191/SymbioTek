import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '../../utils/animations'

export default function Section({ children, id, className = '', animate = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (!animate) {
    return (
      <section id={id} className={`section ${className}`}>
        <div className="container">{children}</div>
      </section>
    )
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section ${className}`}
      initial={fadeInUp.initial}
      animate={isInView ? fadeInUp.animate : fadeInUp.initial}
      transition={fadeInUp.transition}
    >
      <div className="container">{children}</div>
    </motion.section>
  )
}
