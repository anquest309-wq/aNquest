import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from 'lucide-react';
import blogPosts, { findBlogBySlug } from '../data/blogPosts';
import { buildUrl } from '../utils/urlUtils';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import SEO from '../Components/SEO';

const BlogDetails = () => {
  const { slug } = useParams();
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
  /* Legacy inline blog data retained for reference
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
  */

  const blog = useMemo(() => findBlogBySlug(slug), [slug]);
  const relatedPosts = useMemo(
    () => blogPosts.filter((post) => post.slug !== slug).slice(0, 3),
    [slug]
  );

  const renderSection = (section, index) => {
    const key = `${section.type}-${index}`;

    switch (section.type) {
      case 'heading': {
        if (section.level === 2) {
          return (
            <h2
              key={key}
              className="text-3xl sm:text-4xl font-bold theme-text-primary mt-12 mb-6 leading-tight"
            >
              {section.content}
            </h2>
          );
        }

        return (
          <h3
            key={key}
            className="text-2xl font-semibold theme-text-primary mt-10 mb-4 leading-tight"
          >
            {section.content}
          </h3>
        );
      }
      case 'list': {
        const ListComponent = section.ordered ? 'ol' : 'ul';
        return (
          <ListComponent
            key={key}
            className={`pl-6 mb-6 space-y-2 ${
              section.ordered ? 'list-decimal' : 'list-disc'
            } theme-text-secondary`}
          >
            {section.items?.map((item, itemIndex) => (
              <li key={`${key}-item-${itemIndex}`} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ListComponent>
        );
      }
      case 'quote':
        return (
          <blockquote
            key={key}
            className="border-l-4 pl-6 italic text-lg theme-text-secondary my-6"
            style={{ borderColor: getThemeColor() }}
          >
            {section.content}
          </blockquote>
        );
      case 'paragraph':
      default:
        return (
          <p key={key} className="text-lg leading-relaxed theme-text-secondary mb-6">
            {section.content}
          </p>
        );
    }
  };

  const canonicalUrl = useMemo(() => `https://anquestmedia.com/blog/${slug}`, [slug]);
  const pageTitle = blog ? `${blog.title} | aNquest Media` : 'Blog Not Found | aNquest Media';
  const pageDescription = blog?.excerpt || 'Read the latest insights and updates from aNquest Media on digital strategy, technology, and marketing.';

  if (!blog) {
    return (
      <div className="min-h-screen theme-bg-primary flex items-center justify-center">
        <SEO
          title={pageTitle}
          description={pageDescription}
          canonicalUrl={canonicalUrl}
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold theme-text-primary mb-4">Blog Not Found</h1>
          <p className="theme-text-secondary mb-8">The blog post you're looking for doesn't exist.</p>
      <Link 
        to={buildUrl('/blogs')} 
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
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
      />
      {/* Floating Back Button */}
      <button
        type="button"
        onClick={() => window.history.length > 1 ? window.history.back() : window.location.assign(buildUrl('/blogs'))}
        className="fixed top-26 left-4 z-40 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
        style={{ backgroundColor: getThemeColor() }}
        aria-label="Go back to the previous page"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Navigation */}
      <div className="theme-bg-primary py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link 
            to={buildUrl('/blogs')} 
            className="inline-flex items-center gap-2 theme-text-secondary hover:theme-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <button
            onClick={() => window.history.length > 1 ? window.history.back() : null}
            className="inline-flex items-center gap-2 text-sm sm:text-base px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 theme-text-secondary hover:theme-text-primary"
            style={{ backgroundColor: `${getThemeColor()}12` }}
            aria-label="Go back to the previous page"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
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
            {/* Featured Media */}
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden mb-12">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-slate-400" />
                </div>
              )}
            </div>
            
            {/* Article Content */}
            <article className="max-w-none">
              {blog.sections?.map((section, index) => renderSection(section, index))}
            </article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold theme-text-primary mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags?.map((tag, index) => (
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

            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold theme-text-primary mb-8">
                  More from aNquest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                to={buildUrl(`/blog/${post.slug}`)}
                      className="group theme-card rounded-2xl overflow-hidden transition-all duration-300 hover:theme-shadow-secondary hover:-translate-y-1"
                    >
                      <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-sm theme-text-secondary">
                          <span style={{ color: getThemeColor() }} className="font-medium">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="text-xl font-semibold theme-text-primary leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="theme-text-secondary text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4">
              <Link
                to={buildUrl('/blogs')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: getThemeColor() }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
              <button
                type="button"
                onClick={() => window.history.length > 1 ? window.history.back() : null}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 theme-text-primary theme-bg-secondary hover:theme-bg-primary hover:text-white"
                style={{ border: `1px solid ${getThemeColor()}` }}
                aria-label="Go back to the previous page"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <MinimalBigShapesAnimation />
        <div className="absolute inset-0 theme-gradient-primary opacity-50"></div>
        <div className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                Ready to Bring Your Story to <span style={{ color: '#2d65bc' }}>Life?</span>
              </h2>
              <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                Talk to our team about turning your content vision into a compelling digital experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={buildUrl('/request-a-quote')}
                  className="text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: '#2d65bc' }}
                >
                  Request a Quote
                </Link>
                <Link 
                  to={buildUrl('/contacts')}
                  className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-4 px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-200 text-base sm:text-lg hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
