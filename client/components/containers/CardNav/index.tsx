import Link from "next/link";
import { CardNavStyles } from "./CardNav.styles";
import { SButton } from "@/components/styles/Button";
import { PostMeta } from "@/api/posts";

interface Props {
  props: PostMeta;
}

export default function CardNav({ props }: Props) {
  let meta = props;

  return (
    <CardNavStyles>
      <ul>
        <li><SButton>+{meta.karma}</SButton></li>
        <li><Link href='/post'>85 comments</Link></li>
        <li><SButton>save</SButton></li>
        <li><SButton>hide</SButton></li>
        <li><Link href='/user'>{meta.user}</Link></li>
        <li>2 hrs ago</li>
      </ul>
    </CardNavStyles>
  )
}