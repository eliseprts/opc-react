import styled from 'styled-components'

import HomeIllustration from '../assets/home-illustration.svg'
import colors from '../utils/style/colors'
import StyledLink from '../utils/style/Link'

// Style
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 55px;
  background-color: ${colors.backgroundLight}
`
const LeftCol = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
const StyledTitle = styled.h1`
  font-size: 50px;
  padding-bottom: 30px;
  max-width: 550px;
  line-height: 50px;
`
const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <StyledTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>
          <StyledLink to='/survey/1' $isFullLink>Faire le test</StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
