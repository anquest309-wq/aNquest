import Home from '../Pages/Home';
import About from '../Pages/About';
import RequestAQuote from '../Pages/RequestAQuote';
import Blogs from '../Pages/Blogs';
import BlogDetails from '../Pages/BlogDetails';

import Contacts from '../Pages/contacts';

import SearchEngineOptimizationServices from '../Pages/Services/SearchEngineOptimizationServices';
import WebDesignServices from '../Pages/Services/WebDesignServices';
import CRMServices from '../Pages/Services/CRMServices';
import HelpFaqs from '../Pages/HelpFaqs';
import Support from '../Pages/Support';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ThankYou from '../Pages/ThankYou';
import NotFound from '../Pages/NotFound';
import RealEstateCRM from '../Pages/Services/RealEstateCRM';
import HospitalCRM from '../Pages/Services/HospitalCRM';
import AppDevelopment from '../Pages/Services/AppDevelopment';
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
      { path: '/help', label: 'Help & FAQs', component: HelpFaqs },
      { path: '/support', label: 'Support', component: Support },
      { path: '/privacy', label: 'Privacy Policy', component: PrivacyPolicy },
      { path: '/blogs', label: 'Blogs', component: Blogs },
      { path: '/blog/:slug', label: 'Blog Details', component: BlogDetails },
      { path: '/contact-us', label: 'Contact', component: Contacts },
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
      { path: '/crm-services/contact-us', label: 'CRM Services Contact', component: Contacts },
      { path: '/web-design-services', label: 'Web Design Services', component: WebDesignServices },
      { path: '/web-design-services/request-a-quote', label: 'Web Design Services Quote', component: RequestAQuote },
      { path: '/web-design-services/contact-us', label: 'Web Design Services Contact', component: Contacts },
      { path: '/web-development-services/request-a-quote', label: 'Web Development Services Quote', component: RequestAQuote },
      { path: '/web-development-services/contact-us', label: 'Web Development Services Contact', component: Contacts },
      { path: '/services/digital-marketing/seo', label: 'SEO Services', component: SearchEngineOptimizationServices },
      { path: '/services/digital-marketing/social-media-optimization', label: 'SEO Services', component: SocialMediaOptimizationServices },
      { path: '/search-engine-optimization-services/request-a-quote', label: 'SEO Services Quote', component: RequestAQuote },
      { path: '/search-engine-optimization-services/contact-us', label: 'SEO Services Contact', component: Contacts },
     
      
     
       { path: '/about/blogs', label: 'About page to blogs ', component: Blogs },
      
      { path: '/mobile-app-development-services/request-a-quote',label: 'Mobile App Development Quote', component: RequestAQuote },
      { path: '/mobile-app-development-services/contact-us', label: 'Mobile App Development Contact', component: Contacts },
      
      { path: '/online-reputation-management-services/request-a-quote', label: 'Online Reputation Management Quote', component: RequestAQuote },
      { path: '/online-reputation-management-services/contact-us', label: 'Online Reputation Management Contact', component: Contacts },
     
     
      
      { path: '/social-media-optimization-services/request-a-quote', label: 'Social Media Optimization Quote', component: RequestAQuote },
      { path: '/social-media-optimization-services/contact-us', label: 'Social Media Optimization Contact', component: Contacts }


       ,{ path: '/services/crm-services/real-state-crm', label: 'Real State CRM ', component: RealEstateCRM },
       {path: '/services/crm-services/hospital-crm',label:'Hospital CRM ',component:HospitalCRM}
       ,{path:'/services/software-services/app-development',label:'App Development',component:AppDevelopment}
       

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

