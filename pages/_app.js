import '@/src/styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add( fas, fab )

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
