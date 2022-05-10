import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styled from 'styled-components'
import colors from '../utils/style/colors'
import Loader from '../utils/style/Loader'

// Style
const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const QuestionTitle = styled.h1`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`
const QuestionContent = styled.span`
    margin: 30px;
`
const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`


function Survey () {
    // useParams() recovers and passes parameters through a route
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    // Variables for recovering questions from API
    const [surveyData, setSurveyData] = useState([])
    // Loader
    const [isDataLoading, setDataLoading] = useState(false)
    // Error
    const [error, setError] = useState(false)
    
    // Recover questions from API
    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true) // Display loader
            try{
                const response = await fetch(`http://localhost:8000/survey`)
                const {surveyData} = await response.json()
                setSurveyData(surveyData)
            }
            catch(err) {
                console.log(err)
                setError(true)
            }
            finally {
                setDataLoading(false) // Hide loader
            }
        }
        fetchSurvey()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    // Return page
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to='/results'>Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey