import { ReactNode, useState } from "react"
import * as SS from './Layout.styles';
import PrimaryNav from "../PrimaryNav"
import SearchModal from "../SearchModal";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [ modalVisible, setModalVisible ] = useState(false);

  function modalToggle() {
    setModalVisible(!modalVisible);
  }

  return(
    <SS.Wrapper>
      <main>{children}</main>
      <PrimaryNav modalToggle={modalToggle} />
      { modalVisible ? <SearchModal modalToggle={modalToggle} /> : null }
    </SS.Wrapper>
  )
}