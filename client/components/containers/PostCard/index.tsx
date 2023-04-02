import { PostProps } from "@/components/sections/DirectoryList";
import * as SC from "./PostCard.styles";
import CardNav from "../CardNav";

interface Props {
  props: PostProps;
}

// FIXME: destructure props properly
export default function PostCard({ props }: Props) {
  let number = props.Number;
  let meta = props.Metadata;

  return (
    <SC.CardContainer>
      {
        number ?
        <div className="card-index">
          <p>{number}</p>
        </div> :
        null
      }

      <div className='card-main'>
        <SC.CardTitle href={meta.url ? meta.url : '/post'} className='card-title'>
          {meta.title}
          {meta.url ? <span className='card-title-ref'>(link)</span> : null}
        </SC.CardTitle>

        <CardNav props={meta} />
      </div>
    </SC.CardContainer>
  )
}
