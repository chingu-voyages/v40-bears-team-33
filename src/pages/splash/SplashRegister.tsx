import styled from "styled-components"
import InputWithIcon from "../../components/ui/InputWithIcon";
import { Button } from "../../components/ui/Buttons.styles"
import { FaUserAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useAtom } from 'jotai'
import { setSplash } from '../../store'

const SplashRegister = () => {

  const [ _splashView, setSplashView ] = useAtom(setSplash)
  return (
  <Container>
    <InputContainer>
    <InputWithIcon 
      type="email"
      htmlFor="email"
      icon={<HiMail size="12px" />}
      onChange={() => console.log("function")}
      id="email" 
      placeholder="email"
    />
    </InputContainer>
    <InputContainer>
    <InputWithIcon 
      type="text"
      htmlFor="username"
      icon={<FaUserAlt  size="12px"/>}
      onChange={() => console.log("function")}
      id="username" 
      placeholder="username"
    />
    </InputContainer>
    <InputContainer>
    <InputWithIcon 
      type="password"
      htmlFor="password"
      icon={<RiLockPasswordFill size="12px" />}
      onChange={() => console.log("function")}
      id="password" 
      placeholder="password"
    />
    </InputContainer>
    <Buttons>
    <Button width="200px">
      Register
    </Button>
    <SwitchForm onClick={() => setSplashView('sign_in')}>
      Already have an account? Sign in instead.
    </SwitchForm>
    </Buttons>
  </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Buttons = styled.div`
  display: flex;
  flex-direction:column;
`

const SwitchForm = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  font-size: .8rem;
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`

export default SplashRegister

