import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Mission from './components/Mission/Mission'
import Apps from './components/Apps/Apps'
import WorkApps from './components/WorkApps/WorkApps'
import Podcasts from './components/Podcasts/Podcasts'
import FutureIsHere from './components/FutureIsHere/FutureIsHere'
import Contact from './components/Contact/Contact'
import AppDetailPage from './components/Apps/AppDetailPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Mission />
        <Apps />
        <WorkApps />
        <Podcasts />
        <FutureIsHere />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:appId" element={<AppDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
