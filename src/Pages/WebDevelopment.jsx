import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Hero Section */}
      <section className="py-40 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Web <span className="text-green-500">Development</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We create stunning, responsive websites and web applications using modern technologies. 
            From simple landing pages to complex web platforms, we deliver exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Web Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-6">
                Modern, responsive user interfaces built with React, Vue.js, and Angular. 
                We create engaging user experiences that work perfectly across all devices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• React & Next.js Development</li>
                <li>• Vue.js & Nuxt.js</li>
                <li>• Angular Applications</li>
                <li>• Responsive Design</li>
                <li>• UI/UX Implementation</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-6">
                Robust server-side applications and APIs built with Node.js, Python, and PHP. 
                We ensure your backend is scalable, secure, and performant.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Node.js & Express</li>
                <li>• Python & Django</li>
                <li>• PHP & Laravel</li>
                <li>• RESTful APIs</li>
                <li>• Database Design</li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Stack Development</h3>
              <p className="text-gray-600 mb-6">
                Complete web solutions from frontend to backend. We handle every aspect of 
                your web application development for a seamless end-to-end experience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• End-to-End Solutions</li>
                <li>• MERN Stack</li>
                <li>• MEAN Stack</li>
                <li>• Database Integration</li>
                <li>• Deployment & DevOps</li>
              </ul>
            </div>

            {/* E-Commerce Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Development</h3>
              <p className="text-gray-600 mb-6">
                Powerful online stores and e-commerce platforms that drive sales and 
                provide exceptional shopping experiences for your customers.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom E-Commerce Sites</li>
                <li>• WooCommerce Development</li>
                <li>• Shopify Customization</li>
                <li>• Payment Integration</li>
                <li>• Inventory Management</li>
              </ul>
            </div>

            {/* CMS Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CMS Development</h3>
              <p className="text-gray-600 mb-6">
                Content management systems that make it easy to update and manage your 
                website content without technical knowledge.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• WordPress Development</li>
                <li>• Custom CMS Solutions</li>
                <li>• Headless CMS</li>
                <li>• Content Management</li>
                <li>• Admin Panel Design</li>
              </ul>
            </div>

            {/* Progressive Web Apps */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Web Apps</h3>
              <p className="text-gray-600 mb-6">
                Modern web applications that work like native apps with offline capabilities, 
                push notifications, and app-like experiences.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• PWA Development</li>
                <li>• Offline Functionality</li>
                <li>• Push Notifications</li>
                <li>• App-like Experience</li>
                <li>• Cross-Platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom web solution that drives your business forward.
          </p>
          <button className="bg-white text-green-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default WebDevelopment;
