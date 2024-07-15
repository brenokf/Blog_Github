import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GithubBlogProvider } from './context/GithubBlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubBlogProvider>
          <Router />
        </GithubBlogProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
