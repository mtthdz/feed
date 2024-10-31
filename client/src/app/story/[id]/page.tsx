import { getComments } from "@/features/story/api/getComments";
import { getStory } from "@/features/story/api/getStory";
import CommentList from "@/features/story/components/CommentList";
import StoryContent from "@/features/story/components/StoryContent";
import { IPost } from "@/types/API"

export default function StoryPage({
  params: { id }
}: {
  params: { id: string }
}) {
  if (!id) return <div>loading...</div>

  const story: IPost | undefined = getStory(id);
  const comments: IPost[] | undefined = getComments();

  return (
    <main>
      {story && comments ?
        (
          <>
            <StoryContent content={story} />
            <CommentList comments={comments} />
          </>
        )
        : <p>something went wrong.</p>
      }
    </main>
  )
}