// Import PropTypes to declare the type of props that is expected when we recover it in a component
import PropTypes from 'prop-types'

import DefaultPicture from '../assets/profile.png'

function Card({label, title, picture}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: 15}}>
            <span>{label}</span>
            <img src={picture} alt='freelance' height={80} width={80}/>
            <span>{title}</span>
        </div>
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