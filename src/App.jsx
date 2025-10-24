
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import WebDevelopment from './Pages/WebDevelopment'
import AppDevelopment from './Pages/AppDevelopment'
import SEOServices from './Pages/SEOServices'
import Technologies from './Pages/Technologies'
import Contacts from './Pages/Contacts'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TopArrow from './Components/TopArrow'
import ThemeSwitcher from './Components/ThemeSwitcher'
import { ThemeProvider } from './Context/ThemeContext'

// Import theme styles
import './styles/theme.css'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <TopArrow/>
        
        {/* Global Theme Switcher - Responsive Fixed Position */}
        <div className="fixed top-4 right-4 sm:top-1/2 sm:right-4 sm:transform sm:-translate-y-1/2 z-50">
          <ThemeSwitcher />
        </div>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/web-development' element={<WebDevelopment/>} />
          <Route path='/app-development' element={<AppDevelopment/>} />
          <Route path='/seo-services' element={<SEOServices/>} />
          <Route path='/technologies' element={<Technologies/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
