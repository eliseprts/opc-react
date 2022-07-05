import { useFetch, useTheme } from '../../utils/hooks/hooks'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Card from '../../components/Card/Card'
import Loader from '../../utils/style/Loader'

// Style
const CardsContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
`

const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Freelances() {
    const { theme } = useTheme()

    // Recovering data from API with custom hook useFetch
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances`
    )

    const freelancersList = data?.freelancersList

    if (error) {
        return <span>Il y a un problème</span>
    }

    // Return page
    return (
        <div>
        <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
        <PageSubtitle theme={theme}>
            Chez Shiny nous réunissons les meilleurs profils pour vous.
        </PageSubtitle>
        {isLoading ? (
            <LoaderWrapper>
                <Loader theme={theme} data-testid='loader'/>
            </LoaderWrapper>
        ) : (
            <CardsContainer>
            {freelancersList?.map((profile) => (
                <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                    <Card
                        
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                        theme={theme}
                    />
                </Link>
            ))}
            </CardsContainer>
        )}
        </div>
    )
}

export default Freelances