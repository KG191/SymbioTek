import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'bloom-menu'
import { cardHover } from '../../utils/animations'

export default function AppCard({ app }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: app.name,
        text: app.description,
        url: app.appStoreUrl
      }).catch(err => console.log('Share failed:', err))
    } else {
      navigator.clipboard.writeText(app.appStoreUrl)
      alert('App Store link copied to clipboard!')
    }
  }

  return (
    <motion.article
      className="app card"
      whileHover={cardHover}
    >
      <div className="app__top">
        <img
          src={app.icon}
          alt={`${app.name} icon`}
          className="app__icon"
        />
        <div>
          <h3>{app.name}{app.badge && <span className="app__badge">{app.badge}</span>}</h3>
          <p className="muted">{app.tagline}</p>
        </div>

        {/* App Store Badge */}
        {app.appStoreUrl && (
          <a href={app.appStoreUrl} target="_blank" rel="noreferrer">
            <img
              src="/assets/app-store-badge.svg"
              alt="Download on the App Store"
              className="app-store-badge"
            />
          </a>
        )}
      </div>

      <p className="text">{app.description}</p>

      {/* More details button - bottom left */}
      <div className="app__details-row">
        {app.fullDescription && (
          <Link to={`/app/${app.id}`} className="app__details-btn">
            More details
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 2.5L8 6L4.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
        {app.id === 'safety-signage-audit' && (
          <Link to="/app/safety-signage-audit-trial" className="app__trial-btn">
            Trial page
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 2.5L8 6L4.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* bloom-menu for quick actions */}
      {app.appStoreUrl && (
        <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
          <Menu.Root direction="bottom" anchor="end">
            <Menu.Container
              buttonSize={32}
              menuWidth={160}
              menuRadius={12}
              style={{
                '--bloom-bg': 'rgba(14, 22, 40, 0.95)',
                '--bloom-border': 'rgba(255, 255, 255, 0.12)'
              }}
            >
              <Menu.Trigger>
                <button
                  className="three-dot-menu"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: 'var(--muted)',
                    padding: '4px 8px'
                  }}
                  aria-label="More options"
                >
                  &#x22EF;
                </button>
              </Menu.Trigger>
              <Menu.Content className="bloom-menu-content">
                <Menu.Item onSelect={() => window.open(app.appStoreUrl, '_blank')}>
                  Visit App Store
                </Menu.Item>
                <Menu.Item onSelect={handleShare}>
                  Share
                </Menu.Item>
              </Menu.Content>
            </Menu.Container>
          </Menu.Root>
        </div>
      )}
    </motion.article>
  )
}
