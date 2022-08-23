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
const InputWithIcon = ({ type, htmlFor, icon, onChange, id, placeholder }: Input) => {
  return (
    <>
      <FormLabel htmlFor={htmlFor}>
        {icon}
      </FormLabel>
      <Input
        id={id}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        type={type}
        required
      />
    </>
  )
}

const FormLabel = styled.label`
  border: .5px solid #222;
  height: 30px;
  border-radius: 3px 0px 0px 3px;
  padding: 10px 15px 0px 15px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.foreground}`


export default InputWithIcon
