import '../styles/Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Anton Rodin</span>
        </h1>

        <p className="hero-subtitle">
          <span className="role">Full-stack Engineer</span>
          <span className="divider">|</span>
          <span className="stack">Python / React</span>
          <span className="divider">|</span>
          <span className="infra">AWS / Microservices</span>
        </p>

        <p className="hero-description">
          Building scalable web applications with 9+ years of experience
          in backend development, microservices architecture, and modern frontend technologies.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <span>Get in touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#experience" className="btn btn-secondary">
            View my work
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">9+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
