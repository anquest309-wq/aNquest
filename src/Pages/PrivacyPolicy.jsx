import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Clock, Users, Globe, Mail, Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import SEO from '../Components/SEO';
import { buildUrl } from '../utils/urlUtils';

const sections = [
  {
    title: '1. Information We Collect',
    icon: FileText,
    content: [
      'Contact details such as name, email, phone number, and company information provided through forms or consultations.',
      'Project requirements, preferences, and business objectives shared during discovery sessions.',
      'Usage data collected through analytics tools to help us improve performance, content relevance, and user experience.',
      'Technical data including IP addresses, browser type, device information, and location when you access our website.'
    ]
  },
  {
    title: '2. How We Use Your Information',
    icon: Users,
    content: [
      'To deliver requested services, proposals, and project onboarding materials tailored to your business goals.',
      'To communicate important updates, announcements, and customer support responses.',
      'To improve our services, refine user experiences, and develop resources aligned with market needs.',
      'To comply with legal obligations, protect our rights, and maintain the security of our infrastructure.'
    ]
  },
  {
    title: '3. Data Security',
    icon: Lock,
    content: [
      'We implement industry-standard security measures including encryption, access controls, and routine audits.',
      'Project data is stored securely with restricted access granted only to authorized team members.',
      'We partner with trusted third-party providers that comply with global security and privacy regulations.'
    ]
  },
  {
    title: '4. Data Retention',
    icon: Clock,
    content: [
      'Personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy.',
      'Clients can request deletion, updates, or export of their data by contacting privacy@anquest.com.',
      'We maintain backups for disaster recovery and security auditing in accordance with regulatory requirements.'
    ]
  },
  {
    title: '5. Sharing & Transfers',
    icon: Globe,
    content: [
      'We never sell or lease your personal data to third parties.',
      'Data may be shared with trusted partners or subcontractors when required to deliver specific services, under strict confidentiality agreements.',
      'Cross-border transfers comply with applicable regulations, ensuring appropriate safeguards for your data.'
    ]
  }
];

const contactMethods = [
  {
    label: 'Email',
    value: 'privacy@anquest.com',
    href: 'mailto:privacy@anquest.com',
    icon: Mail
  },
  {
    label: 'US Office',
    value: '+1 (234) 392-3647',
    href: 'tel:+12343923647',
    icon: Phone
  },
  {
    label: 'IND Office',
    value: '+91 92661 40654',
    href: 'tel:+919266140654',
    icon: Phone
  }
];

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  const accent = '#2d65bc';

  return (
    <>
      <SEO
        title="Privacy Policy - aNquest Digital & CRM Solutions"
        description="Review aNquest’s privacy policy to understand how we collect, use, and protect your personal data across digital services, CRM solutions, and strategic engagements."
        keywords="aNquest privacy policy, data protection, data usage, GDPR, personal information, CRM privacy"
        canonicalUrl="https://anquestmedia.com/privacy"
      />
      <div className="min-h-screen theme-bg-primary pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden sm:py-8">
          <CircleSquareBgAnimation />
          <div className="container mx-auto px-4 sm:px-6 pt-24 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight">
                Privacy <span style={{ color: accent }}>Policy</span>
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary">
                aNquest is committed to protecting your privacy. This policy explains what data we collect, how it’s used, and the choices you have to control your information.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="#policy"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                  style={{ border: `1px solid ${accent}` }}
                >
                  <FileText className="w-4 h-4" />
                  Read Policy
                </a>
                <Link
                  to={buildUrl('/contacts')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: accent }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto theme-card rounded-3xl theme-shadow-primary p-8 sm:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}20`, color: accent }}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold theme-text-primary">
                      Our Commitment to Privacy
                    </h2>
                    <p className="theme-text-secondary">
                      We take privacy seriously. Every project engagement, consultation, and digital experience is designed with transparency and security at its core.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 theme-text-secondary">
                  <div className="theme-card rounded-2xl theme-shadow-secondary p-4">
                    <strong className="theme-text-primary block mb-1">Effective Date</strong>
                    <span>January 1, 2025</span>
                  </div>
                  <div className="theme-card rounded-2xl theme-shadow-secondary p-4">
                    <strong className="theme-text-primary block mb-1">Latest Update</strong>
                    <span>February 20, 2025</span>
                  </div>
                </div>
                <p className="theme-text-secondary leading-relaxed">
                  By using our website and services, you agree to the practices described in this policy. If you have any questions or would like to exercise your privacy rights, please contact us using the information below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section id="policy" className="py-12 sm:py-16 lg:py-20 theme-bg-primary relative overflow-hidden">
          <MinimalBigShapesAnimation />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="theme-card rounded-3xl theme-shadow-primary p-6 sm:p-8 hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20`, color: accent }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold theme-text-primary">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.content.map((point) => (
                            <li key={point} className="theme-text-secondary text-sm leading-relaxed flex gap-2">
                              <span style={{ color: accent }}>•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rights & Preferences */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto theme-card rounded-3xl theme-shadow-primary p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}20`, color: accent }}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold theme-text-primary">
                    Your Rights & Preferences
                  </h2>
                  <p className="theme-text-secondary">
                    Depending on your location, you may have rights to access, update, or delete personal data. We respect these rights and make it simple to manage your preferences.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 theme-text-secondary leading-relaxed">
                <li>• Request a copy of the information we hold about you.</li>
                <li>• Update or correct your personal details at any time.</li>
                <li>• Object to processing or request deletion of your data.</li>
                <li>• Opt-in or opt-out of communication preferences with a single click.</li>
              </ul>
              <p className="theme-text-secondary">
                To exercise any of these rights, email <a href="mailto:privacy@anquest.com" className="theme-text-primary hover:underline">privacy@anquest.com</a>. We will respond within 5 business days.
              </p>
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
                  Have Privacy Questions?
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Our privacy and compliance team is ready to address your concerns. Reach out through any of the channels below.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={buildUrl('/contacts')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: accent }}
                  >
                    <Phone className="w-4 h-4" />
                    Contact aNquest
                  </Link>
                  <Link
                    to={buildUrl('/request-a-quote')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                    style={{ border: `1px solid ${accent}` }}
                  >
                    <Shield className="w-4 h-4" />
                    Request Compliance Review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
                Reach Our <span style={{ color: accent }}>Privacy Team</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                We respond to all privacy-related inquiries within 5 business days.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="theme-card rounded-2xl theme-shadow-primary p-5 flex flex-col items-center gap-3 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}20`, color: accent }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-wide theme-text-secondary">{method.label}</p>
                      <p className="text-lg font-semibold theme-text-primary">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;

