import Section from '../common/Section'
import AppCard from '../Apps/AppCard'

export const workApps = [
  {
    id: 'safety-signage-audit',
    name: 'Safety Signage Audit',
    badge: 'Pending Patent',
    tagline: 'Field auditing for AS 1319-1994 compliance.',
    description: 'A mobile-first web app for field auditing safety signage compliance with Australian Standard AS 1319-1994. AI Detection and reporting of signage compliance.',
    fullDescription: `Safety Signage Audit is a mobile-first web application designed for field auditing safety signage compliance against AS 1319-1994 (Australian Standard for Safety Signs in the Occupational Environment).

FIELD AUDITING
Conduct on-site safety signage audits with your mobile device. Capture context and closeup photos of each sign, with automatic GPS location tracking for every finding.

AI-POWERED DETECTION
Integrates the best AI vision detection for high-accuracy sign detection and classification. Fine-tuned ML models help identify sign types and assess compliance against the standard.

COMPLIANCE ASSESSMENT
Comprehensive compliance checklist covering:
• Color and shape validation against AS 1319-1994
• Design specification checks
• Installation and condition assessment
• Sign relevance evaluation
• Coverage of all sign categories: Prohibition, Mandatory, Warning, DANGER, Emergency Info, and Fire

REPORTING
Generate comprehensive gap-analysis reports from your audit findings. Export data as CSV for further analysis and record-keeping.

OFFLINE-FIRST DESIGN
All data is stored locally on your device. No data collection or transmission — operate confidently in areas with limited connectivity.

AS 1319-1994 REFERENCE
Built-in quick reference guide for the Australian Standard, so you always have the compliance requirements at your fingertips during field audits.`,
    icon: '/assets/safety-signage-icon.png',
    videoUrl: '/assets/safety-signage/safety-signage-video.mp4',
    webUrl: 'https://mysafesigns.symbio-tek.com'
  },
  {
    id: 'safety-signage-audit-trial',
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
    icon: '/assets/safety-signage-icon.png',
    webUrl: 'https://mysafesigns.symbio-tek.com',
    hidden: true
  }
]

export default function WorkApps() {
  return (
    <Section id="work-apps">
      <div className="section__head">
        <h2>Work-related apps</h2>
        <p className="muted">Professional tools built for workplace productivity and compliance.</p>
      </div>

      <div className="apps">
        {workApps.filter(app => !app.hidden).map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </Section>
  )
}
