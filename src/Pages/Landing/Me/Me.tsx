import styles from './me.module.less'
import cn from 'classnames'
import {Button} from "../../../components/Buttons/Button.tsx";
import {ArrowRight} from "../../../UI/svg/ArrowRight.tsx";
import {ButtonType} from "../../../components/Buttons/buttonParams.ts";

export function Me() {
  return (
    <section className={styles.root}>
      <div className={styles.rootBackground}>
        <div className={cn(styles.gradientOrb, styles.orb1)}></div>
        <div className={cn(styles.gradientOrb, styles.orb2)}></div>
        <div className={styles.greedOverlay}></div>
      </div>

      <div className={styles.rootContent}>
        <div className={styles.rootBadge}>
          <span className={styles.badgeDot}></span>
          Available for opportunities
        </div>

        <h1 className={styles.rootTitle}>
          <span className={styles.greeting}>Hi, I'm</span>
          <span className={styles.name}>Anton Rodin</span>
        </h1>

        <p className={styles.rootSubtitle}>
          <span className={styles.role}>Full-stack Engineer</span>
          <span className={styles.divider}>|</span>
          <span className={styles.stack}>Python / React</span>
          <span className={styles.divider}>|</span>
          <span className={styles.infra}>AWS / Microservices</span>
        </p>

        <p className={styles.rootDescription}>
          Building scalable web applications with 9+ years of experience
          in backend development, microservices architecture, and modern frontend technologies.
        </p>

        <div className={styles.rootActions}>
          <Button rightIcon={<ArrowRight />} href={"#contact"} >
            <span>Get in touch</span>
          </Button>
          <Button href={"#experience"} type={ButtonType.secondary}>
            <span>View my work</span>
          </Button>
        </div>

        <div className={styles.rootStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>9+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Companies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
        </div>
      </div>

      {/*<div className="scroll-indicator">*/}
      {/*  <span>Scroll to explore</span>*/}
      {/*  <div className="scroll-arrow">*/}
      {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
      {/*      <path d="M12 5v14M19 12l-7 7-7-7"/>*/}
      {/*    </svg>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  )
}
