import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel'
import { apps } from './Apps'

// Screenshots for Kidz app
const kidzScreenshots = [
  { src: '/assets/kidz-screenshots/Landing Page iPhone.png', alt: 'Landing Page' },
  { src: '/assets/kidz-screenshots/Story Display English US iPhone.png', alt: 'Story in English' },
  { src: '/assets/kidz-screenshots/Story Display French iPhone.png', alt: 'Story in French' },
  { src: '/assets/kidz-screenshots/Story Display German iPhone.png', alt: 'Story in German' },
  { src: '/assets/kidz-screenshots/Story Display Hindi iPhone.png', alt: 'Story in Hindi' },
  { src: '/assets/kidz-screenshots/Library View iPhone.png', alt: 'Story Library' },
  { src: '/assets/kidz-screenshots/Settings View_iPhone_top.png', alt: 'Settings' },
  { src: '/assets/kidz-screenshots/Settings Language Selection_iPhone_top.png', alt: 'Language Selection' },
]

// Screenshots for Forava app with festival dates (month, day)
// Dates are approximate and may vary by year for lunar calendar festivals
const foravaFestivalScreenshots = [
  { src: '/assets/forava-screenshots/Chinese New Year Icon Carousel.png', alt: 'Chinese New Year', month: 1, day: 29 },
  { src: '/assets/forava-screenshots/Holi Icon Carousel.png', alt: 'Holi', month: 3, day: 14 },
  { src: '/assets/forava-screenshots/Easter Icon Carousel.png', alt: 'Easter', month: 4, day: 20 },
  { src: '/assets/forava-screenshots/Vesak Day Icon Carousel.png', alt: 'Vesak Day', month: 5, day: 12 },
  { src: '/assets/forava-screenshots/Eid Al Adha Simulator Screenshot - iPhone 6.5" Display_AppStore Connect - 2025-12-07 at 15.57.27.png', alt: 'Eid Al Adha', month: 6, day: 7 },
  { src: '/assets/forava-screenshots/Raksha Bandan icon carousel.png', alt: 'Raksha Bandhan', month: 8, day: 9 },
  { src: '/assets/forava-screenshots/Mid Autumn Festival Icon Carousel.png', alt: 'Mid Autumn Festival', month: 9, day: 17 },
  { src: '/assets/forava-screenshots/Rosh Hashanah Icon Carousel.png', alt: 'Rosh Hashanah', month: 9, day: 23 },
  { src: '/assets/forava-screenshots/Diwali Icon Carousel.png', alt: 'Diwali', month: 10, day: 20 },
  { src: '/assets/forava-screenshots/Hannukhah icon carousel.png', alt: 'Hanukkah', month: 12, day: 14 },
  { src: '/assets/forava-screenshots/Christmas Icon Carousel.png', alt: 'Christmas', month: 12, day: 25 },
]

// Non-festival Forava screenshots (shown after festivals)
const foravaOtherScreenshots = [
  { src: '/assets/forava-screenshots/Culture selection.png', alt: 'Culture Selection' },
  { src: '/assets/forava-screenshots/Anniversary Simulator Screenshot - iPhone 6.5" Display_AppStore Connect - 2025-12-07 at 15.57.20.png', alt: 'Anniversary' },
  { src: '/assets/forava-screenshots/Beauty & cosmetics gift voucher.png', alt: 'Gift Voucher' },
  { src: '/assets/forava-screenshots/Settings.png', alt: 'Settings' },
]

// Screenshots for Wendy app
const wendyScreenshots = [
  { src: '/assets/wendy-screenshots/Landing page.png', alt: 'Landing Page' },
  { src: '/assets/wendy-screenshots/Welcome page.png', alt: 'Welcome' },
  { src: '/assets/wendy-screenshots/Conversation promotion.png', alt: 'Conversation' },
  { src: '/assets/wendy-screenshots/About Wendy.png', alt: 'About Wendy' },
  { src: '/assets/wendy-screenshots/Settings top dark mode.png', alt: 'Settings' },
  { src: '/assets/wendy-screenshots/Setting bottom dark mode.png', alt: 'Settings (continued)' },
]

// Get Forava screenshots ordered by closest upcoming festival
function getForavaScreenshotsOrdered() {
  const now = new Date()
  const currentMonth = now.getMonth() + 1 // 1-12
  const currentDay = now.getDate()

  // Calculate days until each festival (considering year wrap)
  const festivalsWithDays = foravaFestivalScreenshots.map(festival => {
    let daysUntil
    const festivalDayOfYear = (festival.month - 1) * 30.44 + festival.day // Approximate
    const currentDayOfYear = (currentMonth - 1) * 30.44 + currentDay

    if (festivalDayOfYear >= currentDayOfYear) {
      daysUntil = festivalDayOfYear - currentDayOfYear
    } else {
      // Festival has passed this year, calculate days until next year
      daysUntil = (365 - currentDayOfYear) + festivalDayOfYear
    }

    return { ...festival, daysUntil }
  })

  // Sort by days until festival (closest first)
  const sortedFestivals = [...festivalsWithDays].sort((a, b) => a.daysUntil - b.daysUntil)

  // Return sorted festivals followed by other screenshots
  return [...sortedFestivals, ...foravaOtherScreenshots]
}

// Helper function to get screenshots for an app
function getScreenshotsForApp(appId) {
  switch (appId) {
    case 'kidz':
      return kidzScreenshots
    case 'forava':
      return getForavaScreenshotsOrdered()
    case 'wendy':
      return wendyScreenshots
    default:
      return null
  }
}

// Screenshot slide component for carousel
const ScreenshotSlide = memo(function ScreenshotSlide(props) {
  const { data, dataIndex } = props
  return (
    <div
      className="screenshot-slide"
      draggable={false}
      style={{
        width: '100%',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src={data[dataIndex].src}
        alt={data[dataIndex].alt}
        draggable={false}
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
          objectFit: 'contain',
          borderRadius: 24,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}
      />
    </div>
  )
})

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
  const carouselRef = useRef()

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [appId])

  // Ensure carousel starts at first slide on mount
  useEffect(() => {
    if (getScreenshotsForApp(app?.id) && carouselRef.current) {
      // Small delay to ensure carousel is fully initialized
      const timer = setTimeout(() => {
        carouselRef.current?.swipeTo(0)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [app?.id])

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

      {/* Screenshots Carousel */}
      {getScreenshotsForApp(app.id) && (
        <div className="container">
          <motion.div
            className="detail-page__screenshots"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="detail-page__screenshots-title">Screenshots</h2>
            <div className="carousel-wrapper">
              <ResponsiveContainer
                carouselRef={carouselRef}
                render={(parentWidth) => (
                  <StackedCarousel
                    ref={carouselRef}
                    data={getScreenshotsForApp(app.id)}
                    carouselWidth={parentWidth}
                    slideWidth={280}
                    slideComponent={ScreenshotSlide}
                    maxVisibleSlide={5}
                    currentVisibleSlide={5}
                    useGrabCursor={true}
                    height={500}
                  />
                )}
              />
            </div>
            <div className="carousel-nav">
              <button onClick={() => carouselRef.current?.goBack()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={() => carouselRef.current?.goNext()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}

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
