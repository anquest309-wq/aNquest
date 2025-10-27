import React, { useState } from 'react';
import { Code, Server, Database, Smartphone, Cloud, Wrench, Zap, Heart, CheckCircle, Filter } from 'lucide-react';

// Animated Background Component
const AnimatedBackground = ({ variant = 'primary' }) => {
  const sizes = {
    large: { circles: 'w-48 h-48', squares: 'w-24 h-24', triangles: '70px', blobs: 'w-64 h-64', orbs: 'w-56 h-56' },
    medium: { circles: 'w-32 h-32', squares: 'w-16 h-16', triangles: '50px', blobs: 'w-40 h-40', orbs: 'w-32 h-32' },
    small: { circles: 'w-30 h-30', squares: 'w-14 h-14', triangles: '46px', blobs: 'w-42 h-42', orbs: 'w-30 h-30' }
  };
  
  const size = sizes[variant] || sizes.medium;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Circles */}
      <div className={`absolute top-20 left-10 ${size.circles} rounded-full opacity-25 animate-float-slow`} style={{ backgroundColor: '#2d65bc' }}></div>
      <div className={`absolute top-40 right-20 ${size.circles} rounded-full opacity-20 animate-float-medium`} style={{ backgroundColor: '#2d65bc' }}></div>
      <div className={`absolute bottom-0 left-20 ${size.circles} rounded-full opacity-25 animate-float-fast`} style={{ backgroundColor: '#2d65bc' }}></div>
      
      {/* Floating Squares */}
      <div className={`absolute top-30 left-1/4 ${size.squares} opacity-25 animate-rotate-slow`} style={{ backgroundColor: '#2d65bc', transform: 'rotate(45deg)' }}></div>
      <div className={`absolute bottom-64 left-1/2 ${size.squares} opacity-19 animate-rotate-fast`} style={{ backgroundColor: '#2d65bc', transform: 'rotate(45deg)' }}></div>
      
      {/* Floating Triangles */}
      <div className="absolute top-32 right-1/4 w-0 h-0 opacity-25 animate-bounce-slow" style={{ 
        borderLeft: '40px solid transparent',
        borderRight: '40px solid transparent',
        borderBottom: `${size.triangles} solid #2d65bc`
      }}></div>
      
      {/* Organic Blobs */}
      <div className={`absolute top-1/4 left-1/2 ${size.blobs} opacity-15 animate-blob-slow`} style={{ 
        background: 'linear-gradient(135deg, #2d65bc, #2d65bc)',
        borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
      }}></div>
      
      {/* Gradient Orbs */}
      <div className={`absolute top-1/2 left-1/4 ${size.orbs} rounded-full opacity-20 animate-pulse-slow`} style={{ 
        background: 'radial-gradient(circle, #2d65bc, transparent)'
      }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(45, 101, 188, 0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="theme-gradient-primary text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
    <AnimatedBackground variant="large" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Our <span className="theme-accent-primary">Technologies</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl theme-text-secondary mb-6 md:mb-8 leading-relaxed px-4">
          We leverage cutting-edge technologies to build innovative, scalable, and high-performance digital solutions
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
          {['50+ Technologies', 'Expert Level', 'Modern Stack'].map((badge) => (
            <span key={badge} className="theme-bg-tertiary theme-text-primary px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Technology Card Component
const TechnologyCard = ({ tech, icon: Icon }) => (
  <div className="group theme-card rounded-xl md:rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:scale-105 relative h-full">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
      style={{ backgroundImage: `url(${tech.bgImage})` }}
    />
    
    <div className="relative p-4 sm:p-5 md:p-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 theme-accent-primary" />
      </div>
      
      <h3 className="text-base sm:text-lg font-bold theme-text-primary mb-2">
        {tech.name}
      </h3>
      
      <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
        {tech.description}
      </p>
    </div>
  </div>
);

// Technologies Grid Section Component
const TechnologiesGridSection = ({ technologies, categories }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: Code,
      Backend: Server,
      Database: Database,
      Mobile: Smartphone,
      Cloud: Cloud,
      Tools: Wrench
    };
    return icons[category] || Code;
  };
  
  const filteredTechs = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
      <AnimatedBackground variant="medium" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-3 sm:mb-4 md:mb-6 px-4">
            Technology Stack
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Our comprehensive technology expertise spans across multiple domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-4">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
              activeFilter === 'All'
                ? 'theme-gradient-primary text-white'
                : 'theme-card theme-text-primary hover:theme-shadow-primary'
            }`}
          >
            All Technologies
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'theme-gradient-primary text-white'
                  : 'theme-card theme-text-primary hover:theme-shadow-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredTechs.map((tech, index) => (
            <TechnologyCard 
              key={index} 
              tech={tech} 
              icon={getCategoryIcon(tech.category)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Card Component
const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="theme-card rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105 h-full">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 theme-bg-tertiary rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 theme-accent-primary" />
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold theme-text-primary mb-2 sm:mb-3 md:mb-4">
      {title}
    </h3>
    <p className="text-sm sm:text-base theme-text-secondary leading-relaxed">
      {description}
    </p>
  </div>
);

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Performance First',
      description: 'We prioritize technologies that deliver optimal performance and user experience'
    },
    {
      icon: Heart,
      title: 'Scalable Solutions',
      description: 'Our technology stack grows with your business, ensuring long-term success'
    },
    {
      icon: CheckCircle,
      title: 'Future-Proof',
      description: 'We use modern, actively maintained technologies with strong community support'
    }
  ];

  return (
    <section className="theme-bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <AnimatedBackground variant="small" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-3 sm:mb-4 md:mb-6 px-4">
            Why Our Technology Choices?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            We carefully select technologies based on performance, scalability, and long-term viability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 theme-gradient-accent">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-4">
          Ready to Build Something <span className="text-white/90">Amazing?</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Let's discuss your project and how our technology expertise can bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
          <a
            href="/contacts"
            className="bg-white theme-accent-primary font-bold py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg md:rounded-xl hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105 hover:shadow-2xl"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="border-2 border-white text-white font-bold py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg md:rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-300 text-sm sm:text-base md:text-lg hover:scale-105"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Main Technologies Component
const Technologies = () => {
  const technologies = [
    { name: "React.js", description: "Modern UI library for building interactive user interfaces", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop" },
    { name: "Next.js", description: "Full-stack React framework for production applications", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop" },
    { name: "Vue.js", description: "Progressive JavaScript framework for building UIs", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&auto=format&fit=crop" },
    { name: "Angular", description: "Platform for building mobile and desktop web applications", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop" },
    { name: "TypeScript", description: "Typed superset of JavaScript for better development experience", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", category: "Frontend", bgImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&auto=format&fit=crop" },
    
    { name: "Node.js", description: "JavaScript runtime for server-side development", category: "Backend", bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop" },
    { name: "Express.js", description: "Fast, unopinionated web framework for Node.js", category: "Backend", bgImage: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=600&auto=format&fit=crop" },
    { name: "Python", description: "Versatile programming language for web development", category: "Backend", bgImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop" },
    { name: "Django", description: "High-level Python web framework", category: "Backend", bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop" },
    { name: "FastAPI", description: "Modern, fast web framework for building APIs", category: "Backend", bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop" },
    { name: "PHP", description: "Server-side scripting language for web development", category: "Backend", bgImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&auto=format&fit=crop" },
    
    { name: "MongoDB", description: "NoSQL document database for modern applications", category: "Database", bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop" },
    { name: "PostgreSQL", description: "Advanced open-source relational database", category: "Database", bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop" },
    { name: "MySQL", description: "Popular open-source relational database", category: "Database", bgImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop" },
    { name: "Redis", description: "In-memory data structure store for caching", category: "Database", bgImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop" },
    { name: "Firebase", description: "Google's mobile and web application platform", category: "Database", bgImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop" },
    { name: "Supabase", description: "Open source Firebase alternative", category: "Database", bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop" },
    
    { name: "React Native", description: "Cross-platform mobile app development", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop" },
    { name: "Flutter", description: "Google's UI toolkit for building natively compiled applications", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=600&auto=format&fit=crop" },
    { name: "Ionic", description: "Cross-platform mobile app development framework", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=600&auto=format&fit=crop" },
    { name: "Expo", description: "Platform for universal React applications", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&auto=format&fit=crop" },
    { name: "Swift", description: "Apple's programming language for iOS development", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&auto=format&fit=crop" },
    { name: "Kotlin", description: "Modern programming language for Android development", category: "Mobile", bgImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&auto=format&fit=crop" },
    
    { name: "AWS", description: "Amazon Web Services cloud platform", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop" },
    { name: "Vercel", description: "Platform for frontend developers", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop" },
    { name: "Netlify", description: "Platform for web developers", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop" },
    { name: "Docker", description: "Containerization platform for applications", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop" },
    { name: "GitHub Actions", description: "CI/CD platform for automated workflows", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop" },
    { name: "Heroku", description: "Cloud platform for deploying applications", category: "Cloud", bgImage: "https://images.unsplash.com/photo-1667372335937-d03be6fb0a7c?w=600&auto=format&fit=crop" },
    
    { name: "Git", description: "Version control system for tracking changes", category: "Tools", bgImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&auto=format&fit=crop" },
    { name: "Webpack", description: "Module bundler for JavaScript applications", category: "Tools", bgImage: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&auto=format&fit=crop" },
    { name: "GSAP", description: "Professional-grade animation library", category: "Tools", bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop" },
    { name: "Framer Motion", description: "Production-ready motion library for React", category: "Tools", bgImage: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&auto=format&fit=crop" },
    { name: "Swiper", description: "Modern touch slider for mobile web", category: "Tools", bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop" },
    { name: "Chart.js", description: "Simple yet flexible charting library", category: "Tools", bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop" }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Mobile', 'Cloud', 'Tools'];

  return (
    <div className="min-h-screen theme-bg-secondary">
      <HeroSection />
      <TechnologiesGridSection technologies={technologies} categories={categories} />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Technologies;