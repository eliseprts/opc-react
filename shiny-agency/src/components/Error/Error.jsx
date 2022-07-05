import { useTheme } from '../../utils/hooks/hooks'

import colors from '../../utils/style/colors'
import styled from 'styled-components'

import ErrorIllustration from '../../assets/404.svg'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: ${({theme}) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`
const ErrorTitle = styled.h1`
    font-weight: 300;
    color: ${({theme}) => (theme === 'light' ? "#000000" : '#ffffff')}
`
const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${({theme}) => (theme === 'light' ? "#000000" : '#ffffff')}
`
const Illustration = styled.img`
    max-width: 800px;
`

function Error() {
    const {theme} = useTheme()
    
    return (
        <ErrorWrapper theme={theme}>
            <ErrorTitle theme={theme}>Oups...</ErrorTitle>
            <Illustration src={ErrorIllustration}/>
            <ErrorSubtitle theme={theme}>Il semblerait que la page que vous cherchez n'existe pas</ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error