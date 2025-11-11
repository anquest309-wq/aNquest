import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import SectionsBgAnimation from '../Components/Bg-animation-template/SectionsBgAnimation';
import MinimalBgAnimation from '../Components/Bg-animation-template/MinimalBgAnimation';
import GeometricBgAnimation from '../Components/Bg-animation-template/GeometricBgAnimation';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import SEO from '../Components/SEO';

const resolveEnv = (key) => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key] !== undefined) {
    return import.meta.env[key];
  }
  if (typeof globalThis !== 'undefined' && globalThis.process?.env && globalThis.process.env[key] !== undefined) {
    return globalThis.process.env[key];
  }
  return undefined;
};

const DEFAULT_EMAILJS_SERVICE_ID = 'service_41sg0p7';
const DEFAULT_EMAILJS_TEMPLATE_ID = 'template_urm06yv';
const DEFAULT_EMAILJS_PUBLIC_KEY = 'c6yjlhrYVqaAq5W0w';

const EMAILJS_SERVICE_ID =
  resolveEnv('VITE_EMAILJS_SERVICE_ID') ||
  resolveEnv('REACT_APP_EMAILJS_SERVICE_ID') ||
  DEFAULT_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID =
  resolveEnv('VITE_EMAILJS_TEMPLATE_ID') ||
  resolveEnv('REACT_APP_EMAILJS_TEMPLATE_ID') ||
  DEFAULT_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY =
  resolveEnv('VITE_EMAILJS_PUBLIC_KEY') ||
  resolveEnv('REACT_APP_EMAILJS_PUBLIC_KEY') ||
  DEFAULT_EMAILJS_PUBLIC_KEY;

const RequestAQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 12);
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));

      setFormErrors(prev => ({
        ...prev,
        phone:
          numericValue.length === 0
            ? 'Phone number is required.'
            : numericValue.length !== 12
              ? 'Phone number must be exactly 12 digits.'
              : ''
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Our quote request form is currently unavailable. Please email us directly at info@anquest.com.'
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {
      name: formData.name.trim() ? '' : 'Full name is required.',
      email: !formData.email.trim()
        ? 'Email address is required.'
        : emailPattern.test(formData.email)
          ? ''
          : 'Enter a valid email address.',
      phone: !formData.phone
        ? 'Phone number is required.'
        : formData.phone.length !== 12
          ? 'Phone number must be exactly 12 digits.'
          : '',
      service: formData.service ? '' : 'Please select a service.',
      budget: formData.budget ? '' : 'Please select a budget range.',
      timeline: formData.timeline ? '' : 'Please select a project timeline.',
      message: formData.message.trim()
        ? ''
        : 'Please describe your project so we can help effectively.'
    };

    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) {
      setFormErrors(errors);
      setStatus({
        type: 'error',
        message: 'Please fix the errors in the form before submitting.'
      });
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const templateParams = {
      web_name: 'aNquest Media',
      message: `
      Quote Request Details
      ---------------------
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company || 'Not provided'}
      Service: ${formData.service}
      Budget: ${formData.budget}
      Timeline: ${formData.timeline}
      Message: ${formData.message}
      `
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus({
        type: 'success',
        message: 'Thank you! Our team will prepare your custom quote and reach out within one business day.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setTimeout(() => navigate('/thank-you'), 800);
    } catch (error) {
      console.error('EmailJS quote submission failed:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your request. Please try again or email us at info@anquest.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Web Development",
    "App Development", 
    "SEO Services",
    "Digital Marketing",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Full-Stack Development"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const timelines = [
    "1-2 months",
    "3-4 months",
    "5-6 months",
    "7-12 months",
    "1+ year"
  ];

  return (
    <>
      <SEO
        title="Request a Quote | aNquest Media"
        description="Share your project requirements with aNquest Media and receive a customized quote for development, marketing, and digital transformation services."
        canonicalUrl="https://anquestmedia.com/request-a-quote"
      />
      <div className="min-h-screen theme-bg-primary pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden sm:py-8">
        <CircleSquareBgAnimation/>
       
        
        <div className="container mx-auto px-4 sm:px-6 pt-32 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Request A <span style={{ color: '#2d65bc' }}>Quote</span>
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll provide you with a detailed quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        {/* Background Animation Elements */}
      <SectionsBgAnimation/>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="theme-card rounded-3xl theme-shadow-primary p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-2">Project Details</h2>
                <p className="theme-text-secondary">Fill out the form below to receive your custom quote</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                {/* Name and Email */}
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
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                        formErrors.name
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                      }`}
                      aria-invalid={formErrors.name ? 'true' : 'false'}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-sm text-red-600">{formErrors.name}</p>
                    )}
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
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                        formErrors.email
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                      }`}
                      aria-invalid={formErrors.email ? 'true' : 'false'}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold theme-text-primary">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                        formErrors.phone
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                      }`}
                      aria-invalid={formErrors.phone ? 'true' : 'false'}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phone && (
                      <p className="text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold theme-text-primary">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 theme-border-primary border-2 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all theme-bg-primary theme-text-primary"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Service and Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold theme-text-primary">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                        formErrors.service
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                      }`}
                      aria-invalid={formErrors.service ? 'true' : 'false'}
                    >
                      <option value="">Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="text-sm text-red-600">{formErrors.service}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-semibold theme-text-primary">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                        formErrors.budget
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                      }`}
                      aria-invalid={formErrors.budget ? 'true' : 'false'}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                    {formErrors.budget && (
                      <p className="text-sm text-red-600">{formErrors.budget}</p>
                    )}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="timeline" className="block text-sm font-semibold theme-text-primary">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary ${
                      formErrors.timeline
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                    }`}
                    aria-invalid={formErrors.timeline ? 'true' : 'false'}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {formErrors.timeline && (
                    <p className="text-sm text-red-600">{formErrors.timeline}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold theme-text-primary">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all theme-bg-primary theme-text-primary resize-none ${
                      formErrors.message
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'theme-border-primary focus:ring-[#2d65bc] focus:border-[#2d65bc]'
                    }`}
                    aria-invalid={formErrors.message ? 'true' : 'false'}
                    placeholder="Please describe your project goals, requirements, and any specific features you need..."
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Submit Quote Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <GeometricBgAnimation/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
                Why Choose <span style={{ color: '#2d65bc' }}>aNquest?</span>
              </h2>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
                We deliver exceptional results for businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="theme-card rounded-2xl theme-shadow-primary p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">Fast Turnaround</h3>
                <p className="theme-text-secondary">Get your quote within 24 hours</p>
              </div>

              <div className="theme-card rounded-2xl theme-shadow-primary p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">No Hidden Costs</h3>
                <p className="theme-text-secondary">Transparent pricing with no surprises</p>
              </div>

              <div className="theme-card rounded-2xl theme-shadow-primary p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2d65bc' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">Expert Team</h3>
                <p className="theme-text-secondary">Experienced professionals at your service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 sm:py-10 lg:py-14 theme-gradient-accent relative overflow-hidden">
      <MinimalBigShapesAnimation/>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/12 rounded-full animate-float-fast"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help? <span className="text-white/90">We're Here</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have questions or want to discuss your project? Contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567" className="bg-white font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg hover:scale-105 text-black" >
                Call Us Now
              </a>
              <a href="mailto:info@anquest.com" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-200 text-lg hover:scale-105">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RequestAQuote;

