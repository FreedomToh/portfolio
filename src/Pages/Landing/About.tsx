import '../../styles/About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Crafting Digital Solutions
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              Full-stack engineer with <strong>9+ years of experience</strong> in backend
              and web application development using Python, Django REST Framework, and React.
            </p>

            <p>
              I specialize in microservices architecture, database design, and AWS deployment.
              My passion lies in building robust, scalable systems that solve real-world problems.
            </p>

            <p>
              Throughout my career, I've successfully designed and deployed full-scale POS
              and telecommunication web systems, always focusing on clean code,
              performance optimization, and user experience.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Architecture Design</h4>
                  <p>Designing scalable microservices and cloud-native solutions</p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Full-stack Development</h4>
                  <p>End-to-end web application development from concept to deployment</p>
                </div>
              </div>

              <div className="highlight">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Cloud & DevOps</h4>
                  <p>AWS infrastructure, Linux administration, and CI/CD pipelines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span className="initials">AR</span>
              </div>
              <div className="image-decoration"></div>
            </div>

            <div className="tech-float tech-1">Python</div>
            <div className="tech-float tech-2">React</div>
            <div className="tech-float tech-3">AWS</div>
            <div className="tech-float tech-4">PostgreSQL</div>
          </div>
        </div>
      </div>
    </section>
  )
}
