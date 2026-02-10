import '../styles/Experience.css'

interface Job {
  title: string
  company: string
  period: string
  description: string[]
  achievements: string[]
}

const jobs: Job[] = [
  {
    title: 'Full-stack Engineer',
    company: 'Honki-mode Co., Ltd.',
    period: 'May 2024 – Present',
    description: [
      'Full-stack web application development using Python/React',
      'Backend development for POS applications',
      'Front-end development for check-in/check-out services',
    ],
    achievements: [
      'Designed the overall application architecture for the POS service, including AWS deployment architecture',
      'Developed backend services and a PWA check-in/check-out application with an offline-first focus',
      'Collaborated with team to optimize synchronization and data reliability in low-connectivity environments',
    ],
  },
  {
    title: 'Middle Back-end Developer (Python/C)',
    company: 'LLC Telezon',
    period: 'January 2021 – May 2024',
    description: [
      'Back-end and front-end development based on REST microservice architecture (DRF/React)',
      'Database maintenance and administration (Firebird, PostgreSQL)',
      'Billing administration and development of billing components in C',
      'Deploying and configuring Linux OS on servers',
    ],
    achievements: [
      'Created website and integrated it with billing systems and Fusion PBX',
      'Created integrations CRM with FreeSWITCH (FusionPBX)',
    ],
  },
  {
    title: 'Junior Python Back-end Developer',
    company: 'PJSC Polyus',
    period: 'May 2019 – December 2020',
    description: [
      'Developed Python applications for creating and editing LinkOne e-catalogs',
      'Supported and improved functionality of LinkOne e-catalogs web server',
    ],
    achievements: [
      'Developed the LinkOne catalog reverse conversion algorithm and implemented it in a full-featured e-catalogs editor',
    ],
  },
  {
    title: 'Junior Data Scientist',
    company: 'SNMG',
    period: 'February 2016 – May 2019',
    description: [
      'Data science and analytics',
    ],
    achievements: [
      'Automated main processes of the reporting activities of the analytical department using Python',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">
            Professional Experience
          </h2>
        </div>

        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < jobs.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="job-header">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>

                <div className="job-description">
                  <ul>
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
