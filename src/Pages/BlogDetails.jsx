import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  // Get theme-based colors
  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#1a1a1a';
    } else if (theme === 'green') {
      return '#064e3b';
    }
    return '#2d65bc';
  };

  // Blog posts data (in a real app, this would come from an API or database)
  const blogPosts = {
    1: {
      id: 1,
      title: "The Future of Web Development in 2024",
      content: `
        <p>The landscape of web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with websites.</p>
        
        <h2>Key Trends Shaping Web Development</h2>
        
        <h3>1. AI-Powered Development Tools</h3>
        <p>Artificial Intelligence is revolutionizing how developers write code. AI-powered tools like GitHub Copilot and ChatGPT are becoming integral parts of the development workflow, helping developers write more efficient code faster than ever before.</p>
        
        <h3>2. Server-Side Rendering (SSR) and Static Site Generation (SSG)</h3>
        <p>With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, server-side rendering and static site generation are becoming the standard for modern web applications. These approaches offer better SEO, faster initial page loads, and improved user experience.</p>
        
        <h3>3. Progressive Web Apps (PWAs)</h3>
        <p>PWAs continue to bridge the gap between web and mobile applications. With enhanced offline capabilities, push notifications, and app-like experiences, PWAs are becoming a cost-effective alternative to native mobile apps.</p>
        
        <h3>4. WebAssembly (WASM)</h3>
        <p>WebAssembly is enabling high-performance applications in the browser by allowing developers to run code written in languages like C++, Rust, and Go at near-native speeds.</p>
        
        <h2>Emerging Technologies</h2>
        
        <h3>Edge Computing</h3>
        <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Services like Cloudflare Workers and Vercel Edge Functions are making it easier for developers to deploy code at the edge.</p>
        
        <h3>Micro-Frontends</h3>
        <p>As applications grow in complexity, micro-frontend architecture is gaining popularity. This approach allows teams to develop, deploy, and maintain different parts of a web application independently.</p>
        
        <h2>Best Practices for 2024</h2>
        
        <ul>
          <li><strong>Performance First:</strong> Core Web Vitals and performance optimization should be prioritized from the start</li>
          <li><strong>Accessibility:</strong> Building inclusive web experiences is not optional</li>
          <li><strong>Security:</strong> Implementing robust security measures from day one</li>
          <li><strong>Sustainability:</strong> Writing efficient code that reduces energy consumption</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of web development is bright, with new technologies and methodologies making it easier to build fast, secure, and user-friendly applications. Staying updated with these trends and continuously learning new skills will be key to success in this ever-evolving field.</p>
      `,
      author: "aNquest Team",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      tags: ["Web Development", "React", "Next.js", "AI", "PWA"]
    },
    2: {
      id: 2,
      title: "SEO Best Practices for Modern Websites",
      content: `
        <p>Search Engine Optimization (SEO) remains crucial for online success. With search algorithms constantly evolving, it's important to stay updated with the latest best practices to ensure your website ranks well and attracts organic traffic.</p>
        
        <h2>Technical SEO Fundamentals</h2>
        
        <h3>1. Core Web Vitals</h3>
        <p>Google's Core Web Vitals are now a ranking factor. Focus on:</p>
        <ul>
          <li><strong>Largest Contentful Paint (LCP):</strong> Should occur within 2.5 seconds</li>
          <li><strong>First Input Delay (FID):</strong> Should be less than 100 milliseconds</li>
          <li><strong>Cumulative Layout Shift (CLS):</strong> Should be less than 0.1</li>
        </ul>
        
        <h3>2. Mobile-First Indexing</h3>
        <p>Google predominantly uses the mobile version of content for indexing and ranking. Ensure your website is mobile-responsive and provides an excellent mobile experience.</p>
        
        <h3>3. Page Speed Optimization</h3>
        <p>Fast-loading pages improve user experience and rankings. Key strategies include:</p>
        <ul>
          <li>Image optimization and modern formats (WebP, AVIF)</li>
          <li>Code splitting and lazy loading</li>
          <li>Content Delivery Network (CDN) implementation</li>
          <li>Minimizing HTTP requests</li>
        </ul>
        
        <h2>Content Optimization</h2>
        
        <h3>Keyword Strategy</h3>
        <p>Modern SEO focuses on user intent rather than exact keyword matching. Create content that answers user questions and provides genuine value.</p>
        
        <h3>E-A-T (Expertise, Authoritativeness, Trustworthiness)</h3>
        <p>Google values content that demonstrates expertise and authority. Build trust through:</p>
        <ul>
          <li>Author bios and credentials</li>
          <li>High-quality, well-researched content</li>
          <li>External citations and references</li>
          <li>Regular content updates</li>
        </ul>
        
        <h2>Structured Data</h2>
        <p>Implement schema markup to help search engines understand your content better. This can lead to rich snippets and improved click-through rates.</p>
        
        <h2>Local SEO</h2>
        <p>For businesses with physical locations, local SEO is crucial:</p>
        <ul>
          <li>Google My Business optimization</li>
          <li>Local citations and NAP consistency</li>
          <li>Customer reviews management</li>
          <li>Location-specific content</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>SEO success requires a holistic approach combining technical optimization, quality content, and user experience. Stay focused on providing value to your users, and the rankings will follow.</p>
      `,
      author: "aNquest Team",
      date: "March 12, 2024",
      category: "SEO",
      readTime: "7 min read",
      tags: ["SEO", "Digital Marketing", "Web Performance", "Google", "Content Strategy"]
    },
    3: {
      id: 3,
      title: "Mobile App Development Trends",
      content: `
        <p>The mobile app development landscape continues to evolve rapidly, driven by new technologies, changing user expectations, and emerging business needs. Let's explore the key trends shaping mobile development in 2024.</p>
        
        <h2>Cross-Platform Development</h2>
        
        <h3>React Native and Flutter</h3>
        <p>Cross-platform frameworks continue to dominate the mobile development space. React Native and Flutter allow developers to write code once and deploy to both iOS and Android platforms, significantly reducing development time and costs.</p>
        
        <h3>Benefits of Cross-Platform Development:</h3>
        <ul>
          <li>Faster time to market</li>
          <li>Cost-effective development</li>
          <li>Consistent user experience across platforms</li>
          <li>Easier maintenance and updates</li>
        </ul>
        
        <h2>AI and Machine Learning Integration</h2>
        
        <p>Mobile apps are increasingly incorporating AI and ML capabilities to provide personalized experiences:</p>
        
        <h3>Popular AI Features:</h3>
        <ul>
          <li><strong>Chatbots and Virtual Assistants:</strong> Providing 24/7 customer support</li>
          <li><strong>Recommendation Systems:</strong> Personalizing content and product suggestions</li>
          <li><strong>Image Recognition:</strong> Enabling visual search and AR features</li>
          <li><strong>Predictive Analytics:</strong> Anticipating user behavior and needs</li>
        </ul>
        
        <h2>5G Technology Impact</h2>
        
        <p>The widespread adoption of 5G networks is enabling new possibilities for mobile apps:</p>
        <ul>
          <li>Ultra-fast download and upload speeds</li>
          <li>Lower latency for real-time applications</li>
          <li>Enhanced AR/VR experiences</li>
          <li>IoT integration capabilities</li>
        </ul>
        
        <h2>App Security Trends</h2>
        
        <h3>Zero Trust Security Model</h3>
        <p>Mobile apps are adopting zero trust principles, assuming no user or device is trustworthy by default.</p>
        
        <h3>Biometric Authentication</h3>
        <p>Advanced biometric features like face recognition, fingerprint scanning, and voice recognition are becoming standard.</p>
        
        <h2>User Experience Innovation</h2>
        
        <h3>Dark Mode and Theme Customization</h3>
        <p>Users expect apps to support dark mode and customizable themes for better accessibility and user preference accommodation.</p>
        
        <h3>Gesture-Based Navigation</h3>
        <p>Intuitive gesture controls are replacing traditional button-based navigation for more fluid user experiences.</p>
        
        <h2>Development Best Practices</h2>
        
        <ul>
          <li><strong>Performance Optimization:</strong> Focus on app speed and responsiveness</li>
          <li><strong>Offline Functionality:</strong> Ensure apps work without internet connectivity</li>
          <li><strong>Regular Updates:</strong> Maintain apps with security patches and new features</li>
          <li><strong>User Feedback Integration:</strong> Continuously improve based on user input</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mobile app development continues to evolve with new technologies and user expectations. Success in mobile development requires staying current with trends while focusing on delivering exceptional user experiences that solve real problems.</p>
      `,
      author: "aNquest Team",
      date: "March 10, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      tags: ["Mobile Development", "React Native", "Flutter", "AI", "5G", "UX"]
    }
  };

  const blog = blogPosts[id];

  if (!blog) {
    return (
      <div className="min-h-screen theme-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold theme-text-primary mb-4">Blog Not Found</h1>
          <p className="theme-text-secondary mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: getThemeColor() }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Navigation */}
      <div className="theme-bg-primary py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 theme-text-secondary hover:theme-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: `${getThemeColor()}20`, color: getThemeColor() }}>
              {blog.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
              {blog.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 theme-text-secondary mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            {/* Share Button */}
            <div className="flex items-center gap-4">
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: `${getThemeColor()}20`, color: getThemeColor() }}
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl mb-12 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-slate-400" />
            </div>
            
            {/* Article Content */}
            <article className="prose prose-lg max-w-none theme-text-primary">
              <div 
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="blog-content"
                style={{
                  '--theme-color': getThemeColor()
                }}
              />
            </article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold theme-text-primary mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: `${getThemeColor()}15`, color: getThemeColor() }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: `linear-gradient(135deg, ${getThemeColor()}, ${getThemeColor()}CC)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get <span className="text-white/90">Started?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-a-quote"
                className="bg-white text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link 
                to="/contacts"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-200 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
