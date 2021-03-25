import '../styles/globals.css'
import config from '../config'

function MyApp({ Component, pageProps }) {
  return <Component config={config} {...pageProps} />
}

export default MyApp
