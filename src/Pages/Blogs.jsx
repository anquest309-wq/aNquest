import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import DenseBgAnimation from '../Components/Bg-animation-template/DenseBgAnimation';
// import LargeShapesBgAnimation from '../Components/Bg-animation-template/LargeShapesBgAnimation';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import { MinimalBigShapesAnimation } from '../Components/Bg-animation-template';
// import GridStructureBgAnimation from '../Components/Bg-animation-template/GridStructureBgAnimation';

const Blogs = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page

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
    },
    {
      id: 4,
      title: "React 19: What's New and Exciting",
      excerpt: "Dive into the latest features and improvements in React 19 that every developer should know.",
      author: "aNquest Team",
      date: "March 8, 2024",
      category: "Web Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Building Scalable Backend Systems",
      excerpt: "Learn how to design and implement backend systems that can handle millions of requests.",
      author: "aNquest Team",
      date: "March 5, 2024",
      category: "Backend Development",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "UI/UX Design Principles for 2024",
      excerpt: "Master the essential UI/UX design principles that create engaging and intuitive user experiences.",
      author: "aNquest Team",
      date: "March 3, 2024",
      category: "Design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "Cloud Computing: A Complete Guide",
      excerpt: "Everything you need to know about cloud computing, from basics to advanced strategies.",
      author: "aNquest Team",
      date: "February 28, 2024",
      category: "Cloud Computing",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "API Security Best Practices",
      excerpt: "Protect your APIs with these essential security practices and avoid common vulnerabilities.",
      author: "aNquest Team",
      date: "February 25, 2024",
      category: "Security",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we write, test, and deploy code.",
      author: "aNquest Team",
      date: "February 22, 2024",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      title: "Database Optimization Techniques",
      excerpt: "Improve your application's performance with these proven database optimization strategies.",
      author: "aNquest Team",
      date: "February 20, 2024",
      category: "Database",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop"
    },
    {
      id: 11,
      title: "Progressive Web Apps: The Future of Mobile",
      excerpt: "Why PWAs are becoming the preferred choice for mobile applications and how to build them.",
      author: "aNquest Team",
      date: "February 18, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      id: 12,
      title: "Docker and Containerization Explained",
      excerpt: "Learn how Docker containers revolutionize application deployment and development workflows.",
      author: "aNquest Team",
      date: "February 15, 2024",
      category: "DevOps",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop"
    },
    {
      id: 13,
      title: "GraphQL vs REST: Which Should You Choose?",
      excerpt: "A comprehensive comparison of GraphQL and REST APIs to help you make the right choice.",
      author: "aNquest Team",
      date: "February 12, 2024",
      category: "Web Development",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      id: 14,
      title: "Cybersecurity Fundamentals for Developers",
      excerpt: "Essential cybersecurity practices every developer must know to build secure applications.",
      author: "aNquest Team",
      date: "February 10, 2024",
      category: "Security",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    },
    {
      id: 15,
      title: "Microservices Architecture Patterns",
      excerpt: "Design scalable and maintainable systems using microservices architecture patterns.",
      author: "aNquest Team",
      date: "February 8, 2024",
      category: "Backend Development",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 16,
      title: "Modern CSS Techniques and Tricks",
      excerpt: "Discover advanced CSS techniques that will take your styling skills to the next level.",
      author: "aNquest Team",
      date: "February 5, 2024",
      category: "Web Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      id: 17,
      title: "Building Real-Time Applications with WebSockets",
      excerpt: "Create responsive real-time applications using WebSocket technology for instant communication.",
      author: "aNquest Team",
      date: "February 3, 2024",
      category: "Web Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      id: 18,
      title: "TypeScript: Advanced Type System Features",
      excerpt: "Unlock the full potential of TypeScript's type system with these advanced features and patterns.",
      author: "aNquest Team",
      date: "February 1, 2024",
      category: "Web Development",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      id: 19,
      title: "Getting Started with Kubernetes",
      excerpt: "A beginner's guide to Kubernetes and container orchestration for modern applications.",
      author: "aNquest Team",
      date: "January 29, 2024",
      category: "DevOps",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop"
    },
    {
      id: 20,
      title: "JavaScript Performance Optimization",
      excerpt: "Learn how to optimize JavaScript code for better performance and faster load times.",
      author: "aNquest Team",
      date: "January 27, 2024",
      category: "Web Development",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      id: 21,
      title: "Serverless Architecture: Pros and Cons",
      excerpt: "Evaluate whether serverless architecture is the right choice for your next project.",
      author: "aNquest Team",
      date: "January 25, 2024",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 22,
      title: "Design Patterns Every Developer Should Know",
      excerpt: "Master the most important design patterns to write cleaner and more maintainable code.",
      author: "aNquest Team",
      date: "January 23, 2024",
      category: "Programming",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      id: 23,
      title: "Testing Strategies for Modern Applications",
      excerpt: "Comprehensive testing strategies including unit, integration, and end-to-end testing.",
      author: "aNquest Team",
      date: "January 21, 2024",
      category: "Testing",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop"
    },
    {
      id: 24,
      title: "Version Control Best Practices with Git",
      excerpt: "Essential Git workflows and best practices for effective version control in team environments.",
      author: "aNquest Team",
      date: "January 19, 2024",
      category: "Development Tools",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800&h=600&fit=crop"
    },
    {
      id: 25,
      title: "Building Accessible Web Applications",
      excerpt: "Create inclusive web applications that are accessible to all users, following WCAG guidelines.",
      author: "aNquest Team",
      date: "January 17, 2024",
      category: "Web Development",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    },
    {
      id: 26,
      title: "CI/CD Pipeline: Setup and Best Practices",
      excerpt: "Streamline your development workflow with continuous integration and deployment pipelines.",
      author: "aNquest Team",
      date: "January 15, 2024",
      category: "DevOps",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop"
    },
    {
      id: 27,
      title: "Node.js Performance Optimization Tips",
      excerpt: "Boost your Node.js application performance with these proven optimization techniques.",
      author: "aNquest Team",
      date: "January 13, 2024",
      category: "Backend Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="min-h-screen theme-bg-primary pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden     sm:py-8 ">
        <CircleSquareBgAnimation/>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-8 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-32 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Our <span style={{ color: '#2d65bc' }}>Blog</span>
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and expert tips in technology and digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-6 md:py-10 lg:py-2 theme-bg-primary relative overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((post) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 1
                        ? 'opacity-50 cursor-not-allowed theme-text-secondary'
                        : 'theme-card theme-shadow-primary hover:scale-105 theme-text-primary'
                    }`}
                    style={currentPage !== 1 ? { border: `1px solid ${getThemeColor()}30` } : {}}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="px-4 py-2 rounded-lg font-medium theme-card theme-shadow-primary hover:scale-105 theme-text-primary transition-all duration-300"
                        style={{ border: `1px solid ${getThemeColor()}30` }}
                      >
                        1
                      </button>
                      {currentPage > 4 && <span className="theme-text-secondary px-2">...</span>}
                    </>
                  )}

                  {getPageNumbers().map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === pageNum
                          ? 'text-white'
                          : 'theme-card theme-shadow-primary hover:scale-105 theme-text-primary'
                      }`}
                      style={
                        currentPage === pageNum
                          ? { backgroundColor: getThemeColor() }
                          : { border: `1px solid ${getThemeColor()}30` }
                      }
                    >
                      {pageNum}
                    </button>
                  ))}

                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && <span className="theme-text-secondary px-2">...</span>}
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="px-4 py-2 rounded-lg font-medium theme-card theme-shadow-primary hover:scale-105 theme-text-primary transition-all duration-300"
                        style={{ border: `1px solid ${getThemeColor()}30` }}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed theme-text-secondary'
                        : 'theme-card theme-shadow-primary hover:scale-105 theme-text-primary'
                    }`}
                    style={currentPage !== totalPages ? { border: `1px solid ${getThemeColor()}30` } : {}}
                  >
                    Next
                  </button>
                </div>

                {/* Page Info */}
                <p className="text-sm theme-text-secondary">
                  Page {currentPage} of {totalPages} ({blogPosts.length} articles)
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: getCTABackground() }}>
        <MinimalBigShapesAnimation/>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div> */}
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
