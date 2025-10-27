import React from 'react';
import { Code, Server, Database, Smartphone, Cloud, Wrench, Zap, Heart, CheckCircle } from 'lucide-react';

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

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend": return Code;
      case "Backend": return Server;
      case "Database": return Database;
      case "Mobile": return Smartphone;
      case "Cloud": return Cloud;
      case "Tools": return Wrench;
      default: return Code;
    }
  };

  return (
    <div className="min-h-screen theme-bg-secondary">
      {/* Hero Section */}
      <section className="theme-gradient-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="theme-accent-primary">Technologies</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl theme-text-secondary mb-8 leading-relaxed">
              We leverage cutting-edge technologies to build innovative, scalable, and high-performance digital solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                50+ Technologies
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Expert Level
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Modern Stack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Technology Stack
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              Our comprehensive technology expertise spans across multiple domains, ensuring we can tackle any project requirement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = getCategoryIcon(tech.category);
              return (
                <div 
                  key={index} 
                  className="group theme-card rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:scale-105 relative"
                >
                  {/* Background Image - Shows on Hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${tech.bgImage})` }}
                  />
                  
                  <div className="relative p-6">
                    <div className="w-full h-12  rounded-xl flex items-center  justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 theme-accent-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold theme-text-primary mb-2">
                      {tech.name}
                    </h3>
                    
                    <p className="text-sm theme-text-muted leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tech Stack */}
      <section className="theme-bg-secondary py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Our Technology Choices?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              We carefully select technologies based on performance, scalability, and long-term viability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="theme-card rounded-2xl p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-3 sm:mb-4">
                Performance First
              </h3>
              <p className="theme-text-secondary leading-relaxed">
                We prioritize technologies that deliver optimal performance and user experience
              </p>
            </div>

            <div className="theme-card rounded-2xl p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-3 sm:mb-4">
                Scalable Solutions
              </h3>
              <p className="theme-text-secondary leading-relaxed">
                Our technology stack grows with your business, ensuring long-term success
              </p>
            </div>

            <div className="theme-card rounded-2xl p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-3 sm:mb-4">
                Future-Proof
              </h3>
              <p className="theme-text-secondary leading-relaxed">
                We use modern, actively maintained technologies with strong community support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Build Something <span className="text-white/90">Amazing?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and how our technology expertise can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;