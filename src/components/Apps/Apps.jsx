import Section from '../common/Section'
import AppCard from './AppCard'

const apps = [
  {
    name: 'Kidz Magical Story Teller',
    tagline: 'Voice-to-story AI for magical illustrated storytelling.',
    description: 'Transform voice recordings into illustrated stories with AI. Supports 40+ languages and multiple animation styles including Disney/Pixar, Anime, and Bollywood aesthetics. Privacy-focused with no ads and no data collection.',
    icon: '/assets/kidz-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/kidz-magical-story-teller/id6749134857'
  },
  {
    name: 'Forava',
    tagline: 'AI-powered cultural digital gifting.',
    description: 'Create personalised digital gifts across 12+ cultural celebrations including Diwali, Chinese New Year, Christmas, and more. Features Gratitude links to your favourite gift cards.',
    icon: '/assets/forava-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/forava/id6755642976'
  },
  {
    name: 'OptiSense',
    tagline: 'AI health and recovery coach.',
    description: 'Your personal AI-powered health coach using Apple HealthKit. Generates a daily Readiness and Stress Score, includes AI Food Scanner for nutrition tracking, and Chat with an AI coach supported by 6 specialists. Compete with friends and family for streaks and rewards. Health data stays on device.',
    icon: '/assets/optisense-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/optisense/id6757113295'
  },
  {
    name: 'Wendy Performance Coach',
    tagline: 'AI coaching for clarity and performance under pressure.',
    description: 'Think through challenges, make better decisions, and perform under pressure. Voice conversations for decision clarity, stress management, conflict preparation, and leadership presence. Conversations stay on your device.',
    icon: '/assets/wendy-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/wendy-performance-coach/id6755900133'
  }
]

export default function Apps() {
  return (
    <Section id="apps">
      <div className="section__head">
        <h2>Apps</h2>
        <p className="muted">iOS apps built and successfully launched under the SymbioTeK vision.</p>
      </div>

      <div className="apps">
        {apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </Section>
  )
}
