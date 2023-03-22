import PostCard from "@/components/containers/PostCard";
import DirectoryList from "@/components/sections/DirectoryList";
import styled from "styled-components"

// TODO: add pagination components
export default function DirectoryPage() {
  return (
    <DirectoryStyles>
      <DirectoryList />
    </DirectoryStyles>
  )
}

const DirectoryStyles = styled.div`
  margin-top: 50px;
`;