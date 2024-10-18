import ItemNav from "@/features/news/components/ItemNav";
import { newsAPI } from "@/lib/newsAPI"
import { IStory } from "@/types/API"

// TODO: fix type error
export default function StoryPage({
  params: { id }
}: {
  params: { id: string }
}) {

  if (!id) return <div>loading...</div>

  function getStory(id: string): IStory | undefined {
    return newsAPI.find(story => story.id === id);
  }

  const story: IStory | undefined = getStory(id);

  return (
    <main>
      <p>{story ? story.title : null}</p>
      <p>{story ? story.content : null}</p>
      <ItemNav story={story} />
    </main>
  )
}