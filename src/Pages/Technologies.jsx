import React from 'react';

const Technologies = () => {
  const technologies = [
    {
      category: "Frontend Technologies",
      icon: "🎨",
      technologies: [
        { name: "React.js", description: "Modern UI library for building interactive user interfaces", level: "Expert" },
        { name: "Next.js", description: "Full-stack React framework for production applications", level: "Expert" },
        { name: "Vue.js", description: "Progressive JavaScript framework for building UIs", level: "Advanced" },
        { name: "Angular", description: "Platform for building mobile and desktop web applications", level: "Advanced" },
        { name: "TypeScript", description: "Typed superset of JavaScript for better development experience", level: "Expert" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", level: "Expert" }
      ]
    },
    {
      category: "Backend Technologies",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime for server-side development", level: "Expert" },
        { name: "Express.js", description: "Fast, unopinionated web framework for Node.js", level: "Expert" },
        { name: "Python", description: "Versatile programming language for web development", level: "Advanced" },
        { name: "Django", description: "High-level Python web framework", level: "Advanced" },
        { name: "FastAPI", description: "Modern, fast web framework for building APIs", level: "Intermediate" },
        { name: "PHP", description: "Server-side scripting language for web development", level: "Advanced" }
      ]
    },
    {
      category: "Database Technologies",
      icon: "🗄️",
      technologies: [
        { name: "MongoDB", description: "NoSQL document database for modern applications", level: "Expert" },
        { name: "PostgreSQL", description: "Advanced open-source relational database", level: "Advanced" },
        { name: "MySQL", description: "Popular open-source relational database", level: "Advanced" },
        { name: "Redis", description: "In-memory data structure store for caching", level: "Intermediate" },
        { name: "Firebase", description: "Google's mobile and web application platform", level: "Advanced" },
        { name: "Supabase", description: "Open source Firebase alternative", level: "Intermediate" }
      ]
    },
    {
      category: "Mobile Development",
      icon: "📱",
      technologies: [
        { name: "React Native", description: "Cross-platform mobile app development", level: "Expert" },
        { name: "Flutter", description: "Google's UI toolkit for building natively compiled applications", level: "Advanced" },
        { name: "Ionic", description: "Cross-platform mobile app development framework", level: "Intermediate" },
        { name: "Expo", description: "Platform for universal React applications", level: "Advanced" },
        { name: "Swift", description: "Apple's programming language for iOS development", level: "Intermediate" },
        { name: "Kotlin", description: "Modern programming language for Android development", level: "Intermediate" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        { name: "AWS", description: "Amazon Web Services cloud platform", level: "Advanced" },
        { name: "Vercel", description: "Platform for frontend developers", level: "Expert" },
        { name: "Netlify", description: "Platform for web developers", level: "Expert" },
        { name: "Docker", description: "Containerization platform for applications", level: "Advanced" },
        { name: "GitHub Actions", description: "CI/CD platform for automated workflows", level: "Advanced" },
        { name: "Heroku", description: "Cloud platform for deploying applications", level: "Advanced" }
      ]
    },
    {
      category: "Tools & Libraries",
      icon: "🛠️",
      technologies: [
        { name: "Git", description: "Version control system for tracking changes", level: "Expert" },
        { name: "Webpack", description: "Module bundler for JavaScript applications", level: "Advanced" },
        { name: "GSAP", description: "Professional-grade animation library", level: "Expert" },
        { name: "Framer Motion", description: "Production-ready motion library for React", level: "Advanced" },
        { name: "Swiper", description: "Modern touch slider for mobile web", level: "Expert" },
        { name: "Chart.js", description: "Simple yet flexible charting library", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800";
      case "Advanced": return "bg-blue-100 text-blue-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-green-400">Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build innovative, scalable, and high-performance digital solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-400/20 text-green-300 px-4 py-2 rounded-full">50+ Technologies</span>
            <span className="bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full">Expert Level</span>
            <span className="bg-purple-400/20 text-purple-300 px-4 py-2 rounded-full">Modern Stack</span>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive technology expertise spans across multiple domains, ensuring we can tackle any project requirement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level)}`}>
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tech Stack */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Technology Choices?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We carefully select technologies based on performance, scalability, and long-term viability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance First</h3>
              <p className="text-gray-600">We prioritize technologies that deliver optimal performance and user experience</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">Our technology stack grows with your business, ensuring long-term success</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Proof</h3>
              <p className="text-gray-600">We use modern, actively maintained technologies with strong community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how our technology expertise can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
