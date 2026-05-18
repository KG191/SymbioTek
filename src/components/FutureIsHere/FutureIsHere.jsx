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
