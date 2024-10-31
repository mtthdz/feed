import FeedItem from '../FeedItem';
import styles from './FeedList.module.css'
import { IPost } from '@/types/API';

export default function FeedList(props: { stories: IPost[] }) {
  return (
    <section className={styles.container}>
      {props.stories.map((story, index) => <FeedItem story={story} order={index + 1} key={story.id} />)}
    </section>
  )
}