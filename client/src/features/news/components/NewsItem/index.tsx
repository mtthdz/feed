import { IPost } from '@/types/API';
import styles from './NewsItem.module.css';
import ItemNav from '../ItemNav';
import Link from 'next/link';

// TODO: reorg into dedicated post component, its recycled within `/story/[id]`
export default function NewsItem(props: { story: IPost, order: number }) {
  const story = props.story;

  // external vs internal URL redirect
  const redirect = story.url
    ? story.url
    : `/story/${story.id}`;

  // strips domain protocol & subdomain
  const URLDomain = story.url ?
    story.url
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