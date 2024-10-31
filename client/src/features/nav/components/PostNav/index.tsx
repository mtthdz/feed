import { IPost } from '@/types/API';
import styles from './PostNav.module.css'
import Link from 'next/link';

/**
 * TODO: expand props for optional list item renders
 * TODO: implement timestamps
 * TODO: implement scoring functionality (requires API)
 */
export default function PostNav(props: { post: IPost }) {
  const post = props.post;
  const storyRedirect = `/story/${post.id}`;
  const userRedirect = `/user/${post.user_id}`;

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>+ {post.score}</li>
        <li className={styles.navItem}><Link href={storyRedirect}>{post.descendants} comments</Link></li>
        <li className={styles.navItem}><Link href={userRedirect}>{post.user}</Link></li>
      </ul>
    </div>
  )
}