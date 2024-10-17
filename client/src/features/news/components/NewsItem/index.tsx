import { IStory } from '@/types/API';
import styles from './NewsItem.module.css';
import ItemNav from '../ItemNav';

export default function NewsItem(props: { story: IStory, order: number }) {
  const story = props.story;
  const URLDomain = story.url_ref ?
    story.url_ref
      .replace(/(https?:\/\/(www\.)?)/, '') : null;

  return (
    <div className={styles.container}>
      <p className={styles.itemOrder}>{props.order}</p>
      <div className={styles.navContainer}>
        <p className={styles.itemTitle}>
          {story.title}
          {
            URLDomain
            ? <span className={styles.itemSubtitle}>({URLDomain})</span>
            : null
          }
        </p>
        <ItemNav story={story} />
      </div>
    </div>
  )
}