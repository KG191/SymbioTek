import Section from '../common/Section'
import AppCard from '../Apps/AppCard'

export const workApps = [
  {
    id: 'safety-signage-audit',
    name: 'Safety Signage Audit',
    badge: 'Patent Pending',
    tagline: 'Field auditing for AS 1319-1994 compliance.',
    description: 'A mobile-first web app for field auditing safety signage compliance with Australian Standard AS 1319-1994. AI Detection and reporting of signage compliance.',
    fullDescription: `Safety Signage Audit is a mobile-first web application designed for field auditing safety signage compliance against AS 1319-1994 (Australian Standard for Safety Signs in the Occupational Environment).

FIELD AUDITING
Conduct on-site safety signage audits with your mobile device. Capture context and closeup photos of each sign, with automatic GPS location tracking for every finding.

AI-POWERED DETECTION
Integrates Claude Vision AI for high-accuracy sign detection and classification. Fine-tuned ML models help identify sign types and assess compliance against the standard.

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
    videoUrl: '/assets/safety-signage/safety-signage-video.mp4'
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
        {workApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </Section>
  )
}
