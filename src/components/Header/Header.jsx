import { useState } from 'react'
import { Menu } from 'bloom-menu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="SymbioTeK Home">
          <img src="/assets/logo.png" alt="SymbioTeK logo" className="brand__logo" />
          <span className="brand__text">SymbioTeK</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>
            Mission
          </a>
          <a href="#apps" onClick={(e) => { e.preventDefault(); scrollToSection('apps'); }}>
            Apps
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle with bloom-menu */}
        <div className="mobile-menu-wrapper" style={{ display: 'none' }}>
          <Menu.Root direction="bottom" anchor="end">
            <Menu.Container
              buttonSize={40}
              menuWidth={200}
              menuRadius={16}
              style={{
                '--bloom-bg': 'rgba(7, 10, 16, 0.92)',
                '--bloom-border': 'rgba(255, 255, 255, 0.12)'
              }}
            >
              <Menu.Trigger>
                <button
                  className="nav__toggle"
                  aria-label="Open menu"
                  aria-expanded={mobileMenuOpen}
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text)',
                    padding: '8px 10px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  ☰
                </button>
              </Menu.Trigger>
              <Menu.Content className="bloom-menu-content">
                <Menu.Item onSelect={() => scrollToSection('mission')}>
                  Mission
                </Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('apps')}>
                  Apps
                </Menu.Item>
                <Menu.Item onSelect={() => scrollToSection('contact')}>
                  Contact
                </Menu.Item>
              </Menu.Content>
            </Menu.Container>
          </Menu.Root>
        </div>

        {/* Fallback toggle button */}
        <button
          className="nav__toggle"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
