import '../styles/Skills.css'
import type {JSX} from "react";

interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    icon: 'server',
    skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'C'],
  },
  {
    name: 'Frontend',
    icon: 'monitor',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'PWA'],
  },
  {
    name: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'Firebird', 'Redis', 'SQL'],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Linux', 'CI/CD', 'Nginx'],
  },
  {
    name: 'Architecture',
    icon: 'layers',
    skills: ['Microservices', 'REST API', 'System Design', 'Offline-first'],
  },
  {
    name: 'Tools & Other',
    icon: 'tool',
    skills: ['Git', 'FreeSWITCH', 'FusionPBX', 'Billing Systems', 'Data Science'],
  },
]

const icons: Record<string, JSX.Element> = {
  server: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  database: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  cloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  tool: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
}

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">
            Skills & Technologies
          </h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon">
                  {icons[category.icon]}
                </div>
                <h3 className="skill-category">{category.name}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
