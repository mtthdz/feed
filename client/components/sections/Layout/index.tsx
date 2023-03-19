import { ReactNode } from "react"
import { WrapperStyles } from "../../styles/WrapperStyles"
import PrimaryNav from "../PrimaryNav"

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return(
    <WrapperStyles>
      <PrimaryNav />
      <main>{children}</main>
    </WrapperStyles>
  )
}