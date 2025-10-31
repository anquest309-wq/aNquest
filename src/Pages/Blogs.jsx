import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

const Blogs = () => {
  const { theme } = useTheme();

  // Get theme-based colors
  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#1a1a1a';
    }
    return '#2d65bc';
  };

  // Get CTA background based on theme
  const getCTABackground = () => {
    if (theme === 'light') {
      return 'linear-gradient(135deg, #2d65bc, #1e4a8e)';
    } else if (theme === 'dark') {
      return 'linear-gradient(135deg, #1a1a1a, #000000)';
    }
    return 'linear-gradient(135deg, #2d65bc, #1e4a8e)';
  };

  // Get CTA text color based on theme
  const getCTATextColor = () => {
    if (theme === 'light') {
      return 'text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    }
    return 'text-white';
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      author: "aNquest Team",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Learn effective SEO strategies to boost your website's visibility and ranking.",
      author: "aNquest Team",
      date: "March 12, 2024",
      category: "SEO",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2d93c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Mobile App Development Trends",
      excerpt: "Discover the latest trends in mobile app development and user experience.",
      author: "aNquest Team",
      date: "March 10, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden   py-8  sm:py-8 lg:py-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-8 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-32 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Our <span style={{ color: '#2d65bc' }}>Blog</span>
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and expert tips in technology and digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="theme-card rounded-3xl theme-shadow-primary overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer block"
                >
                  <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm theme-text-secondary mb-3">
                      <span style={{ color: '#2d65bc' }} className="font-medium">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold theme-text-primary mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="theme-text-secondary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm theme-text-secondary">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: getCTABackground() }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/12 rounded-full animate-float-fast"></div>
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-white/10 rounded-full animate-float-medium" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 ${getCTATextColor()}`}>
              Want to Stay <span className="opacity-90">Updated?</span>
            </h2>
            <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${getCTATextColor()} opacity-90`}>
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button className="text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[#1a4a8a]" style={{ backgroundColor: '#2d65bc' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
