import { mockStories } from "@/lib/mockStories";
import { IPost } from "@/types/API";

export function getStory(id: string): IPost | undefined {
  return mockStories.find(story => story.id === id);
}