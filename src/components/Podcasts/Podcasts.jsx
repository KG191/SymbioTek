import Section from '../common/Section'
import PodcastCard from './PodcastCard'

export const podcasts = [
  {
    id: 'future-forward',
    name: 'Future Forward',
    tagline: 'AI to AGI to ASI',
    description: 'Explores humanity\'s transformative technological journey from artificial intelligence to artificial general intelligence and beyond. Covers technical, geopolitical, economic, ethical, and cultural aspects of AI development.',
    icon: '/assets/future-forward-icon.png',
    spotifyUrl: 'https://open.spotify.com/show/51WPF1DPOAHMLLWjSuG3ad',
    applePodcastsUrl: 'https://podcasts.apple.com/au/podcast/future-forward-artificial-intelligence-general-intelligence/id1855221647'
  },
  {
    id: 'tegt',
    name: 'Think, Expand, Grow, Thrive',
    tagline: 'Personal & professional growth',
    description: 'Explores ideas that inspire personal and professional growth across business, education, leadership, and parenting. Each episode offers insights and conversations designed to help you think differently and expand your horizons.',
    icon: '/assets/tegt-icon.png',
    spotifyUrl: 'https://open.spotify.com/show/3dOumLio2aUZf8igsgVfgs',
    applePodcastsUrl: 'https://podcasts.apple.com/au/podcast/think-expand-grow-thrive/id1774571117'
  },
  {
    id: 'the-calm-edge',
    name: 'The Calm Edge',
    tagline: 'Performance under pressure',
    description: 'Explores the psychological patterns behind workplace challenges — from being overlooked despite competence to decision-making under pressure. Each episode offers a strategic reframe and one deliberate calm move to apply.',
    icon: '/assets/the-calm-edge-icon.png',
    spotifyUrl: 'https://open.spotify.com/show/64OEEVEIJ92AieHmcyv2ZI',
    applePodcastsUrl: 'https://podcasts.apple.com/au/podcast/the-calm-edge/id1877471913'
  }
]

export default function Podcasts() {
  return (
    <Section id="podcasts">
      <div className="section__head">
        <h2>Podcasts</h2>
        <p className="muted">Podcast series exploring AI, technology, and personal growth.</p>
      </div>

      <div className="podcasts">
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </div>
    </Section>
  )
}
