import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Splash from './pages/splash/Splash'
import { Light } from './Themes.style'
import { isAuth } from './store'
import { useAtom } from 'jotai'

function App() {

  const [auth, _setAuth] = useAtom(isAuth);

  if (auth) {
  return (
    <ThemeProvider theme={Light}>
      <Container>
        <Navbar />
        <Sidebar />
      </Container>
    </ThemeProvider>
  );

  } else {
    return (
    <ThemeProvider theme={Light}>
      <Container>
        <Splash />
      </Container>
    </ThemeProvider>
    )
  };

  // else return splash page
  // return ( <Container><Splash /></Container)

};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  background-color: ${({ theme }) => theme.colors.background};
`

export default App
