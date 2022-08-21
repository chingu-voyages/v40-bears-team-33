import styled from 'styled-components'
import { useAtom } from 'jotai'
import { motion } from 'framer-motion'
import { sidebarToggle } from '../store'

const Sidebar = () => {

  const [open, setOpen] = useAtom(sidebarToggle)

  return (
    <Container>
      {open === true
        ? <motion.div
          layout
          data-genre={true}
          initial={{ width: "0px" }}
          className="sidebar"
        >
          <InnerContainer>
            <Link>
              new wager
            </Link>
            <Link>
              active wagers
            </Link>
            <Link>
              leaderboards
            </Link>
            <Link>
              settings
            </Link>
          </InnerContainer>
        </motion.div>
        : <motion.div layout className="child" />
      }

    </Container>
  )
}

const Container = styled.nav`
`

const InnerContainer = styled.div`
  display: flex;
  font-family: 'Press Start 2p';
  flex-direction: column;
  justify-content: space-around;
  margin-top: 200px;
  width: 100%;
  height: 50%;
  color: ${({ theme }) => theme.colors.primary}
`

const Link = styled.h3`
  display: flex;
  font-size: 1.8rem;
  cursor: pointer;
  margin: auto;
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`

export default Sidebar
