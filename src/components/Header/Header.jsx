import { useState } from 'react'

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

        {/* Mobile Menu Toggle */}
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
