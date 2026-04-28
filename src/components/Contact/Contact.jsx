import Section from '../common/Section'
import Card from '../common/Card'

export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p className="text">
        Want to collaborate, partner, or discuss a product idea?
      </p>

      <Card className="contact" animate={false}>
        <div>
          <p className="muted">Email</p>
          <a className="link" href="mailto:symbiotek@symbio-tek.com">
            symbiotek@symbio-tek.com
          </a>
        </div>

        <div>
          <p className="muted">LinkedIn</p>
          <a
            className="link"
            href="https://www.linkedin.com/company/sym-bio-tek/"
            target="_blank"
            rel="noreferrer"
          >
            SymbioTeK
          </a>
        </div>

        <div>
          <p className="muted">Location</p>
          <p>Australia</p>
        </div>
      </Card>

      <p className="fineprint">
        &copy; <span id="year">{currentYear}</span> SymbioTeK. Built with care. Founded 2025.
      </p>
    </Section>
  )
}
