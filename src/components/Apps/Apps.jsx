import Section from '../common/Section'
import AppCard from './AppCard'

export const apps = [
  {
    id: 'optisense',
    name: 'OptiSense',
    tagline: 'AI health and recovery coach.',
    description: 'Your personal AI-powered health coach using Apple HealthKit. Generates a daily Readiness and Stress Score, includes AI Food Scanner for nutrition tracking, and Chat with an AI coach supported by 6 specialists. Compete with friends and family for streaks and rewards. Health data stays on device.',
    fullDescription: `OptiSense is your personal AI-powered health and recovery coach. Using data from Apple Watch and HealthKit, OptiSense calculates your daily Readiness Score—a comprehensive measure of how prepared your body is for exercise, stress, and peak performance.

DAILY READINESS SCORE
Wake up knowing exactly how your body feels. Our intelligent algorithm analyzes your sleep, heart rate variability (HRV), resting heart rate, and activity levels to deliver a personalized readiness score from 0-100. Know when to push hard and when to recover.

AI FOOD SCANNER (Premium)
Simply photograph your meals and let our AI instantly analyze calories, protein, carbs, and fats. No more tedious manual logging—just snap and track. The easiest way to stay on top of your nutrition goals.

6 SPECIALIST AI COACHES
Get expert guidance from our team of AI specialists:
• Recovery Specialist – Optimize rest and prevent injuries
• Nutrition Expert – Master meal timing and hydration
• Sleep Scientist – Improve sleep quality
• Mental Wellness Coach – Manage stress and build resilience
• Exercise Physiologist – Plan effective workouts
• General Health Coach – Holistic wellness advice

Ask questions in natural language and receive personalized, context-aware coaching based on YOUR health data.

COMPREHENSIVE HEALTH TRACKING
• Sleep duration and quality analysis
• Heart Rate Variability (HRV) trends
• Resting heart rate monitoring
• Active energy and workout tracking
• Stress and mental recovery scores
• Body composition metrics
• Hydration and nutrition logging

SOCIAL & CHALLENGES
Connect with friends and stay motivated together:
• Create wellness challenges (readiness, sleep, activity, mindfulness)
• Compete on leaderboards
• Share achievements and milestones
• React to friend activities
• Build accountability partnerships

GAMIFICATION & HABITS
• Achievement badges (Common to Legendary)
• Multiple streak types (sleep, recovery, workouts, meditation)
• Personal best tracking
• Progress milestones

PERSONALIZED TRAINING PLANS
AI-generated workout programs adapted to your:
• Current readiness level
• Fitness goals (endurance, strength, weight loss, race prep)
• Recovery status
• Training history

PRIVACY-FIRST DESIGN
Your health data stays on YOUR device. We only send anonymized summaries to our AI—never raw health data. You control what you share with friends. No hidden tracking.

SUBSCRIPTION OPTIONS
• Free: Basic readiness score, 5 AI queries/day, friend features
• Premium ($4.99/mo): Full insights, AI food scanner (10/day), 50 AI queries, training plans
• Elite ($9.99/mo): Unlimited everything, priority support, early access to new features

A fraction of the cost of competitors with MORE features and no expensive hardware required.

Download OptiSense today and start your journey to optimized health and peak performance!`,
    icon: '/assets/optisense-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/optisense/id6757113295'
  },
  {
    id: 'forava',
    name: 'Forava',
    tagline: 'AI-powered cultural digital gifting.',
    description: 'Create personalised digital gifts across 12+ cultural celebrations including Diwali, Chinese New Year, Christmas, and more. Features Gratitude links to your favourite gift cards.',
    fullDescription: `Transform Cultural Celebrations with AI-Powered Digital Gifts

Forava brings the world's most beautiful cultural traditions to your fingertips through AI-generated personalised digital gifts.

12+ CULTURAL TRADITIONS SUPPORTED:
• Hindu: Diwali, Raksha Bandhan, Holi
• Chinese: Chinese New Year, Mid-Autumn Festival
• Christian: Christmas, Easter
• Islamic: Eid al-Fitr, Eid al-Adha
• Buddhist: Vesak Day
• Jewish: Hanukkah, Rosh Hashanah
• Universal: Anniversaries

AI-POWERED AUTHENTICITY:
• Advanced AI creates culturally accurate artwork
• Traditional, modern, elegant, spiritual themes
• Culturally appropriate colours, symbols, elements
• Personal messages in multiple languages

FLEXIBLE PRICING:
• Free Tier: 3 generations (watermarked)
• Credit Packs: $9.99-$59.99
• Regeneration and unlock new image: $0.99

Perfect for families maintaining traditions!`,
    icon: '/assets/forava-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/forava/id6755642976'
  },
  {
    id: 'kidz',
    name: 'Kidz Magical Story Teller',
    tagline: 'Bridges cultures, preserves languages, & nurtures the timeless art of creative storytelling.',
    description: 'Transform voice recordings into illustrated stories with AI. Supports 40+ languages and multiple animation styles including Disney/Pixar, Anime, and Bollywood aesthetics. Privacy-focused with no ads and no data collection.',
    fullDescription: `Transform your child's imagination into magical visual stories with AI!

Kidz Magical Story Teller empowers children to become storytellers by simply speaking. Our advanced AI transforms voice recordings into beautiful, illustrated stories in over 40 languages, making storytelling accessible to families worldwide.

MAGICAL FEATURES:
• Voice-to-Story Magic: Record your voice, watch AI create illustrated stories
• 40+ Languages: From English to Mandarin, Arabic to Vietnamese - preserve your heritage
• Cultural Animation Styles: Disney/Pixar, Anime, Bollywood, French & more
• Professional Narration: High-quality AI voices bring stories to life
• Offline Library: Save and replay stories anytime, anywhere
• Family Sharing: Create stories together across generations

GLOBAL IMPACT:
Perfect for multilingual families, language learners, and cultural preservation. Help children maintain connections to their heritage while developing creativity in a digital world.

BENEFITS:
• Develops creative thinking and storytelling skills
• Enhances language learning and pronunciation
• Builds confidence in self-expression
• Preserves family stories and cultural heritage
• Encourages imaginative play without screens

PERFECT FOR:
• Bedtime stories in your native language
• Language learning practice for children
• Preserving grandparents' stories
• Creative play and imagination development
• Cultural education and heritage preservation

PREMIUM EXPERIENCE:
Start with 5 free stories, then unlock unlimited creativity. No ads, no data collection - just pure storytelling magic.

"In our increasingly connected yet digitally distant world, Magical Story Teller bridges cultures, preserves languages, and nurtures the timeless art of storytelling."`,
    icon: '/assets/kidz-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/kidz-magical-story-teller/id6749134857'
  }
]

export default function Apps() {
  return (
    <Section id="apps">
      <div className="section__head">
        <h2>Lifestyle</h2>
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
