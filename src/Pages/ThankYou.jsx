import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, Phone, MessageCircle } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import SEO from '../Components/SEO';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import { buildUrl } from '../utils/urlUtils';

const ThankYou = () => {
  const { theme } = useTheme();

  const accent = useMemo(() => (theme === 'dark' ? '#2d65bc' : '#2d65bc'), [theme]);

  return (
    <>
      <SEO
        title="Thank You - aNquest Media"
        description="Thanks for reaching out to aNquest Media. Our team will review your request and get in touch shortly."
        keywords="thank you, contact success, aNquest media"
        canonicalUrl="https://anquestmedia.com/thank-you"
      />
      <div className="min-h-screen theme-bg-primary pt-20 relative overflow-hidden">
        <MinimalBigShapesAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto theme-card rounded-3xl theme-shadow-primary p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accent}10`, color: accent }}>
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-lg theme-text-secondary mb-6">
              We’ve received your message and one of our specialists will get back to you within one business day.
              In the meantime, feel free to explore more resources or continue the conversation with our team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Link
                to={buildUrl('/')}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 theme-bg-secondary theme-text-primary hover:scale-105"
              >
                <Home className="w-6 h-6" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <Link
                to={buildUrl('/blogs')}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 theme-bg-secondary theme-text-primary hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold">Read Our Insights</span>
              </Link>
              <a
                href="tel:+12343923647"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 theme-bg-secondary theme-text-primary hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span className="font-semibold">Call Our Team</span>
              </a>
            </div>

            <Link
              to={buildUrl('/contacts')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              Submit Another Request
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

