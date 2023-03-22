import Link from 'next/link';
import * as SS from './PrimaryNav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SButton } from '@/components/styles/Button';

interface Props {
  modalToggle: () => void;
}

export default function PrimaryNav({ modalToggle }: Props) {
  return (
    <SS.BlurredContainer>
      <Link className='site-title' href='/'>feed</Link>

      <SS.Nav>
        <ul>
          <li><SButton type='button' onClick={() => modalToggle()}>Search</SButton></li>
          <li><Link href='/createPost'>Create</Link></li>
          <li><Link href='/user'>Account</Link></li>
          <li><Link href='https://github.com/mtthdz/feed' target='_blank'><FontAwesomeIcon icon={ faGithub } /></Link></li>
        </ul>
      </SS.Nav>
    </SS.BlurredContainer>
  )
}
