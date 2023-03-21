import { ReactNode } from "react"
import { WrapperStyles } from "../../styles/WrapperStyles"
import PrimaryNav from "../PrimaryNav"
import SearchModal from "../SearchModal";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return(
    <WrapperStyles>
      <main>{children}</main>
      <PrimaryNav />
      <SearchModal />
    </WrapperStyles>
  )
}