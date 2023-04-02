import { PostMeta, samplePosts } from "@/api/posts";
import PostCard from "@/components/containers/PostCard";
import styled from "styled-components";

export interface PostProps {
  Number?: number;
  Metadata: PostMeta;
}

export default function DirectoryList() {
  const posts: PostMeta[] = samplePosts;

  return (
    <ul>
      {posts.map((single: PostMeta, index: number) => {
        return <PostCard props={{Number: index +1, Metadata: single}} key={index} />
      })}
    </ul>
  )
}