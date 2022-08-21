import styled from 'styled-components';

export const Input = styled.input`
  background-color: white;
  border: .5px solid #222;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 12px;
  padding-left: 10px !important;
  height: 25px;
  width: 175px;
  padding: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 20px !important;
    &:focus {
      outline: .5px solid ${props => props.theme.colors.accent};
      outline-offset: 0px;
      background-color: ${props => props.theme.colors.accent};
    }
    &:active {
      border: .5px solid ${props => props.theme.colors.accent};
      transition:  .3s all ease-out;
    }
`

