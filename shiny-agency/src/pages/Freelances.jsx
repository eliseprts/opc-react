import { useState, useEffect } from 'react'

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

    // Variables for recovering data from API
    const [freelancersList, setFreelancersList] = useState([])
    // Loader
    const [isDataLoading, setDataLoading] = useState(false)
    // Error
    const [error, setError] = useState(false)

    // Recover data from API
    useEffect(() => {
        async function fetchFreelancers() {
            setDataLoading(true) // Display loader
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const {freelancersList} = await response.json()
                setFreelancersList(freelancersList)
            }
            catch(err) {
                console.log(err)
                setError(true)
            }
            finally {
                setDataLoading(false) // Hide loader
            }
        }
        fetchFreelancers()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    // Return page
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
            {isDataLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
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