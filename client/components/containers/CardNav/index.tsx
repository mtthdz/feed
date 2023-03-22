import Link from "next/link";
import { CardNavStyles } from "./CardNav.styles";
import { PostMetadata } from "@/components/sections/DirectoryList";
import { SButton } from "@/components/styles/Button";

interface Props {
  metadata: PostMetadata;
}

export default function CardNav({ metadata }: Props) {
  let meta = metadata;
  return (
    <CardNavStyles>
      <ul>
        <li><SButton>+{meta.karma}</SButton></li>
        <li><Link href='#'>85 comments</Link></li>
        <li><Link href='#'>{meta.saved ? 'unsave' : 'save'}</Link></li>
        <li><Link href='#'>{meta.hidden ? 'unhide' : 'hide'}</Link></li>
        <li><Link href='#'>{meta.user}</Link></li>
        <li>2 hrs ago</li>
      </ul>
    </CardNavStyles>
  )
}