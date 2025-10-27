import React from 'react';
import { ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, Smartphone, Globe, Package, Headphones, Zap, Award } from 'lucide-react';

const ECommerceSolutions = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Build powerful online stores with custom features, seamless checkout, and mobile optimization.",
      features: ["Custom Store Design", "Product Management", "Inventory Tracking", "Order Processing"]
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment processing with multiple payment gateways and fraud protection.",
      features: ["Multiple Gateways", "Fraud Protection", "Recurring Billing", "Mobile Payments"]
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "Comprehensive shipping solutions with real-time tracking and delivery management.",
      features: ["Shipping Calculators", "Real-time Tracking", "Delivery Management", "International Shipping"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SSL certificates, PCI compliance, and data protection.",
      features: ["SSL Certificates", "PCI Compliance", "Data Encryption", "Security Monitoring"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed analytics and reporting to track sales, customer behavior, and business growth.",
      features: ["Sales Analytics", "Customer Insights", "Inventory Reports", "Performance Metrics"]
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer relationship management with profiles, history, and support.",
      features: ["Customer Profiles", "Order History", "Support Tickets", "Loyalty Programs"]
    }
  ];

  const platforms = [
    {
      icon: Globe,
      title: "Shopify Development",
      description: "Custom Shopify stores with advanced features and seamless integrations",
      features: ["Custom Themes", "App Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "WooCommerce Solutions",
      description: "WordPress-based e-commerce solutions with unlimited customization",
      features: ["Custom Plugins", "Theme Development", "Payment Gateways", "SEO Optimization"]
    },
    {
      icon: Package,
      title: "Magento Development",
      description: "Enterprise-level e-commerce platforms for large-scale businesses",
      features: ["Custom Modules", "Multi-store Setup", "B2B Features", "Advanced Analytics"]
    },
    {
      icon: Zap,
      title: "Custom E-Commerce",
      description: "Fully custom e-commerce solutions built from scratch for unique requirements",
      features: ["Custom Development", "Unique Features", "Scalable Architecture", "API Development"]
    }
  ];

  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Cart",
      description: "Advanced shopping cart with saved items, quick checkout, and abandoned cart recovery",
      metrics: "35% increase in conversions"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment processing with multiple gateways and fraud protection",
      metrics: "99.9% uptime guarantee"
    },
    {
      icon: Truck,
      title: "Order Management",
      description: "Complete order management system with tracking and fulfillment automation",
      metrics: "50% faster order processing"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for business insights and growth",
      metrics: "Real-time data insights"
    }
  ];

  const integrations = [
    { name: "PayPal", icon: "💳", description: "Global payment processing", category: "Payment" },
    { name: "Stripe", icon: "💎", description: "Modern payment infrastructure", category: "Payment" },
    { name: "Square", icon: "⬜", description: "Point of sale integration", category: "Payment" },
    { name: "FedEx", icon: "📦", description: "Shipping and logistics", category: "Shipping" },
    { name: "UPS", icon: "🚚", description: "Package delivery services", category: "Shipping" },
    { name: "DHL", icon: "✈️", description: "International shipping", category: "Shipping" },
    { name: "Mailchimp", icon: "📧", description: "Email marketing automation", category: "Marketing" },
    { name: "Google Analytics", icon: "📊", description: "Website analytics tracking", category: "Analytics" },
    { name: "Facebook Pixel", icon: "📘", description: "Social media tracking", category: "Marketing" },
    { name: "Zendesk", icon: "🎧", description: "Customer support system", category: "Support" },
    { name: "QuickBooks", icon: "📋", description: "Accounting integration", category: "Accounting" },
    { name: "Salesforce", icon: "☁️", description: "CRM integration", category: "CRM" }
  ];

  return (
    <div className="min-h-screen theme-bg-secondary">
      {/* Hero Section */}
      <section className="theme-gradient-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              E-Commerce <span className="theme-accent-primary">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl theme-text-secondary mb-8 leading-relaxed">
              Build powerful online stores that drive sales and provide exceptional customer experiences
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Custom Development
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Multi-Platform
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Scalable Solutions
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
              Our E-Commerce <span className="theme-accent-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive e-commerce solutions that help you sell more and grow your business online
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

      {/* Platforms Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              E-Commerce <span className="theme-accent-primary">Platforms</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              We work with all major e-commerce platforms to deliver the best solution for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4">
                    {platform.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
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

      {/* Key Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Key <span className="theme-accent-primary">Features</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Essential features that make your e-commerce store successful and profitable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold theme-text-primary mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="text-lg font-bold theme-accent-primary">
                    {feature.metrics}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Third-Party <span className="theme-accent-primary">Integrations</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Seamlessly integrate with popular services to enhance your e-commerce functionality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="theme-card rounded-xl theme-shadow-primary p-4 sm:p-6 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {integration.icon}
                </div>
                
                <h3 className="text-sm sm:text-base font-bold theme-text-primary mb-2">
                  {integration.name}
                </h3>
                
                <p className="text-xs sm:text-sm theme-accent-primary font-semibold mb-2">
                  {integration.category}
                </p>
                
                <p className="text-xs theme-text-muted leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              E-Commerce <span className="theme-accent-primary">Results</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our e-commerce solutions deliver measurable improvements in sales and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">300%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Increase in Online Sales</h3>
              <p className="theme-text-secondary">Average sales growth for our e-commerce clients</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">45%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Faster Page Load</h3>
              <p className="theme-text-secondary">Improvement in website performance and speed</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">60%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Mobile Conversion</h3>
              <p className="theme-text-secondary">Increase in mobile device conversions</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">98%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Uptime Guarantee</h3>
              <p className="theme-text-secondary">Reliable hosting and infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your <span className="text-white/90">Online Store?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce solution that drives sales and provides exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg hover:scale-105"
              >
                Start Your Store
              </a>
              <a
                href="/contacts"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-200 text-lg hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerceSolutions;
