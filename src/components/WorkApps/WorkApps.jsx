import Section from '../common/Section'
import AppCard from '../Apps/AppCard'

export const workApps = [
  {
    id: 'safety-signage-audit',
    name: 'Safety Signage Audit',
    badge: 'Pending Patent',
    tagline: 'Audit safety signage faster with AI-powered compliance analysis.',
    description: 'A mobile-first web app for field auditing safety signage compliance with Australian Standard AS 1319-1994. AI Detection and reporting of signage compliance.',
    heroHeadline: 'Audit Safety Signage Faster and Smarter',
    heroCopyright: '2025',
    heroSubheadline: 'Capture photos on-site, get AI-powered compliance analysis against AS 1319-1994, and generate professional gap-analysis reports — all from your mobile device.',
    trustSignals: ['AS 1319-1994 Compliant', 'AI-Powered Detection', 'Data Stays on Device'],
    fullDescription: `Safety Signage Audit is a mobile-first web application that streamlines compliance auditing against AS 1319-1994 — the Australian Standard for Safety Signs in the Occupational Environment.

CAPTURE & AUDIT ON-SITE
Walk any facility with just your phone. Snap context and close-up photos, and the app automatically tags each finding with GPS coordinates. All audit data stays on your device — nothing is collected or transmitted to external servers.

AI THAT IDENTIFIES COMPLIANCE ISSUES
Stop manually cross-referencing standards. AI vision models detect sign types and flag potential compliance gaps instantly — so you can focus on fixing issues, not finding them.

GENERATE PROFESSIONAL REPORTS IN MINUTES
One tap generates a comprehensive gap-analysis report covering color, shape, placement, and condition against AS 1319-1994. Export as CSV for your records or share with stakeholders. Covers all sign categories: Prohibition, Mandatory, Warning, Danger, Emergency Info, and Fire.

AS 1319-1994 AT YOUR FINGERTIPS
No need to carry the standard on-site. A built-in quick reference covers all sign categories and compliance requirements, so you always have what you need during field audits.`,
    howItWorks: [
      { step: 1, title: 'Capture', description: 'Photograph signs on-site with automatic GPS tagging' },
      { step: 2, title: 'Analyse', description: 'AI evaluates compliance against AS 1319-1994' },
      { step: 3, title: 'Report', description: 'Generate and export gap-analysis reports' }
    ],
    faq: [
      { question: 'What standard does this app audit against?', answer: 'The app audits safety signage compliance against AS 1319-1994, the Australian Standard for Safety Signs in the Occupational Environment.' },
      { question: 'Do I need an internet connection?', answer: 'An internet connection is needed for AI-powered detection and report generation. However, all your audit data is stored locally on your device — nothing is collected or transmitted to external servers.' },
      { question: 'What types of signs does it detect?', answer: 'All categories defined in AS 1319-1994: Prohibition, Mandatory, Warning, Danger, Emergency Information, and Fire signs.' },
      { question: 'How does the AI analysis work?', answer: 'State-of-the-art vision AI models analyse your photos to detect sign types, assess condition, and evaluate compliance against the standard — delivering results in seconds.' },
      { question: 'Can I export my audit data?', answer: 'Yes. Generate comprehensive gap-analysis reports and export your findings as CSV for further analysis, record-keeping, or sharing with stakeholders.' }
    ],
    icon: '/assets/safety-signage-icon.png'
  },
  {
    id: 'wendy',
    name: 'Wendy Performance Coach',
    tagline: 'AI coaching for clarity and performance under pressure.',
    description: 'Think through challenges, make better decisions, and perform under pressure. Voice conversations for decision clarity, stress management, conflict preparation, and leadership presence. Conversations stay on your device.',
    fullDescription: `Inspired by elite executive coaching, Wendy helps professionals think through challenges, make better decisions, and perform under pressure. Whether you're preparing for a tough conversation, navigating a career crossroads, or just need to clear your head, Wendy is here. Meet Wendy — your personal high-performance coach, available whenever you need clarity.

HOW WENDY HELPS

• Decision Clarity — Work through complex choices with structured frameworks
• Stress Management — De-escalate pressure with proven techniques
• Conflict Preparation — Prepare for difficult conversations and negotiations
• Confidence Building — Recover from setbacks and rebuild momentum
• Leadership Presence — Sharpen your communication and executive presence

WHAT MAKES WENDY DIFFERENT

Unlike generic chatbots, Wendy is designed specifically for professional performance:

→ Coaching, Not Therapy — Focused on action and forward movement
→ Contextual Understanding — Remembers your situation and builds on previous conversations
→ Structured Frameworks — Decision scorecards, 24-hour reset plans, and more
→ Voice Conversations — Speak naturally; Wendy listens and responds
→ Complete Privacy — Conversations stay on your device

THE WENDY APPROACH

Wendy combines empathy with directness. She'll validate your feelings, then help you separate emotion from decision. Every conversation ends with concrete next steps — not vague encouragement. The app includes safety detection for self-harm indicators and responds with empathetic, supportive messages encouraging users to talk through their feelings. Wendy is a performance coach, not a therapist, and will respond with care when sensitive topics arise.

PERFECT FOR

• Executives and managers facing high-stakes decisions
• Professionals navigating career transitions
• Anyone preparing for difficult conversations
• Leaders who need a trusted thinking partner

START FREE

Try Wendy with 5 free coaching sessions. If she helps you think clearer, upgrade to Premium for unlimited conversations.

Premium Subscription ($9.99/month):
• Unlimited coaching conversations
• Priority AI responses
• Premium voice options
• Cancel anytime

Your mental clarity is worth investing in. Download Wendy and start your first session today.`,
    icon: '/assets/wendy-icon.png',
    appStoreUrl: 'https://apps.apple.com/au/app/wendy-performance-coach/id6755900133'
  }
]

export default function WorkApps() {
  return (
    <Section id="work-apps">
      <div className="section__head">
        <h2>Professional</h2>
        <p className="muted">Tools built for workplace productivity, compliance, and performance.</p>
      </div>

      <div className="apps">
        {workApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </Section>
  )
}
