import { useFetch } from '../utils/hooks/hooks'

import styled from 'styled-components'
import colors from '../utils/style/colors'

// import DefaultPicture from '../assets/profile.png'
import Card from '../components/Card'
import Loader from '../utils/style/Loader'


// Style

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    color: ${colors.secondary};
    text-align: center;
    padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Freelances() {

    const {data, isLoading, error} = useFetch(`http://localhost:8000/freelances`)
    const {freelancesData} = data

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    // Return page
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancesData.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    )
}

export default Freelances