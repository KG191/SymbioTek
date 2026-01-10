import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '../common/Section'
import Card from '../common/Card'
import { staggerContainer, fadeInUp } from '../../utils/animations'

const missionItems = [
  {
    title: 'Ground Truth',
    description: 'Fuse truth with intelligent systems.'
  },
  {
    title: 'Domain Expertise',
    description: 'Build tools that respect domain expertise.'
  },
  {
    title: 'Humane AI',
    description: 'Create AI that is useful, grounded, and humane.'
  },
  {
    title: 'Scale with Nuance',
    description: 'Solve real problems at scale, without losing nuance.'
  }
]

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section id="mission" animate={false}>
      <h2>Mission</h2>
      <p className="tagline">Engineering with Intelligence</p>
      <p className="text">
        Build products that feel personal, respectful, and empowering &mdash; helping people learn, celebrate,
        recover, perform, and connect.
      </p>

      <motion.div
        ref={ref}
        className="grid4"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerContainer}
      >
        {missionItems.map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
