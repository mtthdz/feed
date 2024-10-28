'use client';

import { IPost } from '@/types/API';
import styles from './ItemNav.module.css'
import Link from 'next/link';

// client function to support story voting
// TODO: isolate voting component into own RCC
export default function ItemNav(props: { story: IPost }) {
  const story = props.story;
  const storyRedirect = `/story/${story.id}`;
  const userRedirect = `/user/${story.user_id}`;

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>+ {story.score}</li>
        <li className={styles.navItem}><Link href={storyRedirect}>{story.descendants} comments</Link></li>
        <li className={styles.navItem}><Link href={userRedirect}>{story.user}</Link></li>
      </ul>
    </div>
  )
}