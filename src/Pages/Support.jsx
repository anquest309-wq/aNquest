import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, LifeBuoy, Clock, PhoneCall, Mail, Calendar, Rocket, CheckCircle } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import SEO from '../Components/SEO';
import { buildUrl } from '../utils/urlUtils';

const ticketTypes = [
  {
    title: 'General Inquiry',
    description: 'Questions about existing services, billing, or upcoming engagements.',
    response: 'Response within 1 business day.',
    color: '#2d65bc'
  },
  {
    title: 'Technical Support',
    description: 'Report issues, request troubleshooting, or get hands-on assistance.',
    response: 'Initial response within 4 business hours.',
    color: '#2d65bc'
  },
  {
    title: 'Priority / Emergency',
    description: 'Critical outages or high-impact incidents that need immediate attention.',
    response: 'Response within 1 hour—24/7 coverage.',
    color: '#f97316'
  }
];

const supportPlans = [
  {
    name: 'Essential',
    price: 'Included',
    description: 'Great for small teams launching new projects.',
    items: [
      'Email support during business hours',
      'Monthly status review',
      'Knowledge base access',
      'Critical response within 12 hours'
    ]
  },
  {
    name: 'Professional',
    price: '$699/mo',
    description: 'Best for teams scaling digital and CRM operations.',
    highlighted: true,
    items: [
      'Dedicated success manager',
      '24/7 priority response',
      'Quarterly optimization reviews',
      'Proactive monitoring and reports'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for complex, multi-region deployments.',
    items: [
      'On-site & remote support options',
      'Custom SLAs and escalation paths',
      'Security & compliance reviews',
      'Strategic roadmap alignment'
    ]
  }
];

const contactChannels = [
  {
    label: 'Support Email',
    value: 'support@anquest.com',
    href: 'mailto:support@anquest.com',
    icon: Mail
  },
  {
    label: 'US Support Line',
    value: '+1 (234) 392-3647',
    href: 'tel:+12343923647',
    icon: PhoneCall
  },
  {
    label: 'IND Support Line',
    value: '+91 92661 40654',
    href: 'tel:+919266140654',
    icon: PhoneCall
  }
];

const Support = () => {
  const { theme } = useTheme();
  const accent = '#2d65bc';

  return (
    <>
      <SEO
        title="Support - aNquest Client Success Center"
        description="Connect with the aNquest support team, submit tickets, explore success plans, and schedule sessions. We’re here to keep your digital and CRM operations running smoothly."
        keywords="aNquest support, customer success center, technical support, CRM support, digital marketing support"
        canonicalUrl="https://anquestmedia.com/support"
      />
      <div className="min-h-screen theme-bg-primary pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden sm:py-8">
          <CircleSquareBgAnimation />
          <div className="container mx-auto px-4 sm:px-6 pt-24 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight">
                Client <span style={{ color: accent }}>Support</span> Center
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
                Whether you need technical help, campaign guidance, or strategic advisory, our success team is ready to assist. Submit a ticket, jump into a call, or browse curated resources.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="#contact-support"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                  style={{ border: `1px solid ${accent}` }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Submit a Ticket
                </a>
                <Link
                  to={buildUrl('/request-a-quote')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: accent }}
                >
                  <Rocket className="w-4 h-4" />
                  Schedule a Session
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Types */}
        <section id="contact-support" className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
                Choose Your <span style={{ color: accent }}>Support Path</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                Every ticket is routed to the right specialist. Pick the option that matches your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {ticketTypes.map((ticket) => (
                <div key={ticket.title} className="theme-card rounded-3xl theme-shadow-primary p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ticket.color}20`, color: ticket.color }}>
                    <LifeBuoy className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary">{ticket.title}</h3>
                  <p className="text-sm theme-text-secondary leading-relaxed">{ticket.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: ticket.color }}>
                    {ticket.response}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Plans */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary relative overflow-hidden">
          <MinimalBigShapesAnimation />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
                Support Plans Built <span style={{ color: accent }}>For You</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                From launch to enterprise scale, our support tiers ensure you stay ahead.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {supportPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`theme-card rounded-3xl theme-shadow-primary p-6 space-y-4 border-2 ${plan.highlighted ? 'border-[#2d65bc]' : 'border-transparent'}`}
                >
                  <div>
                    <p className="text-sm uppercase tracking-wide theme-text-secondary">{plan.name}</p>
                    <h3 className="text-3xl font-bold theme-text-primary">{plan.price}</h3>
                    <p className="text-sm theme-text-secondary leading-relaxed">{plan.description}</p>
                  </div>
                  <ul className="space-y-2 theme-text-secondary text-sm">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={buildUrl('/contacts')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                    style={{ border: `1px solid ${accent}` }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="py-12 sm:py-16 lg:py-20 theme-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
                Connect With Our <span style={{ color: accent }}>Support Team</span>
              </h2>
              <p className="text-lg theme-text-secondary">
                Pick your preferred channel—we’ll get back to you as quickly as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="theme-card rounded-2xl theme-shadow-primary p-5 flex flex-col items-center gap-3 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}20`, color: accent }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-wide theme-text-secondary">{channel.label}</p>
                      <p className="text-lg font-semibold theme-text-primary">{channel.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <MinimalBigShapesAnimation />
          <div className="absolute inset-0 theme-gradient-primary opacity-50"></div>
          <div className="relative z-10 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary">
                  Ready to Elevate Your Operations?
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Extend your support plan, launch new campaigns, or explore advanced integrations—our team is here to lead the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={buildUrl('/request-a-quote')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: accent }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Strategy Call
                  </Link>
                  <Link
                    to={buildUrl('/contacts')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold theme-text-primary theme-bg-secondary transition-all duration-200 hover:scale-105"
                    style={{ border: `1px solid ${accent}` }}
                  >
                    <Mail className="w-4 h-4" />
                    Email Our Team
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

export default Support;

