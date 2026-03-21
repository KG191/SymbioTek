import { motion } from 'framer-motion'
import { fadeInUp, scaleIn, staggerContainer } from '../../utils/animations'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        {/* Hero Copy */}
        <motion.div
          className="hero__copy"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>
            Symbiosis of Intelligence and Trust
          </motion.h1>

          <motion.p className="lead" variants={fadeInUp}>
            Technology should be symbiotic &mdash; with infrastructure, with people, and with the future.
            SymbioTeK creates thoughtful digital experiences designed to improve lives.
          </motion.p>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          className="hero__card"
          initial={scaleIn.initial}
          animate={scaleIn.animate}
          transition={{ ...scaleIn.transition, delay: 0.3 }}
          role="img"
          aria-label="SymbioTeK brand"
        >
          <div className="glow"></div>
          <div className="hero__logo">
            <img
              src="/assets/logo.png"
              alt="SymbioTeK - Engineering with Intelligence"
              className="hero__logo-img"
            />
          </div>
          <div className="hero__pill">Inclusive &bull; Private-first &bull; Purpose-led</div>
        </motion.div>
      </div>
    </section>
  )
}
