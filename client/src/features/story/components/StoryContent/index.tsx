import { IPost } from '@/types/API';
import styles from './StoryContent.module.css';
import ItemNav from '@/features/feed/components/ItemNav';

/**
 * TODO: convert ItemNav into global nav component
 */
export default function StoryContent(props: { content: IPost }) {
	const content = props.content;

	return (
		<section className={styles.container}>
			<p className={styles.contentTitle}>{content.title}</p>
			<p>{content.content}</p>
			<ItemNav story={content} />
		</section>
	)
}