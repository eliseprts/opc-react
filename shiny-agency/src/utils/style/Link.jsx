import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({$theme}) => ($theme === 'light' ? '#8186A0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
export default StyledLink