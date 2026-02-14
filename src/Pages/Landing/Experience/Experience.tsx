import styles from './experience.module.less'
import {CheckMarkImg} from "../../../UI/svg/CheckMarkImg.tsx";

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
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Career Path</span>
          <h2 className={styles.sectionTitle}>
            Professional Experience
          </h2>
        </div>

        <div className={styles.timeline}>
          {jobs.map((job, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < jobs.length - 1 && <div className={styles.markerLine}></div>}
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobCompany}>{job.company}</p>
                  </div>
                  <span className={styles.jobPeriod}>{job.period}</span>
                </div>

                <div className={styles.jobDescription}>
                  <ul>
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.jobAchievements}>
                  <h4>Key Achievements</h4>
                  <ul>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>
                        <CheckMarkImg />
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
