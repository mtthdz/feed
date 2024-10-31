import CommentList from "@/features/story/components/CommentList";
import StoryContent from "@/features/story/components/StoryContent";
import { mockComments } from "@/lib/mockComments";
import { mockStories } from "@/lib/mockStories"
import { IPost } from "@/types/API"

export default function StoryPage({
  params: { id }
}: {
  params: { id: string }
}) {
  if (!id) return <div>loading...</div>

  function getStory(id: string): IPost | undefined {
    return mockStories.find(story => story.id === id);
  }

  function getComments(): IPost[] | undefined {
    return mockComments;
  }

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