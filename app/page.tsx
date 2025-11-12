import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <section id="home" className="hero">
        <span className="kicker">Conversion copywriting</span>
        <h1>Words that turn readers into customers.</h1>
        <p>
          I write high-converting copy for landing pages, websites, and email campaigns. Clear positioning,
          sharp messaging, and stories that sell without the sleaze.
        </p>
        <div className="hero-cta">
          <a className="button" href="#contact">Request proposal</a>
          <a className="button secondary" href="#portfolio">See work</a>
        </div>
      </section>

      <section id="services">
        <span className="kicker">Services</span>
        <h2 className="section-title">From strategy to polished copy</h2>
        <p className="section-desc">
          Whether you need a complete website rewrite or a single high-stakes sales page, I?ll deliver research-backed
          copy aligned to your customers? jobs-to-be-done.
        </p>
        <div className="grid cols-3" style={{ marginTop: 20 }}>
          <div className="card">
            <h3>Landing & sales pages</h3>
            <p>Persuasive, structured pages optimized for attention, clarity, and conversion.</p>
          </div>
          <div className="card">
            <h3>Website messaging</h3>
            <p>Homepage, features, pricing, and onboarding flows that reinforce your positioning.</p>
          </div>
          <div className="card">
            <h3>Email sequences</h3>
            <p>Nurture, onboarding, and launch campaigns that educate, build trust, and convert.</p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <span className="kicker">Selected work</span>
        <h2 className="section-title">Recent projects</h2>
        <div className="grid cols-3" style={{ marginTop: 10 }}>
          <div className="card portfolio-item">
            <span className="portfolio-tag">SaaS ? B2B</span>
            <h3>Analytics platform launch</h3>
            <p>Positioning, messaging, and a conversion-focused sales page that lifted trials by 38%.</p>
          </div>
          <div className="card portfolio-item">
            <span className="portfolio-tag">E-commerce</span>
            <h3>Brand refresh & email</h3>
            <p>Homepage revamp and 7-part lifecycle emails that increased first-purchase rate by 22%.</p>
          </div>
          <div className="card portfolio-item">
            <span className="portfolio-tag">Fintech ? B2C</span>
            <h3>Acquisition funnel</h3>
            <p>Landing page + onboarding sequence that reduced CPA by 19% at scale.</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <span className="kicker">Testimonials</span>
        <h2 className="section-title">What clients say</h2>
        <div className="grid cols-3" style={{ marginTop: 10 }}>
          <div className="card testimonial">
            <div className="quote">?Our signup rate jumped immediately. It finally says what customers care about.?</div>
            <div className="byline">CMO, B2B SaaS</div>
          </div>
          <div className="card testimonial">
            <div className="quote">?Fast, strategic, and collaborative. Some of the best copy we?ve shipped.?</div>
            <div className="byline">Director of Growth, E?commerce</div>
          </div>
          <div className="card testimonial">
            <div className="quote">?From vague to crystal clear positioning in two weeks. Huge impact.?</div>
            <div className="byline">Founder, Fintech</div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <span className="kicker">About</span>
        <h2 className="section-title">I combine research and crisp writing</h2>
        <p className="section-desc">
          I?ve spent the last 8 years helping startups clarify their message and scale revenue. My process blends
          customer interviews, competitor analysis, and messaging frameworks to uncover what matters?and then says it
          simply.
        </p>
        <div className="grid" style={{ marginTop: 10 }}>
          <div className="card">
            <h3>Process</h3>
            <p>
              Discovery ? Research ? Messaging ? Draft ? Iterate ? Finalize. Expect clear timelines, frequent check-ins,
              and shared docs.
            </p>
          </div>
          <div className="card">
            <h3>Principles</h3>
            <p>Clarity beats clever. Benefits before features. Specifics over superlatives. Focus on the reader?s job.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <span className="kicker">Contact</span>
        <h2 className="section-title">Tell me about your project</h2>
        <p className="section-desc">I typically book 2?4 weeks out. I?ll reply within one business day.</p>
        <div style={{ marginTop: 14 }}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
