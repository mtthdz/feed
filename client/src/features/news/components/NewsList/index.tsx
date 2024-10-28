import styles from './NewsList.module.css'
import NewsItem from '../NewsItem';
import { IPost } from '@/types/API';

export default function NewsList(props: { news: IPost[] }) {
  return (
    <section className={styles.container}>
      {props.news.map((story, index) => <NewsItem story={story} order={index + 1} key={story.id} />)}
    </section>
  )
}