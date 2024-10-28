import { mockStories } from "@/lib/mockStories";
import styles from "./page.module.css";
import NewsList from "@/features/news/components/NewsList";

// temporarily news feed
// using mock data from @lib
export default function Home() {
  return (
    <main className={styles.container}>
        <NewsList news={mockStories} />
    </main>
  );
}