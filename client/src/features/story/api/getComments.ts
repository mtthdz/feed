import { mockComments } from "@/lib/mockComments";
import { IPost } from "@/types/API";

export function getComments(): IPost[] | undefined {
  return mockComments;
}