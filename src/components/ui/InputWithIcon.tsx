import styled from 'styled-components';
import { Input } from './Inputs.styles'

interface Input {
  type: string;
  htmlFor: string;
  icon: any;
  onChange: Function;
  id: string;
  placeholder: string;
}
const InputWithIcon = ({ type, htmlFor, icon, onChange, id, placeholder  }: Input) => {
  return (
          <>
          <FormLabel htmlFor={htmlFor}>
            {icon}
          </FormLabel>
          <Input
            id={id}
            onChange={() => onChange()}
            placeholder={placeholder}
            type={type}
            required
          />
    </>
  )
}

const FormLabel = styled.label`
  border: .5px solid #222;
  height: 25px;
  border-radius: 3px 0px 0px 3px;
  padding: 5px 15px 5px 15px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.foreground}`


export default InputWithIcon
