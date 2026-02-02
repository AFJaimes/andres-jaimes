import 'styles/pageStyle.scss'
import { ThemeProvider } from 'contexts/ThemeContext'
import { LanguageProvider } from 'contexts/LanguageContext'
import ThemeBar from 'components/ThemeBar/ThemeBar'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp