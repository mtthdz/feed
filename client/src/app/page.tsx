import { mockStories } from "@/lib/mockStories";
import styles from "./page.module.css";
import FeedList from "@/features/feed/components/FeedList";

// temporarily news feed
// using mock data from @lib
export default function Home() {
  return (
    <main className={styles.container}>
        <FeedList news={mockStories} />
    </main>
  );
}