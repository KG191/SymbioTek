import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { apps } from './Apps'

// Parse fullDescription into sections based on UPPERCASE HEADERS
function parseDescriptionSections(fullDescription) {
  if (!fullDescription) return []

  const lines = fullDescription.split('\n')
  const sections = []
  let currentSection = null
  let introContent = []

  for (const line of lines) {
    // Check if line is an uppercase header (contains mostly uppercase letters and common chars)
    const isHeader = /^[A-Z][A-Z\s&()0-9\-:]+$/.test(line.trim()) && line.trim().length > 2

    if (isHeader) {
      // Save previous section
      if (currentSection) {
        sections.push(currentSection)
      } else if (introContent.length > 0) {
        // Save intro content as first section
        sections.push({
          title: null,
          content: introContent.join('\n').trim()
        })
      }

      // Start new section
      currentSection = {
        title: line.trim(),
        content: ''
      }
    } else if (currentSection) {
      currentSection.content += line + '\n'
    } else {
      introContent.push(line)
    }
  }

  // Don't forget the last section
  if (currentSection) {
    currentSection.content = currentSection.content.trim()
    sections.push(currentSection)
  } else if (introContent.length > 0 && sections.length === 0) {
    sections.push({
      title: null,
      content: introContent.join('\n').trim()
    })
  }

  return sections
}

// Format content with proper bullet styling
function formatContent(content) {
  return content.split('\n').map((line, idx) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('•') || trimmed.startsWith('→')) {
      return (
        <div key={idx} className="detail-section__bullet">
          <span className="detail-section__bullet-icon">
            {trimmed.startsWith('→') ? '→' : '•'}
          </span>
          <span>{trimmed.slice(1).trim()}</span>
        </div>
      )
    }
    if (trimmed === '') return <div key={idx} className="detail-section__spacer" />
    return <p key={idx} className="detail-section__text">{trimmed}</p>
  })
}

export default function AppDetailPage() {
  const { appId } = useParams()
  const app = apps.find(a => a.id === appId)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [appId])

  if (!app) {
    return (
      <div className="detail-page">
        <div className="container">
          <div className="detail-page__header">
            <Link to="/" className="detail-page__home-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </Link>
          </div>
          <h1>App not found</h1>
        </div>
      </div>
    )
  }

  const sections = parseDescriptionSections(app.fullDescription)

  return (
    <div className="detail-page">
      {/* Hero Banner */}
      <div className="detail-page__hero">
        <div className="detail-page__hero-glow" />
        <div className="container">
          <motion.div
            className="detail-page__header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="detail-page__home-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </Link>
          </motion.div>

          <motion.div
            className="detail-page__app-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={app.icon}
              alt={`${app.name} icon`}
              className="detail-page__icon"
            />
            <div>
              <h1 className="detail-page__title">{app.name}</h1>
              <p className="detail-page__tagline">{app.tagline}</p>
            </div>
          </motion.div>

          <motion.div
            className="detail-page__actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="detail-page__app-store-btn"
            >
              <img
                src="/assets/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Spacer for fixed hero */}
      <div className="detail-page__hero-spacer" />

      {/* Section Cards */}
      <div className="container">
        <div className="detail-page__sections">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="detail-section card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {section.title && (
                <h2 className="detail-section__title">{section.title}</h2>
              )}
              <div className="detail-section__content">
                {formatContent(section.content)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screenshots Placeholder */}
        <motion.div
          className="detail-page__screenshots"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="detail-page__screenshots-title">Screenshots</h2>
          <div className="detail-page__screenshots-placeholder">
            <p>Coming soon</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="detail-page__bottom-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="detail-page__download-btn"
          >
            <img
              src="/assets/app-store-badge.svg"
              alt="Download on the App Store"
            />
            <span>Download {app.name}</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
