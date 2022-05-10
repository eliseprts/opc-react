
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/context/context'

import Header from './components/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/survey/:questionNumber' element={<Survey/>}/>
          <Route path='/results' element={<Results/>}/>
          <Route path='/freelances' element={<Freelances/>}/>
          {/* Route (with path='*') which send back to error page if the path in the URL has no matching, to place à the end of <Routes/> */}
          <Route path='*' element={<Error/>}/> 
      </Routes>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
)