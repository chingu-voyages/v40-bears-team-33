import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import Popup from 'reactjs-popup'
import NavbarDropdown from './NavbarDropdown'
import { useAtom } from 'jotai'
import { sidebarToggle } from '../store'

const Navbar = () => {

  const [sidebar, setSidebar] = useAtom(sidebarToggle)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <Container>
      <Logo>
        payUP
      </Logo>
      <Popup
        trigger={
          <MenuLarge />
        }
        on={['click']}
        position="bottom center"
        closeOnEscape
        closeOnDocumentClick
      >
        <NavbarDropdown />
      </Popup>
      <MenuSmall onClick={toggleSidebar}>
        <GiHamburgerMenu size="48px" />
      </MenuSmall>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 600px) {
      background-color: transparent;
    }
`

const Logo = styled.span`
  display: flex;
  font-family: 'Press Start 2p', cursive;
  font-size: 3rem;
  margin-top: 30px;
  margin-left: 50px;
  color: ${({ theme }) => theme.colors.accent};
    @media(max-width: 600px) {
      color: ${({ theme }) => theme.colors.primary};
    }
`

const MenuLarge = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 100%;
  margin-top: 10px;
  margin-right: 50px;
  cursor: pointer;
    @media(max-width: 600px) {
      display: none;
    }
`

const MenuSmall = styled.div`
  display: none;
    @media(max-width: 600px) {
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
      position: sticky;
      margin-top: 10px;
      margin-right: 20px;
      cursor: pointer;
      z-index: 1000;
    }
`

export default Navbar
