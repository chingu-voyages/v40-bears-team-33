import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Light } from './Themes.style'

function App() {

  // if authorized return app
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <Navbar />
        <Sidebar />
      </Container>
    </ThemeProvider>
  )

  // else return splash page
  // return ( <Container><Splash /></Container)

}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  background-color: ${({ theme }) => theme.colors.background};
`

export default App
