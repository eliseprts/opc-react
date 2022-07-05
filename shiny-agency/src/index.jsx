
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, SurveyProvider } from './utils/context/context'

import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import Survey from './pages/Survey/Survey.jsx'
import Error from './components/Error/Error'
import Results from './pages/Results/Results.jsx'
import Freelances from './pages/Freelances/Freelances.jsx'
import Footer from './components/Footer/Footer.jsx'
import GlobalStyle from './utils/style/GlobalStyle'
import Profile from './pages/Profile/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/survey/:questionNumber' element={<Survey/>}/>
            <Route path='/results' element={<Results/>}/>
            <Route path='/freelances' element={<Freelances/>}/>
            <Route path='/profile/:id' render={(props) => <Profile {...props} />} element={<Profile/>}/>
            {/* Route (with path='*') which send back to error page if the path in the URL has no matching, to place à the end of <Routes/> */}
            <Route path='*' element={<Error/>}/> 
        </Routes>
        <Footer />
      </SurveyProvider>
    </ThemeProvider>
  </BrowserRouter>
)