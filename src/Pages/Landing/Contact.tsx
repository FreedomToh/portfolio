import '../../styles/Contact.css'
import type {JSX} from "react";

interface ContactLink {
  icon: JSX.Element
  label: string
  value: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'freedom.toh3@gmail.com',
    href: 'mailto:freedom.toh3@gmail.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    label: 'Telegram',
    value: '@AntonRodin1',
    href: 'https://t.me/AntonRodin1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Anton Rodin',
    href: 'https://www.linkedin.com/in/anton-rodin-46451725b/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+8107085198184',
    href: 'tel:+8107085198184',
  },
]

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">
                Let's Work Together
              </h2>
            </div>

            <p className="contact-description">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs development or you're looking
              for a dedicated full-stack engineer, let's connect!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="contact-link"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-link-icon">
                    {link.icon}
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                  <svg className="contact-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-visual">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-avatar">AR</div>
                <div className="contact-card-info">
                  <h3>Anton Rodin</h3>
                  <p>Full-stack Engineer</p>
                </div>
              </div>
              <div className="contact-card-status">
                <span className="status-dot"></span>
                Available for hire
              </div>
              <div className="contact-card-tags">
                <span>Python</span>
                <span>React</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
