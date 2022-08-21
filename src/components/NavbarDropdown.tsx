import styled from 'styled-components'

const NavbarDropdown = () => {
  return (
    <Container>
      <Link>
        &nbsp;new wager
      </Link>
      <Link>
        &nbsp;active wagers
      </Link>
      <Link>
        &nbsp;leaderboards
      </Link>
      <Link>
        &nbsp;settings
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-right: 80px;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`

const Link = styled.div`
  display: flex;
  margin: auto;
  height: 2.4rem;
  width: 100%;
  padding-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}; 
    color:   ${({ theme }) => theme.colors.accent}

  }
`

export default NavbarDropdown
