import Home from '../Pages/Home';
import About from '../Pages/About';
import RequestAQuote from '../Pages/RequestAQuote';
import Blogs from '../Pages/Blogs';
import BlogDetails from '../Pages/BlogDetails';
import SEOServices from '../Pages/SEOServices';
import DigitalMarketing from '../Pages/DigitalMarketing';
import UIUXDesign from '../Pages/UIUXDesign';
import ECommerceSolutions from '../Pages/ECommerceSolutions';
import Contacts from '../Pages/Contacts';
import EmailMarketingServices from '../Pages/Services/EmailMarketingServices';
import LocalSEOServices from '../Pages/Services/LocalSEOServices';
import PayPerClickPPCServices from '../Pages/Services/PayPerClickPPCServices';
import SearchEngineOptimizationServices from '../Pages/Services/SearchEngineOptimizationServices';
import WebDesignServices from '../Pages/Services/WebDesignServices';
import CRMServices from '../Pages/Services/CRMServices';
import Products from '../Pages/Products';
import HelpFaqs from '../Pages/HelpFaqs';
import Support from '../Pages/Support';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ThankYou from '../Pages/ThankYou';
import NotFound from '../Pages/NotFound';
import RealEstateCRM from '../Pages/Services/RealEstateCRM';
import HospitalCRM from '../Pages/Services/HospitalCRM';
import AppDevelopment from '../Pages/Services/AppDevelopment';
import WebDevelopment from '../Pages/Services/WebDevelopment';
import SocialMediaOptimizationServices from "../Pages/Services/SocialMediaOptimizationServices"
// import RealEstateCRM from '../Pages/Services/RealEstateCRM';


const routeGroups = [
  {
    id: 'core',
    title: 'Core Pages',
    description: 'Top-level marketing and informational pages that define the primary site journey.',
    routes: [
      { path: '/', label: 'Home', component: Home },
      { path: '/about', label: 'About', component: About },
      { path: '/products', label: 'Products', component: Products },
      { path: '/help', label: 'Help & FAQs', component: HelpFaqs },
      { path: '/support', label: 'Support', component: Support },
      { path: '/privacy', label: 'Privacy Policy', component: PrivacyPolicy },
      { path: '/blogs', label: 'Blogs', component: Blogs },
      { path: '/blog/:slug', label: 'Blog Details', component: BlogDetails },
      { path: '/contacts', label: 'Contact', component: Contacts },
      { path: '/thank-you', label: 'Thank You', component: ThankYou },
      { path: '/request-a-quote', label: 'Request a Quote', component: RequestAQuote }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    description: 'Primary service landing pages surfaced in navigation and SEO targets.',
    routes: [
      { path: '/crm-services', label: 'CRM Services', component: CRMServices },
      { path: '/crm-services/request-a-quote', label: 'CRM Services Quote', component: RequestAQuote },
      { path: '/crm-services/contacts', label: 'CRM Services Contact', component: Contacts },
      { path: '/web-design-services', label: 'Web Design Services', component: WebDesignServices },
      { path: '/web-design-services/request-a-quote', label: 'Web Design Services Quote', component: RequestAQuote },
      { path: '/web-design-services/contacts', label: 'Web Design Services Contact', component: Contacts },
      { path: '/web-development-services/request-a-quote', label: 'Web Development Services Quote', component: RequestAQuote },
      { path: '/web-development-services/contacts', label: 'Web Development Services Contact', component: Contacts },
      { path: '/services/digital-marketing/seo', label: 'SEO Services', component: SearchEngineOptimizationServices },
      { path: '/services/digital-marketing/social-media-optimization', label: 'SEO Services', component: SocialMediaOptimizationServices },
      { path: '/search-engine-optimization-services/request-a-quote', label: 'SEO Services Quote', component: RequestAQuote },
      { path: '/search-engine-optimization-services/contacts', label: 'SEO Services Contact', component: Contacts },
      { path: '/email-marketing-services', label: 'Email Marketing Services', component: EmailMarketingServices },
      { path: '/email-marketing-services/request-a-quote', label: 'Email Marketing Services Quote', component: RequestAQuote },
      { path: '/email-marketing-services/contacts', label: 'Email Marketing Services Contact', component: Contacts },
      { path: '/local-seo-services', label: 'Local SEO Services', component: LocalSEOServices },
      { path: '/local-seo-services/request-a-quote', label: 'Local SEO Services Quote', component: RequestAQuote },
      { path: '/local-seo-services/contacts', label: 'Local SEO Services Contact', component: Contacts },
      
      { path: '/mobile-app-development-services/request-a-quote',label: 'Mobile App Development Quote', component: RequestAQuote },
      { path: '/mobile-app-development-services/contacts', label: 'Mobile App Development Contact', component: Contacts },
      
      { path: '/online-reputation-management-services/request-a-quote', label: 'Online Reputation Management Quote', component: RequestAQuote },
      { path: '/online-reputation-management-services/contacts', label: 'Online Reputation Management Contact', component: Contacts },
      { path: '/pay-per-click-ppc-services', label: 'Pay Per Click (PPC)', component: PayPerClickPPCServices },
      { path: '/pay-per-click-ppc-services/request-a-quote', label: 'Pay Per Click Quote', component: RequestAQuote },
      { path: '/pay-per-click-ppc-services/contacts', label: 'Pay Per Click Contact', component: Contacts },
      
      { path: '/social-media-optimization-services/request-a-quote', label: 'Social Media Optimization Quote', component: RequestAQuote },
      { path: '/social-media-optimization-services/contacts', label: 'Social Media Optimization Contact', component: Contacts }


       ,{ path: '/services/crm-services/real-state-crm', label: 'Real State CRM ', component: RealEstateCRM },
       {path: '/services/crm-services/hospital-crm',label:'Hospital CRM ',component:HospitalCRM}
       ,{path:'/services/software-services/app-development',label:'App Development',component:AppDevelopment}
       

    ]
  },
  {
    id: 'legacy',
    title: 'Legacy / Campaign Pages',
    description: 'Supporting pages from previous campaigns retained for continuity and internal linking.',
    routes: [
      { path: '/services/software-services/web-development', label: 'Web Development (Legacy)', component: WebDevelopment },
      // { path: '/app-development', label: 'App Development (Legacy)', component: AppDevelopment },
      { path: '/seo-services', label: 'SEO Services (Legacy)', component: SEOServices },
      { path: '/digital-marketing', label: 'Digital Marketing (Legacy)', component: DigitalMarketing },
      { path: '/ui-ux-design', label: 'UI/UX Design (Legacy)', component: UIUXDesign },
      { path: '/e-commerce-solutions', label: 'E-Commerce Solutions (Legacy)', component: ECommerceSolutions }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Utilities',
    description: 'Supporting experiences and fallbacks that keep the UX smooth.',
    routes: [
      // { path: '/technologies', label: 'Technologies', component: Technologies },
      { path: '*', label: '404 - Not Found', component: NotFound }
    ]
  }
];

export const appRoutes = routeGroups.flatMap(group => group.routes);

export const findRouteByPath = (path) =>
  appRoutes.find(route => route.path === path);

export default routeGroups;

