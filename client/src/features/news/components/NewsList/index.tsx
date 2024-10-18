import { IStory } from '@/types/API';
import styles from './NewsList.module.css'
import NewsItem from '../NewsItem';

export default function NewsList(props: { news: IStory[] }) {
  return (
    <section className={styles.container}>
      {props.news.map((story, index) => <NewsItem story={story} order={index + 1} key={story.id} />)}
    </section>
  )
}