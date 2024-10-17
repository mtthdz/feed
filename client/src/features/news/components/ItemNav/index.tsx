'use client';

import { IStory } from '@/types/API';
import styles from './ItemNav.module.css'
import Link from 'next/link';

// client function to support story voting
export default function ItemNav(props: { story: IStory }) {
  const navItems = props.story;

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>+ {navItems.upvote_count}</li>
        <li className={styles.navItem}><Link href={'/'}>{navItems.comment_count} comments</Link></li>
        <li className={styles.navItem}><Link href={'/'}>{navItems.user_name}</Link></li>
      </ul>
    </div>
  )
}