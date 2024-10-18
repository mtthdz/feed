'use client';

import { IStory } from '@/types/API';
import styles from './ItemNav.module.css'
import Link from 'next/link';

// client function to support story voting
// TODO: isolate voting component into own RCC
export default function ItemNav(props: { story: IStory }) {
  const story = props.story;
  const storyRedirect = `/story/${story.id}`;
  const userRedirect = `/user/${story.user_id}`;

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>+ {story.upvote_count}</li>
        <li className={styles.navItem}><Link href={storyRedirect}>{story.comment_count} comments</Link></li>
        <li className={styles.navItem}><Link href={userRedirect}>{story.user_name}</Link></li>
      </ul>
    </div>
  )
}