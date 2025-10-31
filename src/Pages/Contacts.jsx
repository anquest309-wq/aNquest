import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';

const Contacts = () => {
  const { theme } = useTheme();
  
  // Get animation color based on theme (white for dark, theme color for light)
  const getAnimationColor = () => {
    if (theme === 'dark') {
      return '#ffffff';
    } else {
      return '#2d65bc'; // Light theme uses blue
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };


  const services = [
    "Web Development",
    "App Development", 
    "SEO Services",
    "Digital Marketing",
    "UI/UX Design",
    "E-Commerce Solutions"
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Modern Hero Section */}
     

      {/* Contact Section */}
      <section id="contact-form" className="py-16  sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Floating Circles - BIG */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute top-40 right-20 w-36 h-36 rounded-full opacity-15 animate-float-medium" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full opacity-18 animate-float-fast" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-22 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          
          {/* Floating Squares */}
          <div className="absolute top-60 left-1/4 w-20 h-20 opacity-20 animate-rotate-slow" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-80 right-1/3 w-18 h-18 opacity-16 animate-rotate-medium" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 left-1/3 w-24 h-24 opacity-18 animate-rotate-fast" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          
          {/* Floating Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-20 animate-bounce-slow" style={{ 
            borderLeft: '35px solid transparent',
            borderRight: '35px solid transparent',
            borderBottom: `60px solid ${getAnimationColor()}`
          }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-18 animate-bounce-medium" style={{ 
            borderLeft: '28px solid transparent',
            borderRight: '28px solid transparent',
            borderBottom: `48px solid ${getAnimationColor()}`
          }}></div>
          
          {/* Organic Blob Shapes */}
          <div className="absolute top-1/4 left-1/2 w-56 h-56 opacity-12 animate-blob-slow" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-64 h-64 opacity-15 animate-blob-medium" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
          }}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-16 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full opacity-15 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 101, 188, 0.15) 1px, transparent 0)`,
              backgroundSize: '25px 25px'
            }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 pt-32 py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
              Let's Build Something <span style={{ color: '#2d65bc' }}>Amazing</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="theme-card rounded-3xl theme-shadow-primary p-6 sm:p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold theme-text-primary mb-2">Project Details</h3>
                    <p className="theme-text-secondary">Fill out the form below and we'll be in touch</p>
                  </div>
                  
              <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold theme-text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                          className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary"
                          placeholder="Enter your full name"
                    />
                  </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold theme-text-primary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                          className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary"
                          placeholder="Enter your email address"
                    />
                  </div>
                </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold theme-text-primary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                          className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-semibold theme-text-primary">
                          Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                          className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary"
                    >
                          <option value="">Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold theme-text-primary">
                        Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                          className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary resize-none"
                        placeholder="Describe your project goals, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                      className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a4a8a]"
                      style={{ backgroundColor: '#2d65bc' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                  )}
                </button>
              </form>
            </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="theme-card rounded-2xl theme-shadow-primary p-6">
                  <h3 className="text-xl font-bold theme-text-primary mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+12343923647" className="flex items-center gap-3 p-3 theme-bg-tertiary rounded-xl hover:theme-bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2d65bc' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold theme-text-primary">US Office</p>
                        <p className="text-sm theme-text-secondary">+1(234) 392-3647</p>
                      </div>
                    </a>
                    
                    <a href="tel:+919266140654" className="flex items-center gap-3 p-3 theme-bg-tertiary rounded-xl hover:theme-bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2d65bc' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold theme-text-primary">IND Office</p>
                        <p className="text-sm theme-text-secondary">+91 92661 40654</p>
                      </div>
                    </a>
                    
                    <a href="mailto:info@anquest.com" className="flex items-center gap-3 p-3 theme-bg-tertiary rounded-xl hover:theme-bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2d65bc' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold theme-text-primary">Email Us</p>
                        <p className="text-sm theme-text-secondary">info@anquest.com</p>
                    </div>
                    </a>
                    
                    <a href="https://maps.google.com" className="flex items-center gap-3 p-3 theme-bg-tertiary rounded-xl hover:theme-bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2d65bc' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold theme-text-primary">Visit Us</p>
                        <p className="text-sm theme-text-secondary">618 spink st #2 Wooster Ohio 44691</p>
                    </div>
                    </a>
                  </div>
              </div>

              {/* Business Hours */}
                <div className="theme-card rounded-2xl theme-shadow-primary p-6">
                  <h3 className="text-xl font-bold theme-text-primary mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b theme-border-primary">
                      <span className="theme-text-secondary">Monday - Friday</span>
                      <span className="font-semibold theme-text-primary">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b theme-border-primary">
                      <span className="theme-text-secondary">Saturday</span>
                      <span className="font-semibold theme-text-primary">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="theme-text-secondary">Sunday</span>
                      <span className="font-semibold theme-text-primary">Closed</span>
                  </div>
                  </div>
                  <div className="mt-4 p-3 theme-bg-tertiary rounded-xl">
                    <p className="text-sm theme-text-primary font-medium">
                      <span style={{ color: '#2d65bc' }}>24/7</span> Emergency Support Available
                    </p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="theme-bg-primary py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Floating Circles - BIG */}
          <div className="absolute top-20 left-10 w-44 h-44 rounded-full opacity-18 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute top-40 right-20 w-38 h-38 rounded-full opacity-14 animate-float-medium" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-16 animate-float-fast" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full opacity-20 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          
          {/* Floating Squares */}
          <div className="absolute top-60 left-1/4 w-22 h-22 opacity-18 animate-rotate-slow" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-80 right-1/3 w-20 h-20 opacity-14 animate-rotate-medium" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 left-1/3 w-28 h-28 opacity-16 animate-rotate-fast" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          
          {/* Floating Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-18 animate-bounce-slow" style={{ 
            borderLeft: '38px solid transparent',
            borderRight: '38px solid transparent',
            borderBottom: `66px solid ${getAnimationColor()}`
          }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-16 animate-bounce-medium" style={{ 
            borderLeft: '32px solid transparent',
            borderRight: '32px solid transparent',
            borderBottom: `55px solid ${getAnimationColor()}`
          }}></div>
          
          {/* Organic Blob Shapes */}
          <div className="absolute top-1/4 left-1/2 w-60 h-60 opacity-10 animate-blob-slow" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-68 h-68 opacity-13 animate-blob-medium" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
          }}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/2 left-1/4 w-52 h-52 rounded-full opacity-14 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full opacity-13 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-2">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 101, 188, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
              Got <span style={{ color: '#2d65bc' }}>Questions?</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
              Here are answers to some common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">How quickly can you start?</h3>
                  <p className="theme-text-secondary">We typically begin new projects within 1-2 weeks after contract signing and initial consultation.</p>
                </div>
              </div>
            </div>

            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">Do you provide support?</h3>
                  <p className="theme-text-secondary">Yes! We offer comprehensive maintenance and support packages for all our projects.</p>
                </div>
              </div>
            </div>

            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">What's included in consultation?</h3>
                  <p className="theme-text-secondary">We discuss your project requirements, timeline, budget, and provide initial recommendations.</p>
                </div>
              </div>
            </div>

            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
              </div>
                <div>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">Do you work with small businesses?</h3>
                  <p className="theme-text-secondary">Absolutely! We work with businesses of all sizes, from startups to enterprise clients.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Particle System */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full opacity-40 animate-particle-1" style={{ backgroundColor: getAnimationColor() }}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full opacity-30 animate-particle-2" style={{ backgroundColor: getAnimationColor() }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full opacity-35 animate-particle-1" style={{ backgroundColor: getAnimationColor() }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full opacity-40 animate-particle-2" style={{ backgroundColor: getAnimationColor() }}></div>
          </div>

          {/* Floating Circles - BIG */}
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-25 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-20 animate-float-medium" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-25 animate-float-fast" style={{ backgroundColor: getAnimationColor() }}></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full opacity-30 animate-float-slow" style={{ backgroundColor: getAnimationColor() }}></div>
          
          {/* Floating Squares */}
          <div className="absolute top-60 left-1/4 w-24 h-24 opacity-25 animate-rotate-slow" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-80 right-1/3 w-20 h-20 opacity-20 animate-rotate-medium" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 left-1/3 w-28 h-28 opacity-22 animate-rotate-fast" style={{ backgroundColor: getAnimationColor(), transform: 'rotate(45deg)' }}></div>
          
          {/* Floating Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-25 animate-bounce-slow" style={{ 
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: `70px solid ${getAnimationColor()}`
          }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-22 animate-bounce-medium" style={{ 
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: `55px solid ${getAnimationColor()}`
          }}></div>
          
          {/* Organic Blob Shapes */}
          <div className="absolute top-1/4 left-1/2 w-64 h-64 opacity-15 animate-blob-slow" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-72 h-72 opacity-18 animate-blob-medium" style={{ 
            background: `linear-gradient(135deg, ${getAnimationColor()}, ${getAnimationColor()})`,
            borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
          }}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/2 left-1/4 w-56 h-56 rounded-full opacity-20 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-18 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getAnimationColor()}, transparent)`
          }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 101, 188, 0.3) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Animated Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px theme-animation-line animate-line-move"></div>
          <div className="absolute top-3/4 left-0 w-full h-px theme-animation-border animate-line-move-delayed"></div>
        </div>
        
        <div className="absolute inset-0 theme-gradient-primary opacity-50"></div>
        <div className="relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
             
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
                Ready to <span style={{ color: '#2d65bc' }}>Transform</span> Your Ideas?
          </h1>
              <p className="text-xl sm:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                We're here to turn your vision into reality. Get in touch and let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact-form" className="text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform hover:bg-[#1a4a8a]" style={{ backgroundColor: '#2d65bc' }}>
                  Start Your Project
                </a>
                <div className="flex flex-col gap-2">
                  <a href="tel:+12343923647" className="flex items-center gap-2 theme-text-primary transition-colors" style={{ '--hover-color': '#2d65bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2d65bc'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">US: +1(234) 392-3647</span>
                  </a>
                  <a href="tel:+919266140654" className="flex items-center gap-2 theme-text-primary transition-colors" style={{ '--hover-color': '#2d65bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2d65bc'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">IND: +91 92661 40654</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
