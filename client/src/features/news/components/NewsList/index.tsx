import { IStory } from '@/types/API';
import styles from './NewsList.module.css'

export default function NewsList(props: { news: IStory[] }) {
  console.log(props);

  return (
    <div className={styles.container}><p>news</p></div>
  )
}