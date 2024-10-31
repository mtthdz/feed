import SiteNav from "../../features/nav/components/SiteNav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.headerTitle}>feed <span className={styles.headerSubtitle}>(work in progress)</span></h1>
      <SiteNav />
    </header>
  )
}