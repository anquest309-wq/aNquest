import React from 'react';
import { Palette, Smartphone, Monitor, Users, Eye, MousePointer, Zap, Award, Layers, PenTool, Image, Brush } from 'lucide-react';
import SEO from '../Components/SEO';

const UIUXDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "User Interface Design",
      description: "Create beautiful, intuitive interfaces that users love to interact with and navigate effortlessly.",
      features: ["Visual Design", "Component Libraries", "Design Systems", "Interactive Prototypes"]
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Design user-centered experiences that solve real problems and delight your customers.",
      features: ["User Research", "Persona Development", "Journey Mapping", "Usability Testing"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Design native mobile experiences that feel natural and provide seamless user interactions.",
      features: ["iOS Design", "Android Design", "Responsive Design", "Touch Interactions"]
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Create responsive web designs that work perfectly across all devices and screen sizes.",
      features: ["Responsive Design", "Cross-browser Compatibility", "Performance Optimization", "Accessibility"]
    },
    {
      icon: Eye,
      title: "Visual Design",
      description: "Craft compelling visual designs that communicate your brand message effectively.",
      features: ["Brand Identity", "Color Theory", "Typography", "Visual Hierarchy"]
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Build comprehensive design systems that ensure consistency across all touchpoints.",
      features: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"]
    }
  ];

  const designProcess = [
    {
      icon: Users,
      title: "Research & Discovery",
      description: "Understand your users, business goals, and market context through comprehensive research",
      step: "01"
    },
    {
      icon: PenTool,
      title: "Ideation & Wireframing",
      description: "Generate ideas and create low-fidelity wireframes to explore different solutions",
      step: "02"
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Create high-fidelity designs with beautiful visuals and consistent branding",
      step: "03"
    },
    {
      icon: Zap,
      title: "Prototyping & Testing",
      description: "Build interactive prototypes and test with real users to validate designs",
      step: "04"
    },
    {
      icon: Layers,
      title: "Handoff & Implementation",
      description: "Provide detailed specifications and collaborate with developers for seamless implementation",
      step: "05"
    }
  ];

  const tools = [
    { name: "Figma", icon: "🎨", description: "Collaborative design tool for UI/UX", category: "Design" },
    { name: "Sketch", icon: "✏️", description: "Digital design toolkit for Mac", category: "Design" },
    { name: "Adobe XD", icon: "🎯", description: "UX/UI design and prototyping", category: "Design" },
    { name: "InVision", icon: "🔄", description: "Digital product design platform", category: "Prototyping" },
    { name: "Principle", icon: "⚡", description: "Animation and interaction design", category: "Animation" },
    { name: "Framer", icon: "🚀", description: "Interactive design and prototyping", category: "Prototyping" },
    { name: "Zeplin", icon: "📐", description: "Design handoff and collaboration", category: "Handoff" },
    { name: "Abstract", icon: "📁", description: "Version control for design files", category: "Collaboration" }
  ];

  const designPrinciples = [
    {
      icon: Eye,
      title: "User-Centered Design",
      description: "Every decision is made with the user's needs, goals, and behaviors in mind",
      metrics: "95% user satisfaction"
    },
    {
      icon: MousePointer,
      title: "Intuitive Navigation",
      description: "Design interfaces that users can navigate without thinking or learning",
      metrics: "60% faster task completion"
    },
    {
      icon: Zap,
      title: "Accessibility First",
      description: "Ensure designs are usable by people of all abilities and disabilities",
      metrics: "WCAG 2.1 AA compliant"
    },
    {
      icon: Award,
      title: "Consistent Experience",
      description: "Maintain visual and functional consistency across all touchpoints",
      metrics: "40% reduction in user errors"
    }
  ];

  return (
    <>
      <SEO
        title="UI/UX Design Services | aNquest Media"
        description="Deliver standout digital experiences with aNquest Media's UI/UX design services, from research and prototyping to interaction design."
        canonicalUrl="https://anquestmedia.com/ui-ux-design"
      />
      <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="theme-gradient-primary  py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              UI/UX <span className="theme-accent-primary">Design</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl theme-text-secondary mb-8 leading-relaxed">
              Create exceptional user experiences that delight customers and drive business growth
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                User-Centered Design
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Modern Tools
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Accessibility First
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Our Design <span className="theme-accent-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive UI/UX design services that transform ideas into beautiful, functional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm theme-text-muted">
                        <div className="w-2 h-2 theme-accent-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Our Design <span className="theme-accent-primary">Process</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              A proven 5-step process that ensures exceptional design outcomes every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {designProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <div className="text-2xl font-bold theme-accent-primary mb-4">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-bold theme-text-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="theme-text-secondary leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Design <span className="theme-accent-primary">Tools</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              We use industry-leading design tools to create exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="theme-card rounded-xl theme-shadow-primary p-4 sm:p-6 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {tool.icon}
                </div>
                
                <h3 className="text-sm sm:text-base font-bold theme-text-primary mb-2">
                  {tool.name}
                </h3>
                
                <p className="text-xs sm:text-sm theme-accent-primary font-semibold mb-2">
                  {tool.category}
                </p>
                
                <p className="text-xs theme-text-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Design <span className="theme-accent-primary">Principles</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Core principles that guide our design decisions and ensure exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {designPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold theme-text-primary mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  
                  <div className="text-lg font-bold theme-accent-primary">
                    {principle.metrics}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Design <span className="theme-accent-primary">Results</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our design solutions deliver measurable improvements in user experience and business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">85%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">User Satisfaction</h3>
              <p className="theme-text-secondary">Average user satisfaction score across all projects</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">60%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Faster Task Completion</h3>
              <p className="theme-text-secondary">Reduction in time to complete key user tasks</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">40%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Error Reduction</h3>
              <p className="theme-text-secondary">Decrease in user errors and confusion</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">95%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Accessibility Score</h3>
              <p className="theme-text-secondary">WCAG 2.1 AA compliance across all designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Design Something <span className="text-white/90">Amazing?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create user experiences that not only look beautiful but also drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contacts"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-200 text-lg hover:scale-105"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default UIUXDesign;
