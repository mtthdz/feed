import { PostMetadata } from "@/components/sections/DirectoryList";
import Link from "next/link";
import * as SC from "./PostCard.styles";
import CardNav from "../CardNav";

interface Props {
  metadata: PostMetadata;
}

/**
 * TODO: correct numbering; not from meta
 * TODO: align naming convention for posts
 * TODO: break up components
 * TODO: organize styling
 */
export default function PostCard({ metadata }: Props) {
  let url = metadata.url;

  return (
    <SC.CardContainer>
      <div className="card-index">
        <p>{metadata.number}</p>
      </div>

      <div className='card-main'>
        <SC.CardTitle href={url ? url : '#'} className='card-title'>
          {metadata.title}
          <span className='card-title-ref'>{url ? '(link)' : null}</span>
        </SC.CardTitle>

        <CardNav metadata={metadata} />
      </div>
    </SC.CardContainer>
  )
}
