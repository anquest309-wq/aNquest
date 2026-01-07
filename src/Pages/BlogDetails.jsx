import React, { useMemo, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import {
  ArrowLeft, Calendar, Clock, User, Share2, BookOpen,
  Tag, Facebook, Twitter, Linkedin, Link2, CheckCircle,
  TrendingUp, ChevronRight, Mail, ArrowRight, Star, List
} from 'lucide-react';
import { buildUrl } from '../utils/urlUtils';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import SEO from '../Components/SEO';
import '../styles/blog-content.css';

const BlogDetails = () => {
  const { slug } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);



  const relatedPosts = [];
  const latestPosts = [];
  const popularPosts = [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Find current blog post
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/blogs/public/${slug}`
        );

        if (!res.ok) {
          setPost(null);
          return;
        }

        const data = await res.json();

        setPost({
          id: data.id,
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          image: data.image,
          readTime: data.read_time,
          tags: data.tags || [],
          author: data.users?.name || "Admin",
          date: new Date(data.created_at).toLocaleDateString(),
          featured: false,
        });
      } catch (err) {
        console.error("Failed to load blog", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

 
  // Extract headings from HTML content for TOC
  const tableOfContents = useMemo(() => {
    if (!post || !post.content) return [];
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content, 'text/html');
      const headings = doc.querySelectorAll('h2, h3, h4');
      const toc = [];

      headings.forEach((heading, index) => {
        const text = heading.textContent.trim();
        if (text) {
          const id = `heading-${index}-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
          toc.push({
            id,
            text,
            level: parseInt(heading.tagName.charAt(1))
          });
        }
      });

      return toc;
    } catch (error) {
      console.error('Error parsing TOC:', error);
      return [];
    }
  }, [post]);

  // Update content with IDs for headings after render
  useEffect(() => {
    if (post && post.content && tableOfContents.length > 0) {
      const contentDiv = document.querySelector('.blog-html-content');
      if (contentDiv) {
        const headings = contentDiv.querySelectorAll('h2, h3, h4');
        headings.forEach((heading, index) => {
          const tocItem = tableOfContents[index];
          if (tocItem && !heading.id) {
            heading.id = tocItem.id;
          }
        });
      }
    }
  }, [post, tableOfContents]);

  // Handle share functionality
  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = post?.title || 'Check out this article';

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Render content sections
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-lg theme-text-secondary leading-relaxed mb-6">
            {section.content}
          </p>
        );
      case 'heading':
        const HeadingTag = `h${section.level}`;
        const headingClasses = {
          2: 'text-3xl font-bold theme-text-primary mt-12 mb-6',
          3: 'text-2xl font-bold theme-text-primary mt-8 mb-4',
          4: 'text-xl font-bold theme-text-primary mt-6 mb-3'
        };
        return (
          <HeadingTag key={index} className={headingClasses[section.level] || headingClasses[3]}>
            {section.content}
          </HeadingTag>
        );
      case 'list':
        const ListTag = section.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`${section.ordered ? 'list-decimal' : 'list-disc'} list-inside space-y-3 mb-6 theme-text-secondary text-lg`}>
            {section.items.map((item, i) => (
              <li key={i} className="ml-4">{item}</li>
            ))}
          </ListTag>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#2d65bc] pl-6 py-4 my-8 italic theme-text-secondary bg-[#2d65bc]/5 rounded-r-lg">
            <p className="text-xl">{section.content}</p>
            {section.author && <cite className="block mt-2 text-sm font-semibold theme-text-primary">— {section.author}</cite>}
          </blockquote>
        );
      case 'code':
        return (
          <pre key={index} className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6">
            <code>{section.content}</code>
          </pre>
        );
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img
              src={section.src}
              alt={section.alt || ''}
              className="w-full rounded-2xl shadow-2xl"
            />
            {section.caption && (
              <figcaption className="text-center text-sm theme-text-secondary mt-3">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading article...</p>
      </div>
    );
  }


  // If post not found, show error state
  if (!post) {
    return (
      <>
        <SEO
          title="Article Not Found | aNquest Media"
          description="The article you're looking for doesn't exist."
          canonicalUrl={`https://anquestmedia.com/blog/${slug}`}
        />
        <div className="min-h-screen theme-bg-primary flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold theme-text-primary mb-4">Article Not Found</h1>
            <p className="theme-text-secondary mb-8 text-lg">The article you're looking for doesn't exist or has been moved.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d65bc] text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | aNquest Media Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonicalUrl={`https://anquestmedia.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />

      <div className="min-h-screen theme-bg-primary relative">
        {/* <CircleSquareBgAnimation theme={theme} /> */}


        {/* Hero Section */}
        <section className="relative py-10 sm:py-12 lg:py-16 theme-bg-secondary">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm theme-text-secondary mb-8 flex-wrap">
                <Link to="/" className="hover:text-[#2d65bc] transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-[#2d65bc] transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="theme-text-primary font-medium">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d65bc]/10 border border-[#2d65bc]/30 mb-6">
                <Tag className="w-4 h-4 text-[#2d65bc]" />
                <span className="text-sm font-bold text-[#2d65bc]">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 theme-text-secondary text-sm mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">aNquest media Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3 pb-8 border-b theme-border-primary">
                <span className="text-sm font-bold theme-text-primary">Share:</span>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-all hover:scale-110"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-110"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className={`w-10 h-10 rounded-full theme-card theme-text-primary flex items-center justify-center hover:bg-[#2d65bc] hover:text-white transition-all hover:scale-110 ${copied ? 'bg-green-500 text-white' : ''}`}
                  aria-label="Copy link"
                >
                  {copied ? <CheckCircle className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* Article Content with Sidebars */}
        <article className="relative py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-8xl mx-auto">

              {/* Left Sidebar - Table of Contents */}
              <aside className="lg:col-span-3 order-2 lg:order-1">
                {tableOfContents.length > 0 && (
                  <div className="sticky top-24 theme-card rounded-2xl p-6 mb-8 lg:mb-0 self-start">
                    <div className="flex items-center gap-2 mb-4">
                      <List className="w-5 h-5 text-[#2d65bc]" />
                      <h3 className="text-lg font-bold theme-text-primary">Table of Contents</h3>
                    </div>
                    <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(item.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          className={`block py-2 px-3 rounded-lg text-sm transition-all hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] ${item.level === 2
                            ? 'font-semibold theme-text-primary'
                            : item.level === 3
                              ? 'font-medium theme-text-secondary ml-4'
                              : 'font-normal theme-text-secondary ml-8 text-xs'
                            }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </aside>

              {/* Main Content */}

              <div className="lg:col-span-6 order-1 lg:order-2 ">

                <div className="rounded-3xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-fit"
                  />
                </div>
                <div className="prose prose-lg max-w-none theme-text-secondary blog-content">
                  {post.content && (
                    <div
                      className="blog-html-content leading-relaxed"
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75rem',
                        color: theme === 'light' ? '#4b5563' : '#d1d5db'
                      }}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  )}
                  {post.sections && post.sections.map((section, index) => renderSection(section, index))}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t theme-border-primary">
                    <h3 className="text-lg font-bold theme-text-primary mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full theme-card theme-text-primary text-sm font-medium hover:bg-[#2d65bc] hover:text-white transition-all cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl theme-card border-2 border-[#2d65bc]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2d65bc] to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold theme-text-primary mb-2">Written by {post.author}</h3>
                      <p className="theme-text-secondary text-sm leading-relaxed">
                        The aNquest Media team consists of experienced developers, designers, and digital strategists passionate about sharing knowledge and helping businesses succeed online.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
                  <Link
                    to={buildUrl('/blog')}
                    className="inline-flex items-center gap-2 px-6 py-3 theme-card theme-text-primary font-bold rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    All Articles
                  </Link>
                  <Link
                    to={buildUrl('/contacts')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d65bc] text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Right Sidebar - Popular Blogs */}
              <aside className="lg:col-span-3 order-3">
                <div className="sticky top-24 space-y-6 self-start">
                  <div className="theme-card rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-[#2d65bc]" />
                      <h3 className="text-lg font-bold theme-text-primary">Popular Articles</h3>
                    </div>
                    <div className="space-y-4">
                      {popularPosts.map((popularPost) => (
                        <Link
                          key={popularPost.id}
                          to={buildUrl(`/blog/${popularPost.slug}`)}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                              <img
                                src={popularPost.image}
                                alt={popularPost.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold theme-text-primary line-clamp-2 group-hover:text-[#2d65bc] transition-colors mb-1">
                                {popularPost.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs theme-text-secondary">
                                <Calendar className="w-3 h-3" />
                                <span>{popularPost.date}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="theme-card rounded-2xl p-6 bg-gradient-to-br from-[#2d65bc]/10 to-blue-600/10 border-2 border-[#2d65bc]/20">
                    <h3 className="text-lg font-bold theme-text-primary mb-2">Need Help?</h3>
                    <p className="text-sm theme-text-secondary mb-4">
                      Let's discuss your project and bring your ideas to life.
                    </p>
                    <Link
                      to={buildUrl('/contacts')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d65bc] text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-sm w-full justify-center"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Latest Blogs Section */}
        {latestPosts.length > 0 && (
          <section className="relative py-12 sm:py-16 lg:py-20 theme-bg-secondary">
            <CircleSquareBgAnimation theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#2d65bc]" />
                    <h2 className="text-3xl font-bold theme-text-primary">Latest Articles</h2>
                  </div>
                  <Link
                    to={buildUrl('/blog')}
                    className="hidden sm:flex items-center gap-2 text-[#2d65bc] font-semibold hover:gap-3 transition-all"
                  >
                    View All
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestPosts.map((latestPost) => (
                    <Link
                      key={latestPost.id}
                      to={buildUrl(`/blog/${latestPost.slug}`)}
                      className="group theme-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={latestPost.image}
                          alt={latestPost.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#2d65bc] text-xs font-bold rounded-full shadow-lg">
                            {latestPost.category}
                          </span>
                        </div>
                        {latestPost.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 bg-[#2d65bc] text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                              <Star className="w-3 h-3 fill-white" />
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs theme-text-secondary mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {latestPost.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {latestPost.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold theme-text-primary mb-2 line-clamp-2 group-hover:text-[#2d65bc] transition-colors leading-tight">
                          {latestPost.title}
                        </h3>

                        <p className="theme-text-secondary text-sm line-clamp-3 mb-4 leading-relaxed">
                          {latestPost.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t theme-border-primary/30">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d65bc] to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                              {latestPost.author.charAt(0)}
                            </div>
                            <span className="text-xs font-medium theme-text-primary">{latestPost.author}</span>
                          </div>
                          <span className="text-[#2d65bc] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Button for Mobile */}
                <div className="mt-8 text-center sm:hidden">
                  <Link
                    to={buildUrl('/blog')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d65bc] text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                  >
                    View All Articles
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative py-12 sm:py-16 theme-bg-primary">
            <CircleSquareBgAnimation theme={theme} containerType="absolute" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Tag className="w-6 h-6 text-[#2d65bc]" />
                  <h2 className="text-3xl font-bold theme-text-primary">Related Articles</h2>
                  <span className="text-sm theme-text-secondary">({post.category})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={buildUrl(`/blog/${relatedPost.slug}`)}
                      className="group theme-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#2d65bc] text-xs font-bold rounded-full shadow-lg">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs theme-text-secondary mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {relatedPost.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {relatedPost.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold theme-text-primary mb-2 line-clamp-2 group-hover:text-[#2d65bc] transition-colors leading-tight">
                          {relatedPost.title}
                        </h3>

                        <p className="theme-text-secondary text-sm line-clamp-3 mb-4 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t theme-border-primary/30">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d65bc] to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                              {relatedPost.author.charAt(0)}
                            </div>
                            <span className="text-xs font-medium theme-text-primary">{relatedPost.author}</span>
                          </div>
                          <span className="text-[#2d65bc] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                <div className="w-16 h-16 bg-[#2d65bc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-[#2d65bc]" />
                </div>

                <h2 className="text-3xl font-bold theme-text-primary mb-4">
                  Ready to Start Your Project?
                </h2>

                <p className="text-lg theme-text-secondary mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with innovative solutions and expert guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contacts"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2d65bc] text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 theme-card theme-text-primary font-bold rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all border-2 border-[#2d65bc]/30"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
