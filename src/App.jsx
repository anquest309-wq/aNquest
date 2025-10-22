
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

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <TopArrow/>
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
    </>
  )
}

export default App
