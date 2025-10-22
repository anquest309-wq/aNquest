import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      
      {/* Hero Section */}
      <section className="py-40 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Mobile <span className="text-green-500">App Development</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We create powerful, user-friendly mobile applications for iOS and Android platforms. 
            From concept to deployment, we deliver apps that engage users and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Mobile App Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iOS Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS Development</h3>
              <p className="text-gray-600 mb-6">
                Native iOS applications built with Swift and SwiftUI. We create apps that 
                leverage the full power of Apple's ecosystem and deliver exceptional user experiences.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Swift & SwiftUI</li>
                <li>• Objective-C</li>
                <li>• iOS SDK</li>
                <li>• App Store Optimization</li>
                <li>• Apple Guidelines Compliance</li>
              </ul>
            </div>

            {/* Android Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.7 13.8533 8.16 12.0088 8.16c-1.8445 0-3.5814.54-5.1367 1.1898L4.8498 5.8466a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-8.4396"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Android Development</h3>
              <p className="text-gray-600 mb-6">
                Native Android applications built with Kotlin and Java. We create apps that 
                work seamlessly across all Android devices and versions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Kotlin & Java</li>
                <li>• Android SDK</li>
                <li>• Material Design</li>
                <li>• Google Play Store</li>
                <li>• Android Guidelines</li>
              </ul>
            </div>

            {/* React Native Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 4.043-.208 2.042-.73 3.845-1.453 5.287-.704 1.418-1.55 2.39-2.466 2.39v-.003c-.225 0-.406-.044-.558-.127-.666-.382-.955-1.835-.73-4.043.208-2.042.73-3.845 1.453-5.287.704-1.418 1.55-2.39 2.466-2.39zm-9.77 2.45c.882 0 1.608.57 2.466 2.39.723 1.442 1.245 3.245 1.453 5.287.225 2.208-.064 3.66-.73 4.043-.152.083-.333.127-.558.127-.916 0-1.762-.972-2.466-2.39-.723-1.442-1.245-3.245-1.453-5.287-.225-2.208.064-3.66.73-4.043.152-.083.333-.127.558-.127zm4.903 3.545c.152 1.288.506 2.495.983 3.407.532 1.003 1.17 1.618 1.805 1.618.635 0 1.273-.615 1.805-1.618.477-.912.831-2.119.983-3.407.152-1.288.152-2.59 0-3.878-.152-1.288-.506-2.495-.983-3.407C13.273 4.615 12.635 4 12 4s-1.273.615-1.805 1.618c-.477.912-.831 2.119-.983 3.407-.152 1.288-.152 2.59 0 3.878z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">React Native Development</h3>
              <p className="text-gray-600 mb-6">
                Cross-platform mobile apps built with React Native. One codebase for both 
                iOS and Android platforms, reducing development time and costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cross-Platform Apps</li>
                <li>• JavaScript/TypeScript</li>
                <li>• Native Performance</li>
                <li>• Code Reusability</li>
                <li>• Faster Development</li>
              </ul>
            </div>

            {/* Flutter Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flutter Development</h3>
              <p className="text-gray-600 mb-6">
                Beautiful, fast mobile apps built with Google's Flutter framework. 
                Create stunning UIs with native performance across platforms.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Dart Programming</li>
                <li>• Material Design</li>
                <li>• Cupertino Widgets</li>
                <li>• Hot Reload</li>
                <li>• Google Support</li>
              </ul>
            </div>

            {/* Cross-Platform Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Platform Development</h3>
              <p className="text-gray-600 mb-6">
                Develop once, deploy everywhere. We create apps that work seamlessly 
                across iOS, Android, and web platforms with shared codebases.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Single Codebase</li>
                <li>• Multiple Platforms</li>
                <li>• Cost Effective</li>
                <li>• Faster Time to Market</li>
                <li>• Consistent UI/UX</li>
              </ul>
            </div>

            {/* App Maintenance */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">App Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Keep your mobile apps running smoothly with our comprehensive maintenance 
                and support services. Regular updates and bug fixes included.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular Updates</li>
                <li>• Bug Fixes</li>
                <li>• Performance Optimization</li>
                <li>• Security Patches</li>
                <li>• 24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our App Development Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your requirements and create a detailed project plan.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Prototyping</h3>
              <p className="text-gray-600">We create wireframes and prototypes for your app.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development & Testing</h3>
              <p className="text-gray-600">We build your app with rigorous testing at every step.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Support</h3>
              <p className="text-gray-600">We deploy your app and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your app idea and create a mobile solution that engages users and drives business growth.
          </p>
          <button className="bg-white text-green-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Start Your App Project
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default AppDevelopment;
