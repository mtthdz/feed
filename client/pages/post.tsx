import CardNav from "@/components/containers/CardNav";
import PostCard from "@/components/containers/PostCard";

export default function PostPage() {
  let sampleData = {
    id: 92840238421,
    number: 1,
    title: 'Launch HN: Bloop (YC S21) - Code Search with GPT-4',
    url: '',
    karma: 2,
    saved: false,
    hidden: false,
    user: 'mtthdz',
    date: '',
    content: '',
  };

  return(
    <div>
      <PostCard props={{ Metadata: sampleData }} />
    </div>
  )
}