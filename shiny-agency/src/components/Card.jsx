// Import PropTypes to declare the type of props that is expected when we recover it in a component
import PropTypes from 'prop-types'

// Import styled components
import styled from 'styled-components'

import DefaultPicture from '../assets/profile.png'
import colors from '../utils/style/colors'

// Style
const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`
const CardTitle = styled.span`
    color: black;
    font-size: 22px;
    font-weight: normal;
    align-self: center;
`
const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    align-self: center;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

// Function
function Card({label, title, picture}) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt='freelance'/>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

// Type specification of each prop
Card.propTypes = {
    label: PropTypes.string.isRequired,
    // isRequired precise that a prop is required for the proper functioning of the app
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

// Specification of default prop 
Card.defaultProps = {
    label: 'Freelance',
    title: 'Jean Freddy',
    picture: DefaultPicture
}

export default Card