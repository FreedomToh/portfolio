import { TelegramIco } from '../../../UI/svg/TelegramIco'
import styles from './footer.module.less'
import { LinkedInIco } from '../../../UI/svg/LinkedInIco'
import { EmailIcon } from '../../../UI/svg/EmailIcon'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>AR</span>
            <p>Building digital solutions with passion and precision.</p>
          </div>

          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.footerSocial}>
            <a
              href="https://t.me/AntonRodin1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIco />
            </a>
            <a
              href="https://www.linkedin.com/in/anton-rodin-46451725b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIco />
            </a>
            <a
              href="mailto:freedom.toh3@gmail.com"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Anton Rodin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
