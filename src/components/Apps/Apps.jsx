import Section from '../common/Section'
import AppCard from './AppCard'

export const apps = [
  {
    id: 'weathernavigator',
    name: 'WeatherNavigator',
    badge: 'Coming Soon',
    comingSoon: true,
    tagline: 'AI weather-safe navigation. Skye sees the storm before you do.',
    description: 'The only navigation app that shows you the weather along your entire route — at the time you\'ll actually be there. Colour-coded routes, predictive storm intercept, and an AI co-pilot named Skye that briefs you before every drive and reroutes you around hazards in real time.',
    fullDescription: `WeatherNavigator is the only navigation app that shows you the weather along your entire route — at the time you'll actually be there.

Google Maps shows traffic. WeatherNavigator shows weather. See exactly what conditions you'll drive through, colour-coded on your route: green for clear, blue for mild, orange for moderate, red for severe.

WEATHER-AWARE NAVIGATION
• Colour-coded route shows weather severity at every point along your drive
• 6 live weather map layers: precipitation, snow, temperature, wind, clouds, pressure
• Live traffic layer with route-specific speed colouring
• Weather-safe alternative routes when hazards are detected
• Automatic rerouting around severe weather with AI explanation
• Multi-stop trip planning with weather at every waypoint
• Weather annotations along your route when zoomed out

SKYE — YOUR AI WEATHER CO-PILOT
• "Take me to Sydney via Coffs Harbour" — fully hands-free voice navigation
• AI weather briefing before every drive: "Clear skies for the first hour, heavy rain near Coffs Harbour in about 3 hours"
• Ask questions while driving: "How long will this rain last?"
• Proactive hazard warnings: Skye explains what's ahead and recommends actions
• Adapts to your driving style — learns your alert preferences over time
• Turn-by-turn voice directions with full road name expansion

DESIGNED FOR DRIVERS
• CarPlay support — full navigation on your car display
• 2D and 3D navigation views with smooth animated arrowhead
• "Hey Skye" wake word for hands-free activation
• Choose your preferred Apple voice for Skye
• Works offline for navigation (weather requires connectivity)

BUILT ON REAL DATA
• Weather forecasts from Apple WeatherKit and Open-Meteo
• Live precipitation radar: NWS NEXRAD (USA) and OpenWeatherMap (global)
• Bureau of Meteorology AWS observation cross-check (Australia)
• Routing powered by Google Maps
• AI powered by Claude (Anthropic) for natural conversation
• Time-aligned forecasts: see what the weather will be when YOU arrive at each point, not what it is now

WHY WEATHERNAVIGATOR?
Every other navigation app shows you a blue line on a map. WeatherNavigator shows you the weather along that line — at the exact time you'll be driving through it. No more checking the weather app separately. No more driving blind into a storm.

Whether it's a 20-minute commute or a 10-hour road trip, WeatherNavigator keeps you informed and safe.

SUBSCRIPTION
WeatherNavigator offers a 7-day free trial with full access to all features. After the trial:
• Monthly: $3.99/month
• Annual: $29.99/year (save 37%)

Payment is charged to your Apple ID account. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Manage subscriptions in Settings > Apple ID > Subscriptions.`,
    icon: '/assets/weathernavigator-icon.png',
    marketingUrl: '/weathernavigator/marketing.html',
    trustSignals: ['Apple WeatherKit', 'CarPlay', 'Skye AI Co-pilot', '7-day free trial'],
    howItWorks: [
      { step: 1, title: 'Plan your drive', description: 'Tell Skye where you\'re going. She briefs you on weather along the entire route — at the time you\'ll actually be there, not now.' },
      { step: 2, title: 'See the weather, not just the road', description: 'Your route is colour-coded for hazards — green clear, orange moderate, red severe. Tap any segment for the forecast at that point.' },
      { step: 3, title: 'Drive with a co-pilot', description: 'Skye warns you minutes before rain reaches you, reroutes around storms, and answers questions hands-free. CarPlay supported.' }
    ],
    faq: [
      { question: 'Where does the weather data come from?', answer: 'Forecasts are from Apple WeatherKit (primary) and Open-Meteo (fallback). Live radar uses NWS NEXRAD in the US and OpenWeatherMap globally. Australian users also get a Bureau of Meteorology AWS observation cross-check on the precipitation layer.' },
      { question: 'Does it work in my country?', answer: 'Forecasts and routing are available globally. Some live-radar layers are region-specific (NEXRAD is US, OpenWeatherMap is global, BoM is Australia).' },
      { question: 'Do I need a subscription?', answer: 'There\'s a 7-day free trial of every feature. After that, Monthly is $3.99/month and Annual is $29.99/year (which works out to $2.50/month). Both unlock the same complete feature set.' },
      { question: 'Does it support CarPlay?', answer: 'Yes — full navigation, alerts, and Skye briefings work on CarPlay displays.' },
      { question: 'When is it launching?', answer: 'WeatherNavigator is in App Store review. Watch this space for the launch date.' }
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/weathernavigator/privacy-policy.html' },
      { label: 'Terms of Use (EULA)', href: '/weathernavigator/terms-of-use.html' }
    ]
  },
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
        <p className="muted">Improve your, and your loved ones, mental and physical wellbeing.</p>
      </div>

      <div className="apps">
        {apps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </Section>
  )
}
