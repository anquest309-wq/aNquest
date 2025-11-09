import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, LifeBuoy, FileText, Phone, Mail, Calendar, BookOpen } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import SEO from '../Components/SEO';
import { buildUrl } from '../utils/urlUtils';

const HelpFaqs = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('general');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const themeAccent = useMemo(() => '#2d65bc', []);

  const tabConfig = [
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'support', label: 'Support' }
  ];

  const faqs = useMemo(() => ({
    general: [
      {
        question: 'What services does aNquest provide?',
        answer: 'We offer end-to-end digital solutions including CRM implementation, web and app development, SEO, PPC, social media optimization, email marketing, and branding support tailored to your business goals.'
      },
      {
        question: 'How quickly can the team start on my project?',
        answer: 'Most projects kick off within 5-7 business days after the initial consultation, proposal approval, and onboarding documentation.'
      },
      {
        question: 'Do you work with startups as well as enterprise clients?',
        answer: 'Absolutely—we support early-stage startups, scale-ups, and established enterprises. Our solutions are scoped to meet the size, complexity, and budget of your organization.'
      }
    ],
    services: [
      {
        question: 'Can I customize a service package?',
        answer: 'Yes. Every engagement begins with a discovery session where we craft a custom scope—pick individual services or combine them into a comprehensive growth program.'
      },
      {
        question: 'Do you integrate with existing tools and CRMs?',
        answer: 'Our team regularly integrates with platforms like HubSpot, Salesforce, Zoho, Shopify, and custom APIs. We ensure data flows seamlessly across your stack.'
      },
      {
        question: 'What does the onboarding process look like?',
        answer: 'Onboarding includes a kickoff workshop, access provisioning, documentation handover, and a detailed roadmap that outlines milestones, deliverables, and communication cadences.'
      }
    ],
    support: [
      {
        question: 'How do I request support or report an issue?',
        answer: 'Use the support form below, email us at support@anquest.com, or call our dedicated support line. We respond to critical issues within 4 business hours and standard queries within 1 business day.'
      },
      {
        question: 'Do you offer maintenance plans?',
        answer: 'Yes, we have tiered support plans that cover monitoring, performance optimization, security updates, and quarterly strategic reviews.'
      },
      {
        question: 'Can I schedule a strategy session with the team?',
        answer: 'Of course. Pick a time using our scheduling assistant and we’ll dive into performance insights, campaign ideas, or new opportunities tailored for you.'
      }
    ]
  }), []);

  const resources = [
    {
      title: 'Support Center',
      description: 'Submit tickets, track open issues, or chat with our support specialists.',
      icon: LifeBuoy,
      href: buildUrl('/support')
    },
    {
      title: 'Knowledge Base',
      description: 'Browse implementation guides, FAQs, and best practices for all services.',
      icon: FileText,
      href: '#knowledge-base'
    },
    {
      title: 'Schedule a Call',
      description: 'Book a consultation to explore strategy, roadmaps, or new initiatives.',
      icon: Calendar,
      href: buildUrl('/request-a-quote')
    },
    {
      title: 'Contact Sales',
      description: 'Connect with our growth specialists to craft a tailored solution.',
      icon: Phone,
      href: buildUrl('/contacts')
    }
  ];

  const knowledgeBase = [
    {
      title: 'Getting Started',
      items: ['Kickoff checklist', 'Discovery questionnaire', 'Onboarding workflow']
    },
    {
      title: 'Project Management',
      items: ['Working with aNquest teams', 'Milestone approvals', 'Feedback cycles']
    },
    {
      title: 'Technology Stack',
      items: ['Supported integrations', 'Infrastructure requirements', 'Security policies']
    },
    {
      title: 'Marketing Operations',
      items: ['Campaign planning templates', 'Content guidelines', 'Analytics dashboards']
    }
  ];

  const handleToggleQuestion = (question) => {
    setExpandedQuestion(prev => (prev === question ? null : question));
  };

  const getTabClass = (tabId) => (
    `px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 ${
      activeTab === tabId
        ? 'text-white shadow-lg'
        : 'theme-text-secondary hover:theme-text-primary'
    }`
  );

  return (
    <>
      <SEO
        title="Help & FAQs - aNquest Support Center"
        description="Find answers to common questions, access support resources, and explore best practices for aNquest’s digital and CRM services."
        keywords="aNquest help, aNquest support, FAQs, customer support, digital service help, CRM support, marketing support"
        canonicalUrl="https://anquestmedia.com/help"
      />
      <div className="min-h-screen theme-bg-primary pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden sm:py-8">
          <CircleSquareBgAnimation />
          <div className="container mx-auto px-4 sm:px-6 pt-24 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight">
                Help & <span style={{ color: themeAccent }}>FAQs</span>
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
                Everything you need to know about working with aNquest—guides, support resources, and answers to the questions we hear most. Can’t find what you’re looking for? Reach out and our team will help right away.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to={buildUrl('/contacts')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: themeAccent }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </Link>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                  style={{ border: `1px solid ${themeAccent}` }}
                >
                  <HelpCircle className="w-4 h-4" />
                  Browse FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Cards */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.title}
                    href={resource.href}
                    className="group theme-card rounded-3xl theme-shadow-primary p-6 hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-[#2d65bc]/10"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 theme-bg-tertiary group-hover:theme-bg-secondary transition-all duration-200">
                      <Icon className="w-6 h-6 theme-text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm theme-text-secondary leading-relaxed">
                      {resource.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Tabs */}
        <section id="faq" className="py-12 sm:py-16 lg:py-20 theme-bg-primary relative overflow-hidden">
          <MinimalBigShapesAnimation />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
                Frequently Asked <span style={{ color: themeAccent }}>Questions</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                Choose a category to find detailed answers. Still have questions? We’re just a message away.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {tabConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpandedQuestion(null);
                  }}
                  className={getTabClass(tab.id)}
                  style={activeTab === tab.id ? { backgroundColor: themeAccent } : { border: `1px solid ${themeAccent}` }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs[activeTab].map(({ question, answer }) => {
                const isOpen = expandedQuestion === question;
                return (
                  <div
                    key={question}
                    className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 transition-all duration-300 hover:theme-shadow-secondary"
                  >
                    <button
                      className="w-full flex items-center justify-between text-left gap-4"
                      onClick={() => handleToggleQuestion(question)}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold theme-text-primary">
                        {question}
                      </h3>
                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ backgroundColor: themeAccent }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-4 text-base sm:text-lg theme-text-secondary leading-relaxed">
                        {answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Knowledge Base */}
        <section id="knowledge-base" className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
                Explore Our <span style={{ color: themeAccent }}>Knowledge Base</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                Dive into curated guides, templates, and playbooks to help your team get the most from aNquest.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {knowledgeBase.map((category) => (
                <div key={category.title} className="theme-card rounded-3xl theme-shadow-primary p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${themeAccent}20`, color: themeAccent }}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold theme-text-primary mb-2">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item} className="text-sm theme-text-secondary flex items-center gap-2">
                            <span style={{ color: themeAccent }}>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative overflow-hidden">
          <MinimalBigShapesAnimation />
          <div className="absolute inset-0 theme-gradient-primary opacity-50"></div>
          <div className="relative z-10 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary">
                  Need More <span style={{ color: themeAccent }}>Help?</span>
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Our success team is ready to support you with personalized guidance. Reach out and we’ll connect you with the right specialist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={buildUrl('/contacts')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: themeAccent }}
                  >
                    <Phone className="w-4 h-4" />
                    Talk to Support
                  </Link>
                  <Link
                    to={buildUrl('/request-a-quote')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                    style={{ border: `1px solid ${themeAccent}` }}
                  >
                    <Mail className="w-4 h-4" />
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpFaqs;

