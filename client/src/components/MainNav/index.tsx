import styles from './MainNav.module.css';

export default function MainNav() {
  return (
    <ul className={styles.container}>
      <li className={styles.navItem}>
        <a 
          className={styles.navAnchor}
          href="https://github.com/mtthdz/feed"
          target="_blank"
        >
          github
        </a>
      </li>
    </ul>
  )
}