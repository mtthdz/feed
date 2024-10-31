import { IPost } from '@/types/API';
import styles from './CommentNav.module.css'
import Link from 'next/link';

export default function CommentNav(props: { comment: IPost }) {
  const comment = props.comment;
  const userRedirect = `/user/${comment.user_id}`;

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>+ {comment.score}</li>
        <li className={styles.navItem}><Link href={userRedirect}>{comment.user}</Link></li>
        <li className={styles.navItem}>2hr</li>
      </ul>
    </div>
  )
}