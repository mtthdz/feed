import { ReactNode, useState } from "react"
import { WrapperStyles } from "../../styles/WrapperStyles"
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
    <WrapperStyles>
      <main>{children}</main>
      <PrimaryNav modalToggle={modalToggle} />
      { modalVisible ? <SearchModal modalToggle={modalToggle} /> : null }
    </WrapperStyles>
  )
}