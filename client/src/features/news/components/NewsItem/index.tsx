import { IStory } from '@/types/API';
import styles from './NewsItem.module.css';
import ItemNav from '../ItemNav';
import Link from 'next/link';

export default function NewsItem(props: { story: IStory, order: number }) {
  const story = props.story;
  const redirect = story.url_ref
    ? story.url_ref
    : { pathName: `/story`, query: { id: story.id } };

  const URLDomain = story.url_ref ?
    story.url_ref
      .replace(/(https?:\/\/(www\.)?)/, '') : null;

  return (
    <div className={styles.container}>
      <p className={styles.itemOrder}>{props.order}</p>
      <div className={styles.navContainer}>
        <p className={styles.itemTitle}>
          <Link href={redirect} className={styles.itemLink}>
            {story.title}
            {
              URLDomain
                ? <span className={styles.itemSubtitle}>({URLDomain})</span>
                : null
            }
          </Link>
        </p>
        <ItemNav story={story} />
      </div>
    </div>
  )
}