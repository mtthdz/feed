import SearchToggle from '@/components/elements/SearchToggle';
import Link from 'next/link';
import styled from 'styled-components';

export default function PrimaryNav() {
  return (
    <NavContainer>
      <Link className='site-title' href='/'>feed</Link>

      <MainNavStyles>
        <Link href='/createPost'>Create</Link>
        <SearchToggle />
        <Link href='/user'>Account</Link>
      </MainNavStyles>
    </NavContainer>
  )
}

const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  max-width: 90%;
  position: fixed;
  bottom: 20px;
  left: 50%;
  margin: 0 auto;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 1px #1e1e1e40;
  background-color: #1e1e1e80;
  backdrop-filter: blur(8px);
  transform: translate(-50%, 0);
  z-index: 10;

  .site-title {
    width: 15%;
    font-weight: 500;
    font-size: 1.6rem;
  }

  a {
    padding: 2px;
  }
`;

const MainNavStyles = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;

    & > * {
      margin-right: 1rem;
    }

    & > *:last-child {
      margin-right: 0;
    }
`;