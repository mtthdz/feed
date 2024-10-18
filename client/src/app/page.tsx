import { newsAPI } from "@/lib/newsAPI";
import styles from "./page.module.css";
import { IStory } from "@/types/API";
import NewsList from "@/features/news/components/NewsList";

// temporarily news feed
export default function Home() {
  const mockNews: IStory[] = newsAPI;

  return (
    <main className={styles.container}>
        <NewsList news={mockNews} />
    </main>
  );
}