import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/components/GlobalStyle'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
