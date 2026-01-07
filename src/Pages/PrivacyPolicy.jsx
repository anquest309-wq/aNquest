import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  FileText,
  Clock,
  Users,
  Globe,
  Mail,
  Phone,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import SEO from "../Components/SEO";
import { buildUrl } from "../utils/urlUtils";

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    subsections: [
      {
        title: "Collected Data",
        content: [
          "Contact details such as name, email, phone number, and company information provided through forms or consultations.",
          "Project requirements, preferences, and business objectives shared during discovery sessions.",
          "Usage data collected through analytics tools to improve performance and user experience.",
          "Technical data including IP address, browser type, device information, and location."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: <Users className="w-6 h-6" />,
    subsections: [
      {
        title: "Purpose of Use",
        content: [
          "To deliver requested services, proposals, and onboarding materials.",
          "To communicate updates, announcements, and customer support responses.",
          "To improve services and develop relevant digital resources.",
          "To comply with legal obligations and protect our infrastructure."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    subsections: [
      {
        title: "Security Measures",
        content: [
          "Industry-standard encryption, access controls, and routine audits.",
          "Restricted access to project data for authorized team members only.",
          "Trusted third-party providers complying with global security standards."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Data Retention",
    icon: <Clock className="w-6 h-6" />,
    subsections: [
      {
        title: "Retention Policy",
        content: [
          "Data is retained only as long as necessary for stated purposes.",
          "Clients may request deletion or export via privacy@anquest.com.",
          "Secure backups maintained for legal and disaster recovery needs."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Sharing & Transfers",
    icon: <Globe className="w-6 h-6" />,
    subsections: [
      {
        title: "Data Sharing",
        content: [
          "We never sell or lease personal data.",
          "Data may be shared with trusted partners under confidentiality agreements.",
          "Cross-border transfers follow applicable legal safeguards."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Your Rights & Preferences",
    icon: <CheckCircle className="w-6 h-6" />,
    subsections: [
      {
        title: "Your Rights",
        content: [
          "Request access to your personal information.",
          "Update or correct personal data.",
          "Request deletion or object to processing.",
          "Manage communication preferences easily."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Contact Information",
    icon: <Mail className="w-6 h-6" />,
    subsections: [
      {
        title: "Reach Our Privacy Team",
        content: [
          "Email: privacy@anquest.com",
          "US Office: +1 (234) 392-3647",
          "India Office: +91 92661 40654",
          "Response time: within 5 business days."
        ]
      }
    ]
  }
];

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const [expandedSection, setExpandedSection] = useState(0);
  const accent = "#2d65bc";

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Privacy Policy - aNquest Digital & CRM Solutions"
        description="Understand how aNquest collects, uses, and protects your personal data."
        canonicalUrl="https://anquestmedia.com/privacy"
      />

      <div className="min-h-screen theme-bg-primary ">

        {/* Hero */}
        <section className="relative theme-bg-hero h-[550px] flex items-center justify-center text-white ">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Privacy <span style={{ color: "#dbeafe" }}>Policy</span>
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Learn how aNquest collects, uses, and safeguards your personal information.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#policy"
                className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold"
              >
                Read Policy
              </a>
              <Link
                to={buildUrl("/contact-us")}
                className="px-6 py-3 rounded-lg bg-black/20 border border-white text-white font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section id="policy" className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <aside className="lg:col-span-1 sticky top-28 h-fit">
              <div className="theme-card rounded-2xl p-5 shadow-lg">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Quick Navigation
                </h3>
                <div className="space-y-2">
                  {sections.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setExpandedSection(i);
                        document
                          .getElementById(`section-${s.id}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="text-left text-sm w-full px-3 py-2 rounded-lg hover:bg-blue-50"
                    >
                      {s.id}. {s.title}
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-blue-50">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-sm">Need Help?</p>
                      <Link
                        to={buildUrl("/contact-us")}
                        className="inline-block mt-2 text-xs px-3 py-1 bg-blue-600 text-white rounded-lg"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="lg:col-span-3 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className="theme-card rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-bold">
                        {section.id}. {section.title}
                      </h3>
                    </div>
                    {expandedSection === index ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>

                  {expandedSection === index && (
                    <div className="px-6 pb-6 border-t space-y-4">
                      {section.subsections.map((sub, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4">
                          <h4 className="font-semibold mb-2">{sub.title}</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            {sub.content.map((line, idx) => (
                              <li key={idx}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
