import styled from "styled-components"
import { Button, ButtonOutline } from "../../components/ui/Buttons.styles"
import { useAtom } from 'jotai' 
import { setSplash } from '../../store'

const SplashGreeting = () => {

  const [ _splashView, setSplashView ] = useAtom(setSplash)

  return (

    <>
        <Headline>
          PayUp helps you settle scores, then settle up.
        </Headline>
          <Buttons>
          <Button 
            onClick={() => setSplashView('register')} 
            width="140px"
          >
              get started
          </Button>
          <ButtonOutline 
            onClick={() => setSplashView('sign_in')}
            width="140px"
          >
              sign in
          </ButtonOutline>
          </Buttons>
          </>
  )
}

const Headline = styled.h1`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 500px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.sans};
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin: auto;
`


export default SplashGreeting
