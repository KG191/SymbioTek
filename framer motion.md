# Symbiotek Website: React Migration with bloom-menu and framer-motion

## Overview

Migrate the Symbiotek website from vanilla HTML/CSS/JS to React with Vite, integrating:
- **bloom-menu**: iOS-inspired pull-down menu component
- **framer-motion**: Professional animation library

**Branch**: `framer-motion`

## Current State
- Static website: `index.html` (205 lines), `styles.css` (249 lines), `script.js` (20 lines)
- Zero dependencies, no build process
- Deployed to GitHub Pages at symbio-tek.com
- 4 sections: Hero, Mission, Apps, Contact

## Target Architecture

### Technology Stack
- **React 18** - Modern React with hooks
- **Vite 6** - Fast build tool
- **bloom-menu** - npm: `bloom-menu` (requires React)
- **framer-motion** - Animation library
- **CSS Modules** - Scoped styling
- **GitHub Actions** - Automated deployment

### File Structure
```
/Symbiotek/
├── public/
│   ├── CNAME
│   └── assets/ (6 images moved here)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.module.css
│   ├── components/
│   │   ├── Header/Header.jsx (with bloom-menu)
│   │   ├── Hero/Hero.jsx (with framer-motion)
│   │   ├── Mission/Mission.jsx
│   │   ├── Apps/AppCard.jsx (with bloom-menu)
│   │   └── Contact/Contact.jsx
│   └── utils/animations.js (shared variants)
├── .github/workflows/deploy.yml
├── package.json
└── vite.config.js
```

## Implementation Steps

### 1. Project Setup (30 min)

**Create branch and initialize Vite:**
```bash
git checkout -b framer-motion
npm create vite@latest . -- --template react
npm install
npm install bloom-menu framer-motion
npm install -D gh-pages
```

**Configure Vite** (`vite.config.js`):
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist', assetsDir: 'assets' }
})
```

**Move assets:**
- Create `public/assets/` directory
- Move all images from `assets/` to `public/assets/`
- Move `CNAME` to `public/CNAME`

**Create `.gitignore`:**
```
node_modules
dist
.DS_Store
*.log
```

### 2. Shared Utilities (30 min)

**Create `src/utils/animations.js`** - Reusable framer-motion variants:
```js
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export const cardHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300 }
}
```

**Create `src/components/common/`** components:
- `Card.jsx` - Reusable card with hover animations
- `Button.jsx` - Animated button
- `Section.jsx` - Section wrapper with scroll reveal

### 3. Component Migration (2-3 hours)

**Order: Contact → Mission → Apps → Hero → Header**

#### Contact Component (Simplest)
- Extract contact HTML from `index.html` (lines 171-193)
- Convert to React component
- Add fade-in animation
- Port CSS from `styles.css` (lines 214-223)
- Preserve dynamic year logic

#### Mission Component
- Extract HTML (lines 64-92)
- Create staggered card entrance
- Port CSS (lines 178-183, grid styles)
- Add hover effects with framer-motion

#### Apps Component + AppCard
- Extract HTML (lines 94-164)
- Create `AppCard.jsx` sub-component
- **Add bloom-menu to each card:**
  ```jsx
  <Menu.Root direction="top" anchor="start">
    <Menu.Container buttonSize={32} menuWidth={160} menuRadius={12}>
      <Menu.Trigger>
        <button className="three-dot-menu">⋯</button>
      </Menu.Trigger>
      <Menu.Content className="p-2">
        <Menu.Item onSelect={() => {}}>Learn More</Menu.Item>
        <Menu.Item onSelect={() => window.open(appStoreUrl, '_blank')}>
          Visit App Store
        </Menu.Item>
        <Menu.Item onSelect={() => {}}>Share</Menu.Item>
      </Menu.Content>
    </Menu.Container>
  </Menu.Root>
  ```
- Add card hover scale animations
- Port CSS (lines 185-213)

#### Hero Component (Most Complex)
- Extract HTML (lines 36-61)
- Split into hero copy and hero card sections
- Implement entrance animations:
  - Fade-in + slide-up for h1
  - Stagger CTAs
  - Logo card with scale effect
- Animated glow effect (CSS gradient + rotation)
- Port CSS (lines 55-148)

#### Header Component
- Extract HTML (lines 18-33)
- **Integrate bloom-menu for navigation:**
  ```jsx
  <Menu.Root direction="top" anchor="start">
    <Menu.Container buttonSize={40} menuWidth={200} menuRadius={18}>
      <Menu.Trigger>
        <button className="nav-toggle">☰</button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item onSelect={() => scrollTo('mission')}>Mission</Menu.Item>
        <Menu.Item onSelect={() => scrollTo('apps')}>Apps</Menu.Item>
        <Menu.Item onSelect={() => scrollTo('contact')}>Contact</Menu.Item>
      </Menu.Content>
    </Menu.Container>
  </Menu.Root>
  ```
- Preserve sticky positioning
- Glassmorphism backdrop-filter
- Port CSS (lines 29-53)

### 4. Main App Assembly (1 hour)

**Create `App.jsx`:**
- Import all components
- Layout structure:
  ```jsx
  <div className="app">
    <Header />
    <main>
      <Hero />
      <Mission />
      <Apps />
      <Contact />
    </main>
  </div>
  ```
- Implement smooth scroll function:
  ```js
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  ```

**Convert `styles.css` to CSS Modules:**
- Create `App.module.css` with CSS variables (lines 1-12)
- Global styles (reset, background gradients)
- Component-specific styles → separate `.module.css` files
- Preserve responsive breakpoints (920px, 1024px)

**Create `main.jsx`:**
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

### 5. Animation & Interaction Polish (1-2 hours)

**Scroll-based animations:**
- Use framer-motion's `useInView` hook
- Reveal sections on scroll
- Section progress indicator

**Enhanced hover states:**
- Card scale with spring physics
- Button glow effects
- App Store badge pulse
- Navigation link highlights

**Page load sequence:**
- Hero entrance (fade + scale)
- Stagger child elements
- Smooth transitions

**Mobile optimization:**
- Use `transform` and `opacity` only (GPU-accelerated)
- Implement `prefers-reduced-motion`
- Test bloom-menu on mobile

**Background effects:**
- Animated gradient rotation on hero glow
- Preserve existing radial gradients

### 6. GitHub Pages Deployment (30 min)

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ framer-motion ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Update `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

**Verify CNAME:**
- Ensure `public/CNAME` contains: `symbio-tek.com`

**Test build:**
```bash
npm run build
npm run preview
```

**Deploy:**
- Push `framer-motion` branch
- Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)

## Critical Files to Modify

1. **`src/App.jsx`** - Main application component
2. **`src/components/Header/Header.jsx`** - Navigation with bloom-menu
3. **`src/components/Hero/Hero.jsx`** - Complex section with animations
4. **`src/utils/animations.js`** - Centralized animation config
5. **`vite.config.js`** - Build configuration

## bloom-menu Integration Points

### Primary: Header Navigation
- **Trigger**: Hamburger menu or logo
- **Menu items**: Mission, Apps, Contact
- **Direction**: "top" (pulls down)
- **Style**: Match glassmorphism design

### Secondary: App Card Actions
- **Trigger**: Three-dot icon on each app card
- **Menu items**: "Learn More", "Visit App Store", "Share"
- **Enhances**: Mobile UX and discoverability

## framer-motion Integration Points

1. **Page Load**: Hero fade-in, stagger CTA buttons
2. **Scroll**: Section reveals with `useInView`
3. **Hover**: Card scale, button glow, badge pulse
4. **Navigation**: Smooth scroll with spring easing
5. **Layout**: Mobile nav expansion, responsive grid transitions

## Testing Checklist

### Functionality
- [ ] bloom-menu opens/closes on desktop and mobile
- [ ] Smooth scroll to sections works
- [ ] App Store badges link correctly
- [ ] Contact links work (email, LinkedIn)
- [ ] Year displays correctly in footer

### Animations
- [ ] Hero section fades in on load
- [ ] Mission cards stagger on mount
- [ ] App cards scale on hover
- [ ] Sections reveal on scroll
- [ ] bloom-menu morphing animation smooth
- [ ] `prefers-reduced-motion` respected

### Responsive
- [ ] Mobile (320px-768px) layout correct
- [ ] Tablet (769px-1024px) layout correct
- [ ] Desktop (1025px+) layout correct
- [ ] bloom-menu positioning correct on all sizes

### Performance
- [ ] Lighthouse score > 90
- [ ] No layout shift (CLS < 0.1)
- [ ] Smooth 60fps animations
- [ ] No console errors

### Deployment
- [ ] `npm run build` completes
- [ ] `npm run preview` works locally
- [ ] GitHub Actions workflow passes
- [ ] Site deploys to symbio-tek.com
- [ ] CNAME file present
- [ ] All assets load correctly

## Verification

**Development:**
```bash
npm run dev
# Open http://localhost:5173
# Test all interactions and animations
```

**Production Build:**
```bash
npm run build
npm run preview
# Open http://localhost:4173
# Verify production build
```

**Live Site:**
- Visit https://symbio-tek.com
- Test on mobile device
- Verify bloom-menu and animations
- Check browser console for errors

## Potential Challenges

### Challenge 1: bloom-menu Styling
**Solution**: Override bloom-menu classes with CSS Modules. Apply glassmorphism, backdrop-filter, and custom borders.

### Challenge 2: Performance on Mobile
**Solution**: Use `transform` and `opacity` only. Implement `prefers-reduced-motion`. Conditionally disable heavy animations.

### Challenge 3: Asset Paths
**Solution**: Use absolute paths from public folder: `/assets/logo.png`

### Challenge 4: CSS Variables in Modules
**Solution**: Keep variables in `App.module.css` with `:root` selector. Use `:global()` for shared classes.

### Challenge 5: GitHub Actions Permissions
**Solution**: Set permissions in workflow file. Enable GitHub Pages with "GitHub Actions" source in repository settings.

## Timeline Estimate

**Total: 6-8 hours** (experienced React developer)
- Setup: 30 min
- Components: 2-3 hours
- Assembly: 1 hour
- Animations: 1-2 hours
- Testing: 1 hour
- Deployment: 30 min

## Success Criteria

✅ bloom-menu integrated in header navigation
✅ bloom-menu added to app cards
✅ framer-motion animations on all sections
✅ Smooth scroll and page load sequence
✅ Responsive design preserved
✅ GitHub Pages deployment working
✅ Custom domain (symbio-tek.com) resolves
✅ All existing features preserved
✅ Performance remains high (Lighthouse > 90)

## Resources

- [bloom-menu Documentation](https://joshpuckett.me/bloom)
- [framer-motion Documentation](https://motion.dev/)
- [Vite Documentation](https://vite.dev/)
- [GitHub Pages with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
