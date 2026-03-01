import type {JSX} from "react";
import { ServerIco } from '../../../UI/svg/ServerIco.tsx'
import { MonitorIco } from '../../../UI/svg/MonitorIco.tsx'
import { DatabaseIco } from '../../../UI/svg/DatabaseIco.tsx'
import { CloudIco } from '../../../UI/svg/CoudIco.tsx'
import { StackImg } from '../../../UI/svg/StackImg.tsx';
import { ToolsIco } from '../../../UI/svg/ToolsIco.tsx';
import styles from './skills.module.less'


interface SkillCategory {
  name: string
  icon: JSX.Element
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    icon: <ServerIco />,
    skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'C'],
  },
  {
    name: 'Frontend',
    icon: <MonitorIco />,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'PWA'],
  },
  {
    name: 'Databases',
    icon: <DatabaseIco />,
    skills: ['PostgreSQL', 'Firebird', 'Redis', 'SQL'],
  },
  {
    name: 'Cloud & DevOps',
    icon: <CloudIco />,
    skills: ['AWS', 'Docker', 'Linux', 'CI/CD', 'Nginx'],
  },
  {
    name: 'Architecture',
    icon: <StackImg />,
    skills: ['Microservices', 'REST API', 'System Design', 'Offline-first'],
  },
  {
    name: 'Tools & Other',
    icon: <ToolsIco />,
    skills: ['Git', 'FreeSWITCH', 'FusionPBX', 'Billing Systems', 'Data Science'],
  },
]

export const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Tech Stack</span>
          <h2 className={styles.sectionTitle}>
            Skills & Technologies
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIcon}>
                  {category.icon}
                </div>
                <h3 className={styles.skillCategory}>{category.name}</h3>
              </div>

              <div className={styles.skillTags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
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
