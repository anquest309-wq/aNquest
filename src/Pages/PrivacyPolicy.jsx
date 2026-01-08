import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Clock,
  Users,
  Globe,
  Mail,
  Lock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import SEO from "../Components/SEO";
import { buildUrl } from "../utils/urlUtils";

/* ---------------- DATA ---------------- */

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    subsections: [
      {
        title: "Collected Data",
        content: [
          "Contact details such as name, email, phone number, and company information.",
          "Project requirements and business objectives.",
          "Usage analytics and performance data.",
          "Technical data including IP, browser, and device info.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: <Users className="w-6 h-6" />,
    subsections: [
      {
        title: "Purpose of Use",
        content: [
          "Deliver services and proposals.",
          "Customer support and communication.",
          "Improve and optimize services.",
          "Legal and infrastructure protection.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Data Security",
    icon: <Lock className="w-6 h-6" />,
    subsections: [
      {
        title: "Security Measures",
        content: [
          "Industry-standard encryption.",
          "Restricted internal access.",
          "Trusted compliant partners.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Data Retention",
    icon: <Clock className="w-6 h-6" />,
    subsections: [
      {
        title: "Retention Policy",
        content: [
          "Data retained only when necessary.",
          "Deletion on request.",
          "Secure backups for compliance.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Sharing & Transfers",
    icon: <Globe className="w-6 h-6" />,
    subsections: [
      {
        title: "Data Sharing",
        content: [
          "No selling of personal data.",
          "Shared only with trusted partners.",
          "Legal safeguards applied.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Your Rights & Preferences",
    icon: <CheckCircle className="w-6 h-6" />,
    subsections: [
      {
        title: "Your Rights",
        content: [
          "Access your information.",
          "Correct or update data.",
          "Request deletion.",
          "Manage preferences.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Contact Information",
    icon: <Mail className="w-6 h-6" />,
    subsections: [
      {
        title: "Reach Our Privacy Team",
        content: [
          "privacy@anquest.com",
          "+1 (234) 392-3647",
          "+91 92661 40654",
          "Response within 5 business days.",
        ],
      },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const [expandedSection, setExpandedSection] = useState(0);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Privacy Policy - aNquest"
        description="Understand how aNquest collects, uses, and protects your data."
        canonicalUrl="https://anquestmedia.com/privacy"
      />

      <div className="min-h-screen theme-bg-primary theme-text-primary">

        {/* HERO */}
        <section className="theme-bg-hero h-[550px] flex items-center justify-center text-white">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold">
              Privacy <span className="theme-accent-primary">Policy</span>
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Learn how we protect and respect your data.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section id="policy" className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* SIDEBAR */}
            <aside className="lg:col-span-1 sticky top-28">
              <div className="theme-card rounded-2xl p-5">
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
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="
                        w-full text-left text-sm px-3 py-2 rounded-lg
                        theme-text-secondary
                        hover:theme-bg-tertiary
                        transition
                      "
                    >
                      {s.id}. {s.title}
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl theme-bg-tertiary">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 theme-accent-primary" />
                    <div>
                      <p className="font-semibold text-sm">Need Help?</p>
                      <Link
                        to={buildUrl("/contact-us")}
                        className="inline-block mt-2 text-xs px-3 py-1 rounded-lg theme-button-primary"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="lg:col-span-3 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className="theme-card rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="
                      w-full px-6 py-5 flex justify-between items-center
                      hover:theme-bg-tertiary
                      transition
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg theme-bg-tertiary theme-accent-primary">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-bold">
                        {section.id}. {section.title}
                      </h3>
                    </div>
                    {expandedSection === index ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {expandedSection === index && (
                    <div className="px-6 pb-6 border-t theme-border-primary space-y-4">
                      {section.subsections.map((sub, i) => (
                        <div key={i} className="theme-bg-tertiary rounded-xl p-4">
                          <h4 className="font-semibold mb-2">{sub.title}</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1 theme-text-secondary">
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
