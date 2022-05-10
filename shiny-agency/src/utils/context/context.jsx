// Import of createContext
import {createContext, useState} from 'react'

// Initialization of Context for the theme 
export const ThemeContext = createContext()

// Use of Context for the theme
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// Initialization of Context for survey
export const SurveyContext = createContext()

// Use of Context for survey
export const SurveyProvider = ({children}) => {
    const [answers, setAnswers] = useState([])
    const saveAnswers = (newAnswers) => {
        setAnswers({...answers, ...newAnswers})
    }

    return (
        <SurveyContext.Provider value={{answers, saveAnswers}}>
            {children}
        </SurveyContext.Provider>
    )
}
