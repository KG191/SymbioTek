import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Mission from './components/Mission/Mission'
import Apps from './components/Apps/Apps'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main id="top">
        <Hero />
        <Mission />
        <Apps />
        <Contact />
      </main>
    </div>
  )
}

export default App
