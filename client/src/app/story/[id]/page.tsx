import StoryContent from "@/features/story/components/StoryContent";
import { mockComments } from "@/lib/mockComments";
import { mockStories } from "@/lib/mockStories"
import { IPost } from "@/types/API"

// TODO: fix type error
export default function StoryPage({
  params: { id }
}: {
  params: { id: string }
}) {

  if (!id) return <div>loading...</div>

  function getStory(id: string): IPost | undefined {
    return mockStories.find(story => story.id === id);
  }

  const story: IPost | undefined = getStory(id);

  return (
    <main>
      {story ?
        (
          <StoryContent content={story} />
        )
        : <p>something went wrong.</p>
      }
    </main>
  )
}