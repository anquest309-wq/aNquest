
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import RequestAQuote from './Pages/RequestAQuote'
import Blogs from './Pages/Blogs'
import BlogDetails from './Pages/BlogDetails'
import WebDevelopment from './Pages/WebDevelopment'
import AppDevelopment from './Pages/AppDevelopment'
import SEOServices from './Pages/SEOServices'
import DigitalMarketing from './Pages/DigitalMarketing'
import UIUXDesign from './Pages/UIUXDesign'
import ECommerceSolutions from './Pages/ECommerceSolutions'
import Technologies from './Pages/Technologies'
import Contacts from './Pages/Contacts'
import EmailMarketingServices from './Pages/EmailMarketingServices'
import LocalSEOServices from './Pages/LocalSEOServices'
import MobileAppDevelopmentServices from './Pages/MobileAppDevelopmentServices'
import OnlineReputationManagementServices from './Pages/OnlineReputationManagementServices'
import PayPerClickPPCServices from './Pages/PayPerClickPPCServices'
import SearchEngineOptimizationServices from './Pages/SearchEngineOptimizationServices'
import SocialMediaOptimizationServices from './Pages/SocialMediaOptimizationServices'
import WebDesignServices from './Pages/WebDesignServices'
import WebDevelopmentServices from './Pages/WebDevelopmentServices'
import CRMServices from './Pages/CRMServices'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TopArrow from './Components/TopArrow'
import ScrollToTop from './Components/ScrollToTop'
// import ThemeSwitcher from './Components/ThemeSwitcher'
import { ThemeProvider } from './Context/ThemeContext'

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
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/request-a-quote' element={<RequestAQuote/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/blog/:id' element={<BlogDetails/>} />
          <Route path='/web-development' element={<WebDevelopment/>} />
          <Route path='/app-development' element={<AppDevelopment/>} />
          <Route path='/seo-services' element={<SEOServices/>} />
          <Route path='/digital-marketing' element={<DigitalMarketing/>} />
          <Route path='/ui-ux-design' element={<UIUXDesign/>} />
          <Route path='/e-commerce-solutions' element={<ECommerceSolutions/>} />
          <Route path='/technologies' element={<Technologies/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/email-marketing-services' element={<EmailMarketingServices/>} />
          <Route path='/local-seo-services' element={<LocalSEOServices/>} />
          <Route path='/mobile-app-development-services' element={<MobileAppDevelopmentServices/>} />
          <Route path='/online-reputation-management-services' element={<OnlineReputationManagementServices/>} />
          <Route path='/pay-per-click-ppc-services' element={<PayPerClickPPCServices/>} />
          <Route path='/search-engine-optimization-services' element={<SearchEngineOptimizationServices/>} />
          <Route path='/social-media-optimization-services' element={<SocialMediaOptimizationServices/>} />
          <Route path='/web-design-services' element={<WebDesignServices/>} />
          <Route path='/web-development-services' element={<WebDevelopmentServices/>} />
          <Route path='/crm-services' element={<CRMServices/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
