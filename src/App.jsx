
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import WebDevelopment from './Pages/WebDevelopment'
import AppDevelopment from './Pages/AppDevelopment'
import SEOServices from './Pages/SEOServices'
import DigitalMarketing from './Pages/DigitalMarketing'
import UIUXDesign from './Pages/UIUXDesign'
import ECommerceSolutions from './Pages/ECommerceSolutions'
import Technologies from './Pages/Technologies'
import Contacts from './Pages/Contacts'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TopArrow from './Components/TopArrow'
// import ThemeSwitcher from './Components/ThemeSwitcher'
import { ThemeProvider } from './Context/ThemeContext'

// Import theme styles
import './styles/theme.css'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <TopArrow/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/web-development' element={<WebDevelopment/>} />
          <Route path='/app-development' element={<AppDevelopment/>} />
          <Route path='/seo-services' element={<SEOServices/>} />
          <Route path='/digital-marketing' element={<DigitalMarketing/>} />
          <Route path='/ui-ux-design' element={<UIUXDesign/>} />
          <Route path='/e-commerce-solutions' element={<ECommerceSolutions/>} />
          <Route path='/technologies' element={<Technologies/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
