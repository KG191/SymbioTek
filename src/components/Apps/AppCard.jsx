import { motion } from 'framer-motion'
import { Menu } from 'bloom-menu'
import { cardHover } from '../../utils/animations'

export default function AppCard({ app }) {
  const handleLearnMore = () => {
    // Could navigate to a dedicated page or show a modal
    console.log('Learn more about', app.name)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: app.name,
        text: app.description,
        url: app.appStoreUrl
      }).catch(err => console.log('Share failed:', err))
    } else {
      // Fallback: copy to clipboard
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
          <h3>{app.name}</h3>
          <p className="muted">{app.tagline}</p>
        </div>

        {/* App Store Badge */}
        <a href={app.appStoreUrl} target="_blank" rel="noreferrer">
          <img
            src="/assets/app-store-badge.svg"
            alt="Download on the App Store"
            className="app-store-badge"
          />
        </a>
      </div>

      <p className="text">{app.description}</p>

      {/* bloom-menu for quick actions */}
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
                ⋯
              </button>
            </Menu.Trigger>
            <Menu.Content className="bloom-menu-content">
              <Menu.Item onSelect={handleLearnMore}>
                Learn More
              </Menu.Item>
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
    </motion.article>
  )
}
