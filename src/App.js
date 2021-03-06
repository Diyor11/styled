import React from 'react'
import GlobalStyles from './globalStyles'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { ThemeProvider } from 'styled-components'
import Services from './pages/services/Services'
import ContactPage from './pages/contact/Contact'

const App = () => {

    const theme = {
        yellow: '#eeb11b',
        blue: '#00091F'
    }
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
