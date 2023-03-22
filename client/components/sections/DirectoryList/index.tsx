import { sampleEntries } from "@/api/sampleData";
import PostCard from "@/components/containers/PostCard";

export interface PostMetadata {
  number?: number;
  title: string;
  karma?: number;
  saved: boolean;
  hidden: boolean;
  user?: string;
  date?: string;
}

export default function DirectoryList() {
  const postData = sampleEntries;

  return (
    <>
      {postData.map((singlePost, index) => {
        return <PostCard metadata={singlePost} key={index} />
      })}
    </>
  )
}