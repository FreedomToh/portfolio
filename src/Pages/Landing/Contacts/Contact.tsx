import type {JSX} from "react";
import styles from './contacts.module.less'
import { LinkArrowIco } from "../../../UI/svg/LinkArrowIco";
import { EmailIcon } from "../../../UI/svg/EmailIcon";
import { TelegramIco } from "../../../UI/svg/TelegramIco";
import { LinkedInIco } from "../../../UI/svg/LinkedInIco";
import { PhoneIco } from "../../../UI/svg/PhoneIco";

interface ContactLink {
  icon: JSX.Element
  label: string
  value: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'freedom.toh3@gmail.com',
    href: 'mailto:freedom.toh3@gmail.com',
  },
  {
    icon: <TelegramIco />,
    label: 'Telegram',
    value: '@AntonRodin1',
    href: 'https://t.me/AntonRodin1',
  },
  {
    icon: <LinkedInIco />,
    label: 'LinkedIn',
    value: 'Anton Rodin',
    href: 'https://www.linkedin.com/in/anton-rodin-46451725b/',
  },
  {
    icon: <PhoneIco />,
    label: 'Phone',
    value: '+8107085198184',
    href: 'tel:+8107085198184',
  },
]

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Get in Touch</span>
              <h2 className={styles.sectionTitle}>
                Let's Work Together
              </h2>
            </div>

            <p className={styles.contactDescription}>
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs development or you're looking
              for a dedicated full-stack engineer, let's connect!
            </p>

            <div className={styles.contactLinks}>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.contactLink}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.contactLinkIcon}>
                    {link.icon}
                  </div>
                  <div className={styles.contactLinkContent}>
                    <span className={styles.contactLinkLabel}>{link.label}</span>
                    <span className={styles.contactLinkValue}>{link.value}</span>
                  </div>
                  <LinkArrowIco styles={styles.contactLinkArrow} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactVisual}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardHeader}>
                <div className={styles.contactAvatar}>AR</div>
                <div className={styles.contactCardInfo}>
                  <h3>Anton Rodin</h3>
                  <p>Full-stack Engineer</p>
                </div>
              </div>
              <div className={styles.contactCardStatus}>
                <span className={styles.statusDot}></span>
                Available for hire
              </div>
              <div className={styles.contactCardTags}>
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
