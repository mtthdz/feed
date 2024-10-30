import styles from './FeedList.module.css'
import NewsItem from '../FeedItem';
import { IPost } from '@/types/API';

export default function FeedList(props: { news: IPost[] }) {
  return (
    <section className={styles.container}>
      {props.news.map((story, index) => <NewsItem story={story} order={index + 1} key={story.id} />)}
    </section>
  )
}