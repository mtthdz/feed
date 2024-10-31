import { IPost } from '@/types/API';
import styles from './CommentItem.module.css'
import CommentList from '../CommentList';
import CommentNav from '../CommentNav';

export default function CommentItem(props: { comment: IPost }) {
  const comment = props.comment;
  console.log(comment);

  return (
    <div className={styles.container}>
      <div>
        <CommentNav comment={comment} />
        <p>{comment.content}</p>
      </div>

      { comment.children ? (
        <div className={styles.childContainer}>
          <CommentList comments={comment.children} />
        </div>
        )
        : null
      }
    </div>
  )
}