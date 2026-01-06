import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import CTABgAnimation from "../Components/Bg-animation-template/CTABgAnimation"
import SEO from '../Components/SEO';
import blogPostsData from '../data/blogPosts';
import { buildUrl } from '../utils/urlUtils';
import HomeHeroBg from '../Components/Bg-animation-template/HomeHeroBg';
import { ArrowRight } from 'react-feather';



const Blogs = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page
  const blogPosts = useMemo(() => blogPostsData, []);

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
    <>
      <SEO 
        title="aNquest Media - Official Blog - News, Insights, Updates and Tips"
        description="Stay updated with aNquest's official blog featuring the latest news, insights, updates, and expert tips on digital marketing, branding, and CRM technologies."
        keywords="aNquest blogs, digital marketing insights, technology trends, social media tips, SEO strategies, branding ideas, content marketing, digital platforms"
        canonicalUrl="https://anquestmedia.com/blogs"
      />
      <div className="min-h-screen theme-bg-primary ">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[550px] min-h-screen    sm:py-8 ">
       <HomeHeroBg/>       
        
        <div className="container mx-auto px-4 sm:px-6 pt-32 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 theme-text-primary">
              Our <span style={{ color: '#2d65bc' }}>Blog</span>
            </h1>
            <p className="text-md sm:text-lg theme-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and expert tips in technology and digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#stack" className="group text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 hover:bg-[#1a4a8a]" style={{ backgroundColor: '#2d65bc' }}>
              Explore Stack
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#benefits" className="text-[#2d65bc] bg-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d65bc] hover:text-white transition-all duration-300 border-2 border-[#2d65bc]">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-6 md:py-10 lg:py-2 theme-bg-primary relative overflow-hidden py-20"> 
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((post) => (
                <Link
                  key={post.id}
                  to={buildUrl(`/blog/${post.slug}`)}
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
      <CTABgAnimation/>
       
        
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
    </>
  );
};

export default Blogs;
