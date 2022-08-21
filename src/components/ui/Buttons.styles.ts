import styled from 'styled-components'

export const Button = styled.button<{ width: string }>`
  text-align: center;
  font-family: ${props => props.theme.fonts.sans};
  margin: auto;
  border: 2px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.foreground};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 40px;
    &:hover {
      cursor: pointer;
      text-decoration: underline 2px solid; 
      text-underline-offset: 2px;
    }
    &:focus {
      outline: 2px solid ${props => props.theme.colors.accent};
      outline-offset: 0px;
      background-color: ${props => props.theme.colors.accent};
    }
    &:active {
      border: 2px solid ${props => props.theme.colors.accent};
      transition:  .3s all ease-out;
    }
`

export const ButtonOutline = styled.button<{ width: string }>`
  text-align: center;
  font-family: ${props => props.theme.fonts.sans};
  margin: auto;
  border: 2px solid ${props => props.theme.colors.primary};
  background-color: transparent;
  color: ${props => props.theme.colors.background};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 40px;
    &:hover {
      cursor: pointer;
      text-decoration: underline 2px solid; 
      text-underline-offset: 2px;
    }
    &:focus {
      outline: 2px solid ${props => props.theme.colors.accent};
      outline-offset: 0px;
      color: ${props => props.theme.colors.foreground};
      background-color: ${props => props.theme.colors.accent};
      transition: .2s all ease-out;
    }
    &:active {
      border: 2px solid ${props => props.theme.colors.accent};
      transition:  .3s all ease-out;
    }
`
