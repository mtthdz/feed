import { PostMetadata } from "@/components/sections/DirectoryList";
import Link from "next/link";
import styled from "styled-components"
import { CardStyles, CardTitleStyles } from "./PostCard.styles";
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

  return (
    <CardStyles>
      <div className="card-number">
        <p>{metadata.number}</p>
      </div>

      <div className='card-main'>
        <CardTitleStyles>
          <Link href='#' className='card-title'>{metadata.title}</Link>
          <Link href='#' className='card-title-ref'>(<span>{'hello'}</span>)</Link>
        </CardTitleStyles>

        <CardNav metadata={metadata} />
      </div>
    </CardStyles>
  )
}
