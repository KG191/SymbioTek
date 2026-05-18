import Section from '../common/Section'
import PodcastCard from '../Podcasts/PodcastCard'
import AppCard from '../Apps/AppCard'

const futureForward = {
  id: 'future-forward',
  name: 'Future Forward',
  tagline: 'AI to AGI to ASI',
  description: 'Explores humanity\'s transformative technological journey from artificial intelligence to artificial general intelligence and beyond. Covers technical, geopolitical, economic, ethical, and cultural aspects of AI development.',
  icon: '/assets/future-forward-icon.png',
  spotifyUrl: 'https://open.spotify.com/show/51WPF1DPOAHMLLWjSuG3ad',
  applePodcastsUrl: 'https://podcasts.apple.com/au/podcast/future-forward-artificial-intelligence-general-intelligence/id1855221647'
}

export const board = {
  id: 'board',
  name: 'Board',
  tagline: 'Convene history\'s greatest minds to debate your decision.',
  description: 'An AI advisory board of 22 historical figures — Sun Tzu, Marcus Aurelius, Ada Lovelace, Coco Chanel, Henry Ford, Taiichi Ohno, and more. Pick 2–7 advisors, pose your question, watch them argue, vote, and the chair lands a verdict plus a 90-day action plan. Web app or remote MCP server for Claude Code.',
  fullDescription: `Boardroom convenes a virtual advisory board of historical figures to debate your hardest founder decisions. Pick 2–7 advisors from a curated roster of 22 — Sun Tzu, Marcus Aurelius, Ada Lovelace, Coco Chanel, Henry Ford, Estée Lauder, Taiichi Ohno, and others.

Each persona is a structured ~2,500-token system prompt encoding their mental models, decision frameworks, blind spots, and voice. The orchestrator runs a phased meeting: the chair re-frames your question, each advisor responds in sequence (seeing every prior speaker), the chair synthesises consensus with a recorded vote and lands a verdict — never just a "considerations" list.

WHAT YOU GET
• 22 historical advisors with curated, structured persona prompts
• Sequential debate mechanic — each advisor sees every prior speaker, not parallel monologues
• Chair-led synthesis with extracted consensus (unanimous / majority / split) and a 90-day action plan
• Voting and dissent tracking per advisor with one-line reasoning
• Deep-dive strategy memos generated as structured markdown documents
• Continuation meetings — re-convene the same board with new evidence between sessions
• Evidence-backed research layer to stress-test the plan

THE ADVISOR PANTHEON
Strategy and command: Sun Tzu, Marcus Aurelius, Miyamoto Musashi
Business and operations: Henry Ford, Taiichi Ohno, W. Edwards Deming, Benjamin Graham
Brand and marketing: Coco Chanel, Estée Lauder, P.T. Barnum, Claude Hopkins, Dale Carnegie, Madam C.J. Walker
Science and engineering: Ada Lovelace, Grace Hopper, Leonardo da Vinci, Buckminster Fuller
Leadership and judgement: Abraham Lincoln, Benjamin Franklin, Florence Nightingale, Stephen Covey, Aristotle

TWO SURFACES, ONE BACKEND
• Web app at pantheon-board.com — sign in, convene a meeting in minutes
• Remote MCP server for Claude Code — call \`boardroom_convene_meeting\` directly from your editor
• Both share the same persona roster, orchestrator, and meeting history

BUILT ON
• Claude (Sonnet + Haiku) with cascading provider fallback
• Web-search-grounded research layer for evidence-backed verdicts
• Postgres with row-level security so your meetings stay your meetings

PRICING
Currently in beta — 20 free credits on signup, no credit card required.
Paid plans coming post-beta:
• Founder $19.99/month (30 credits)
• CEO $49.99/month (100 credits)
• Credit Pack $9.99 (15 one-time credits)

WHY IT WORKS
Sharper than any single AI chat because the disagreement is the point. Most founders make strategic decisions alone or in a single-perspective AI chat. Board surfaces the cross-disciplinary friction — Sun Tzu pushing on positioning while Coco Chanel pushes on brand, Taiichi Ohno on operations, Ada Lovelace on technical feasibility — and forces a verdict you can actually act on.`,
  icon: '/assets/board-icon.png',
  webUrl: 'https://pantheon-board.com',
  bottomCtaText: 'Convene your board. Land a verdict.',
  launchButtonStyle: {
    background: 'linear-gradient(135deg, #b8941f 0%, #d4a942 45%, #f5e6b8 65%, #d4a942 85%, #7d6608 100%)',
    border: '1px solid rgba(245, 230, 184, 0.55)',
    color: '#1a1207',
    fontWeight: 700,
    letterSpacing: 0.3,
    boxShadow: '0 8px 24px rgba(180, 138, 35, 0.35), inset 0 1px 0 rgba(255, 248, 220, 0.4)',
    textShadow: '0 1px 0 rgba(255, 245, 210, 0.4)'
  },
  trustSignals: ['22 Historical Advisors', 'Chair-Led Verdict', 'Claude + MCP', '20 Free Credits'],
  howItWorks: [
    { step: 1, title: 'Pick your board', description: 'Choose 2–7 advisors from a curated roster of 22 historical operators — strategists, brand-builders, scientists, and leaders.' },
    { step: 2, title: 'Pose your decision', description: 'Describe a strategic question in plain English. The chair re-frames it; each advisor responds in sequence, seeing every prior speaker.' },
    { step: 3, title: 'Walk away with a verdict', description: 'The chair synthesises consensus with a recorded vote and lands a 90-day action plan — not a "considerations" list.' }
  ],
  advisors: [
    { id: 'marcus-aurelius', name: 'Marcus Aurelius', title: 'Roman Emperor & Stoic Philosopher', era: '121–180 AD', avatar_url: '/assets/board-advisors/marcus-aurelius.png', accent_color: '#8B6914' },
    { id: 'sun-tzu', name: 'Sun Tzu', title: 'Military Strategist & Author of The Art of War', era: '~544–496 BC', avatar_url: '/assets/board-advisors/sun-tzu.png', accent_color: '#C41E3A' },
    { id: 'abraham-lincoln', name: 'Abraham Lincoln', title: '16th President of the United States', era: '1809–1865', avatar_url: '/assets/board-advisors/abraham-lincoln.png', accent_color: '#2C3E50' },
    { id: 'ada-lovelace', name: 'Ada Lovelace', title: 'Mathematician & First Computer Programmer', era: '1815–1852', avatar_url: '/assets/board-advisors/ada-lovelace.png', accent_color: '#6C3483' },
    { id: 'henry-ford', name: 'Henry Ford', title: 'Industrialist & Ford Motor Company Founder', era: '1863–1947', avatar_url: '/assets/board-advisors/henry-ford.png', accent_color: '#1A5276' },
    { id: 'benjamin-graham', name: 'Benjamin Graham', title: 'Father of Value Investing', era: '1894–1976', avatar_url: '/assets/board-advisors/benjamin-graham.png', accent_color: '#145A32' },
    { id: 'dale-carnegie', name: 'Dale Carnegie', title: 'Author & Communication Pioneer', era: '1888–1955', avatar_url: '/assets/board-advisors/dale-carnegie.png', accent_color: '#B7950B' },
    { id: 'claude-hopkins', name: 'Claude Hopkins', title: 'Scientific Advertising Pioneer', era: '1866–1932', avatar_url: '/assets/board-advisors/claude-hopkins.png', accent_color: '#922B21' },
    { id: 'edwards-deming', name: 'W. Edwards Deming', title: 'Quality Management Pioneer', era: '1900–1993', avatar_url: '/assets/board-advisors/edwards-deming.png', accent_color: '#1B4F72' },
    { id: 'leonardo-da-vinci', name: 'Leonardo da Vinci', title: 'Polymath, Artist, Engineer, Inventor', era: '1452–1519', avatar_url: '/assets/board-advisors/leonardo-da-vinci.png', accent_color: '#7D6608' },
    { id: 'cj-walker', name: 'Madam C.J. Walker', title: "America's First Self-Made Female Millionaire", era: '1867–1919', avatar_url: '/assets/board-advisors/cj-walker.png', accent_color: '#6C3483' },
    { id: 'stephen-covey', name: 'Stephen Covey', title: 'Author of The 7 Habits of Highly Effective People', era: '1932–2012', avatar_url: '/assets/board-advisors/stephen-covey.png', accent_color: '#1E8449' },
    { id: 'aristotle', name: 'Aristotle', title: 'Philosopher & Father of Logic', era: '384–322 BC', avatar_url: '/assets/board-advisors/aristotle.png', accent_color: '#4A235A' },
    { id: 'benjamin-franklin', name: 'Benjamin Franklin', title: 'Polymath, Founder, Inventor, Diplomat', era: '1706–1790', avatar_url: '/assets/board-advisors/benjamin-franklin.png', accent_color: '#784212' },
    { id: 'pt-barnum', name: 'P.T. Barnum', title: 'Showman & Attention Economist', era: '1810–1891', avatar_url: '/assets/board-advisors/pt-barnum.png', accent_color: '#C0392B' },
    { id: 'taiichi-ohno', name: 'Taiichi Ohno', title: 'Creator of the Toyota Production System', era: '1912–1990', avatar_url: '/assets/board-advisors/taiichi-ohno.png', accent_color: '#2E4053' },
    { id: 'grace-hopper', name: 'Grace Hopper', title: 'Computer Scientist & Naval Rear Admiral', era: '1906–1992', avatar_url: '/assets/board-advisors/grace-hopper.png', accent_color: '#1A5276' },
    { id: 'estee-lauder', name: 'Estée Lauder', title: 'Beauty Industry Pioneer', era: '1906–2004', avatar_url: '/assets/board-advisors/estee-lauder.png', accent_color: '#D4AC0D' },
    { id: 'miyamoto-musashi', name: 'Miyamoto Musashi', title: 'Swordsman & Strategist', era: '1584–1645', avatar_url: '/assets/board-advisors/miyamoto-musashi.png', accent_color: '#717D7E' },
    { id: 'florence-nightingale', name: 'Florence Nightingale', title: 'Data-Driven Operations Reformer', era: '1820–1910', avatar_url: '/assets/board-advisors/florence-nightingale.png', accent_color: '#2874A6' },
    { id: 'buckminster-fuller', name: 'Buckminster Fuller', title: 'Systems Thinker & Design Scientist', era: '1895–1983', avatar_url: '/assets/board-advisors/buckminster-fuller.png', accent_color: '#1ABC9C' },
    { id: 'coco-chanel', name: 'Coco Chanel', title: 'Fashion Revolutionary & Brand Architect', era: '1883–1971', avatar_url: '/assets/board-advisors/coco-chanel.png', accent_color: '#17202A' }
  ],
  faq: [
    { question: 'Who are the advisors?', answer: 'A curated roster of 22 historical figures spanning strategy (Sun Tzu, Marcus Aurelius), business and operations (Henry Ford, Taiichi Ohno, W. Edwards Deming), brand and marketing (Coco Chanel, Estée Lauder, P.T. Barnum), science and engineering (Ada Lovelace, Grace Hopper, Leonardo da Vinci), and leadership (Abraham Lincoln, Benjamin Franklin, Stephen Covey, Aristotle).' },
    { question: 'How is this different from asking ChatGPT or Claude?', answer: 'Single-perspective AI chats give you one voice. Board runs a sequential debate where each advisor sees every prior speaker, the chair synthesises consensus with a recorded vote, and you get a verdict plus a 90-day action plan — not a balanced "considerations" list.' },
    { question: 'Can I use it from Claude Code?', answer: 'Yes. Board ships as both a web app at pantheon-board.com and a remote MCP server for Claude Code. Call boardroom_convene_meeting directly from your editor and the same advisory roster is one tool call away.' },
    { question: 'What does it cost?', answer: 'Currently in beta — 20 free credits on signup, no credit card required. Paid plans coming post-beta: Founder $19.99/month (30 credits), CEO $49.99/month (100 credits), or a $9.99 one-time Credit Pack (15 credits).' },
    { question: 'Where does my data go?', answer: 'Meetings and research are stored in Postgres with row-level security so only you can read them. Personas are sent to Claude (Anthropic) and a research provider for web search; raw meeting transcripts are not used to train any model.' }
  ]
}

export default function FutureIsHere() {
  return (
    <Section id="future-is-here">
      <div className="section__head">
        <h2>The Future is Here</h2>
        <p className="muted">Exploring the transformative journey from AI to AGI to ASI.</p>
      </div>

      <div className="apps">
        <AppCard app={board} />
        <PodcastCard podcast={futureForward} />
      </div>
    </Section>
  )
}
