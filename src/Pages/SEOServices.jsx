import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const SEOServices = () => {
  return (
    <div className="min-h-screen theme-bg-secondary">
      
      
      {/* Hero Section */}
      <section className="py-40 pb-16 theme-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold theme-text-primary mb-6">
            SEO & <span className="theme-accent-primary">Digital Marketing</span>
          </h1>
          <p className="text-xl theme-text-secondary max-w-3xl mx-auto mb-8">
            Boost your online visibility and drive more traffic to your website with our comprehensive 
            SEO and digital marketing services. We help businesses rank higher and grow faster.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 theme-bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-16">
            Our SEO & Digital Marketing Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Audit & Analysis */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">SEO Audit & Analysis</h3>
              <p className="theme-text-secondary mb-6">
                Comprehensive analysis of your website's SEO performance. We identify issues 
                and opportunities to improve your search engine rankings.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Technical SEO Audit</li>
                <li>• Content Analysis</li>
                <li>• Site Speed Optimization</li>
                <li>• Mobile-First Analysis</li>
                <li>• Competitor Research</li>
              </ul>
            </div>

            {/* Keyword Research */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 theme-bg-tertiary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 theme-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">Keyword Research</h3>
              <p className="theme-text-secondary mb-6">
                Strategic keyword research to identify the best opportunities for your business. 
                We find high-value keywords that drive qualified traffic.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Long-tail Keywords</li>
                <li>• Local SEO Keywords</li>
                <li>• Competitor Analysis</li>
                <li>• Search Volume Analysis</li>
                <li>• Keyword Difficulty Assessment</li>
              </ul>
            </div>

            {/* On-Page SEO */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">On-Page SEO</h3>
              <p className="theme-text-secondary mb-6">
                Optimize your website's content and structure for better search engine visibility. 
                We ensure every page is optimized for maximum impact.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Title Tags & Meta Descriptions</li>
                <li>• Header Structure (H1-H6)</li>
                <li>• Internal Linking</li>
                <li>• Image Optimization</li>
                <li>• Content Optimization</li>
              </ul>
            </div>

            {/* Off-Page SEO */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">Off-Page SEO</h3>
              <p className="theme-text-secondary mb-6">
                Build authority and credibility through strategic link building and digital PR. 
                We help establish your brand as an industry leader.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Link Building</li>
                <li>• Digital PR</li>
                <li>• Guest Posting</li>
                <li>• Social Media Signals</li>
                <li>• Brand Mentions</li>
              </ul>
            </div>

            {/* Local SEO */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">Local SEO</h3>
              <p className="theme-text-secondary mb-6">
                Dominate local search results and attract customers in your area. 
                We optimize your business for "near me" searches and local directories.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Google My Business</li>
                <li>• Local Citations</li>
                <li>• Local Keywords</li>
                <li>• Reviews Management</li>
                <li>• Local Content</li>
              </ul>
            </div>

            {/* Content Marketing */}
            <div className="theme-card rounded-xl theme-shadow-primary p-8 hover:theme-shadow-secondary transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold theme-text-primary mb-4">Content Marketing</h3>
              <p className="theme-text-secondary mb-6">
                Create valuable, engaging content that attracts and converts your target audience. 
                We develop content strategies that drive results.
              </p>
              <ul className="theme-text-muted space-y-2">
                <li>• Blog Writing</li>
                <li>• Content Strategy</li>
                <li>• Copywriting</li>
                <li>• Video Content</li>
                <li>• Infographics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-16">
            Our SEO Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research & Analysis</h3>
              <p className="text-gray-600">We analyze your current SEO status and identify opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy Development</h3>
              <p className="text-gray-600">We create a customized SEO strategy for your business.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">We implement the strategy with ongoing optimization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring & Reporting</h3>
              <p className="text-gray-600">We track progress and provide detailed reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 theme-bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center theme-text-primary mb-16">
            SEO Results You Can Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-green-500 mb-4">300%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Increase in Organic Traffic</h3>
              <p className="text-gray-600">Average increase in organic search traffic within 6 months</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-green-500 mb-4">85%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keyword Ranking Improvement</h3>
              <p className="text-gray-600">Percentage of targeted keywords ranking in top 10</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-4xl font-bold text-green-500 mb-4">250%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ROI Improvement</h3>
              <p className="text-gray-600">Average return on investment for SEO campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your SEO goals and create a strategy that drives more traffic and conversions to your website.
          </p>
          <button className="bg-white text-green-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get Your SEO Audit
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default SEOServices;
