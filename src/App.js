import React from 'react'
import GlobalStyles from './globalStyles'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { ThemeProvider } from 'styled-components'

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
            </Routes>
        </ThemeProvider>
    )
}

export default App
