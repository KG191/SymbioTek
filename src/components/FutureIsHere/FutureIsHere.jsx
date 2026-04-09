import Section from '../common/Section'
import PodcastCard from '../Podcasts/PodcastCard'

const futureForward = {
  id: 'future-forward',
  name: 'Future Forward',
  tagline: 'AI to AGI to ASI',
  description: 'Explores humanity\'s transformative technological journey from artificial intelligence to artificial general intelligence and beyond. Covers technical, geopolitical, economic, ethical, and cultural aspects of AI development.',
  icon: '/assets/future-forward-icon.png',
  spotifyUrl: 'https://open.spotify.com/show/51WPF1DPOAHMLLWjSuG3ad',
  applePodcastsUrl: 'https://podcasts.apple.com/au/podcast/future-forward-artificial-intelligence-general-intelligence/id1855221647'
}

export default function FutureIsHere() {
  return (
    <Section id="future-is-here">
      <div className="section__head">
        <h2>The Future is Here</h2>
        <p className="muted">Exploring the transformative journey from AI to AGI to ASI.</p>
      </div>

      <div className="podcasts">
        <PodcastCard podcast={futureForward} />
      </div>
    </Section>
  )
}
