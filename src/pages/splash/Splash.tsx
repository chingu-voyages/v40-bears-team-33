import styled from "styled-components";
import { useAtom } from 'jotai';
import { setSplash } from '../../store';
import SplashGreeting from "./SplashGreeting";
import SplashRegister from './SplashRegister';
import SplashSignIn from './SplashSignIn';

const Splash = () => {

  const [ splashView, setSplashView ] = useAtom(setSplash);

  return (
    <Container>
      <TopSplash>
        <TextContainer>
          { splashView === 'register' ?
              <SplashRegister /> :
            splashView === 'sign_in' ?
              <SplashSignIn /> :
              <SplashGreeting /> 
          }
          </TextContainer>
      </TopSplash> 
    </Container>
  );
}; 

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
`

const TopSplash = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.primary};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 200px;
  width: 100%;
`


export default Splash
