
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TopArrow from './Components/TopArrow'
import ScrollToTop from './Components/ScrollToTop'
// import ThemeSwitcher from './Components/ThemeSwitcher'
import { ThemeProvider } from './Context/ThemeContext'
import { appRoutes } from './routes/appRoutes'

// Import theme styles
import './styles/theme.css'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <TopArrow/>
        
        <Routes>
          {appRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={React.createElement(component)} />
          ))}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
