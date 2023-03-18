import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/components/styles/GlobalStyles'
import { WrapperStyles } from '@/components/styles/WrapperStyles';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <WrapperStyles>
        <Component {...pageProps} />
      </WrapperStyles>
    </>
  )
}
