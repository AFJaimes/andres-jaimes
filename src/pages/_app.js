import 'styles/pageStyle.scss'
import { ThemeProvider } from 'contexts/ThemeContext'
import ThemeBar from 'components/ThemeBar/ThemeBar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThemeBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp