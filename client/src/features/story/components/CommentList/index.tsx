import { IPost } from '@/types/API';
import styles from './CommentList.module.css'
import CommentItem from '../CommentItem';

export default function CommentList(props: { comments: IPost[]}) {
  return (
    <section className={styles.container}>
      {props.comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)}
    </section>
  )
}