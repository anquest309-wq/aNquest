const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const corePosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development.",
    author: 'aNquest Team',
    date: 'March 15, 2024',
    category: 'Web Development',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    tags: ['Web Development', 'React', 'Next.js', 'AI', 'PWA'],
    sections: [
      {
        type: 'paragraph',
        content:
          'The landscape of web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with websites.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Key Trends Shaping Web Development',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. AI-Powered Development Tools',
      },
      {
        type: 'paragraph',
        content:
          'Artificial Intelligence is revolutionizing how developers write code. AI-powered tools like GitHub Copilot and ChatGPT are becoming integral parts of the development workflow, helping developers write more efficient code faster than ever before.',
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Server-Side Rendering (SSR) and Static Site Generation (SSG)',
      },
      {
        type: 'paragraph',
        content:
          'With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, SSR and SSG are becoming the standard for modern web applications. These approaches offer better SEO, faster initial page loads, and improved user experience.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Progressive Web Apps (PWAs)',
      },
      {
        type: 'paragraph',
        content:
          'PWAs continue to bridge the gap between web and mobile applications. With enhanced offline capabilities, push notifications, and app-like experiences, PWAs are becoming a cost-effective alternative to native mobile apps.',
      },
      {
        type: 'heading',
        level: 3,
        content: '4. WebAssembly (WASM)',
      },
      {
        type: 'paragraph',
        content:
          'WebAssembly enables high-performance applications in the browser by allowing developers to run code written in languages like C++, Rust, and Go at near-native speeds.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Emerging Technologies',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Edge Computing',
      },
      {
        type: 'paragraph',
        content:
          'Edge computing brings computation closer to users, reducing latency and improving performance. Services like Cloudflare Workers and Vercel Edge Functions simplify deploying code at the edge.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Micro-Frontends',
      },
      {
        type: 'paragraph',
        content:
          'As applications grow in complexity, micro-frontend architecture allows teams to develop, deploy, and maintain different parts of a web application independently.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Best Practices for 2024',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Performance first: optimize Core Web Vitals from the start.',
          'Accessibility: inclusive experiences are not optional.',
          'Security: implement robust security measures on day one.',
          'Sustainability: write efficient code that reduces energy consumption.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion',
      },
      {
        type: 'paragraph',
        content:
          'The future of web development is bright, with new technologies making it easier to build fast, secure, and user-friendly applications. Staying updated with these trends and continuously learning new skills will be key to success in this ever-evolving field.',
      },
    ],
  },
  {
    id: 2,
    title: 'SEO Best Practices for Modern Websites',
    excerpt:
      "Learn effective SEO strategies to boost your website's visibility and ranking.",
    author: 'aNquest Team',
    date: 'March 12, 2024',
    category: 'SEO',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    tags: ['SEO', 'Digital Marketing', 'Web Performance', 'Google', 'Content Strategy'],
    sections: [
      {
        type: 'paragraph',
        content:
          'Search Engine Optimization remains crucial for online success. With search algorithms constantly evolving, staying updated with the latest best practices ensures your website ranks well and attracts organic traffic.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Technical SEO Fundamentals',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Core Web Vitals',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Largest Contentful Paint (LCP) should occur within 2.5 seconds.',
          'First Input Delay (FID) should be less than 100 milliseconds.',
          'Cumulative Layout Shift (CLS) should be less than 0.1.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Mobile-First Indexing',
      },
      {
        type: 'paragraph',
        content:
          'Google predominantly uses the mobile version of content for indexing and ranking. Ensure your website is mobile-responsive and provides an excellent mobile experience.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Page Speed Optimization',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Optimize images and adopt modern formats such as WebP or AVIF.',
          'Implement code splitting and lazy loading.',
          'Leverage a Content Delivery Network (CDN).',
          'Minimize HTTP requests and remove unused code.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Content Optimization',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Keyword Strategy',
      },
      {
        type: 'paragraph',
        content:
          'Modern SEO focuses on user intent rather than exact keyword matching. Create content that answers user questions and provides genuine value.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'E-A-T (Expertise, Authoritativeness, Trustworthiness)',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Provide author bios and credentials.',
          'Publish high-quality, well-researched content.',
          'Include external citations and references.',
          'Refresh and update important resources regularly.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Structured Data',
      },
      {
        type: 'paragraph',
        content:
          'Implement schema markup to help search engines understand your content better. Rich snippets resulting from structured data can dramatically improve click-through rates.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Local SEO',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Optimize Google Business Profile listings.',
          'Maintain consistent NAP (Name, Address, Phone) data across directories.',
          'Encourage and manage customer reviews.',
          'Create locally relevant landing pages and content.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion',
      },
      {
        type: 'paragraph',
        content:
          'SEO success requires a holistic approach combining technical optimization, quality content, and exceptional user experience. Focus on providing value to your users, and improved rankings will follow.',
      },
    ],
  },
  {
    id: 3,
    title: 'Mobile App Development Trends',
    excerpt:
      'Discover the latest trends in mobile app development and user experience.',
    author: 'aNquest Team',
    date: 'March 10, 2024',
    category: 'Mobile Development',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
    tags: ['Mobile Development', 'React Native', 'Flutter', 'AI', '5G', 'UX'],
    sections: [
      {
        type: 'paragraph',
        content:
          'The mobile app development landscape continues to evolve rapidly, driven by new technologies, changing user expectations, and emerging business needs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cross-Platform Development',
      },
      {
        type: 'heading',
        level: 3,
        content: 'React Native and Flutter',
      },
      {
        type: 'paragraph',
        content:
          'Cross-platform frameworks remain dominant. React Native and Flutter allow teams to reuse code across iOS and Android, drastically reducing time to market.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Benefits of Cross-Platform Development',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Faster time to market with unified code bases.',
          'Lower development and maintenance costs.',
          'Consistent user experiences across platforms.',
          'Simplified updates and feature rollouts.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'AI and Machine Learning Integration',
      },
      {
        type: 'paragraph',
        content:
          'Mobile apps increasingly incorporate AI and ML capabilities to deliver personalized experiences and predictive functionality.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Popular AI Features',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Chatbots and virtual assistants for instant support.',
          'Recommendation systems for personalized content.',
          'Image recognition powering visual search and AR.',
          'Predictive analytics anticipating user needs.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: '5G Technology Impact',
      },
      {
        type: 'paragraph',
        content:
          'Widespread adoption of 5G enables ultra-fast speeds, lower latency, and richer real-time experiences for mobile applications.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'App Security Trends',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Zero Trust Security Model',
      },
      {
        type: 'paragraph',
        content:
          'Mobile platforms are embracing zero-trust principles, assuming no user or device is trustworthy by default and continuously validating access.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Biometric Authentication',
      },
      {
        type: 'paragraph',
        content:
          'Advanced biometric features such as facial recognition, fingerprint scanning, and voice authentication are becoming standard in secure applications.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'User Experience Innovation',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Dark mode and theme customization to improve accessibility.',
          'Gesture-based navigation delivering fluid experiences.',
          'Offline functionality to maintain usability without connectivity.',
          'Regular updates based on user feedback and analytics.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusion',
      },
      {
        type: 'paragraph',
        content:
          'Success in mobile app development requires staying current with technological trends while focusing on user-centric, performance-driven experiences that solve real problems.',
      },
    ],
  },
];

const supplementaryPosts = [
  {
    id: 4,
    title: "React 19: What's New and Exciting",
    excerpt:
      'Dive into the latest features and improvements in React 19 that every developer should know.',
    author: 'aNquest Team',
    date: 'March 8, 2024',
    category: 'Web Development',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Building Scalable Backend Systems',
    excerpt:
      'Learn how to design and implement backend systems that can handle millions of requests.',
    author: 'aNquest Team',
    date: 'March 5, 2024',
    category: 'Backend Development',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'UI/UX Design Principles for 2024',
    excerpt:
      'Master the essential UI/UX design principles that create engaging and intuitive user experiences.',
    author: 'aNquest Team',
    date: 'March 3, 2024',
    category: 'Design',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Cloud Computing: A Complete Guide',
    excerpt:
      'Everything you need to know about cloud computing, from basics to advanced strategies.',
    author: 'aNquest Team',
    date: 'February 28, 2024',
    category: 'Cloud Computing',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'API Security Best Practices',
    excerpt:
      'Protect your APIs with these essential security practices and avoid common vulnerabilities.',
    author: 'aNquest Team',
    date: 'February 25, 2024',
    category: 'Security',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'The Rise of AI in Software Development',
    excerpt:
      'How artificial intelligence is transforming the way we write, test, and deploy code.',
    author: 'aNquest Team',
    date: 'February 22, 2024',
    category: 'AI & Machine Learning',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 10,
    title: 'Database Optimization Techniques',
    excerpt:
      "Improve your application's performance with these proven database optimization strategies.",
    author: 'aNquest Team',
    date: 'February 20, 2024',
    category: 'Database',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
  },
  {
    id: 11,
    title: 'Progressive Web Apps: The Future of Mobile',
    excerpt:
      'Why PWAs are becoming the preferred choice for mobile applications and how to build them.',
    author: 'aNquest Team',
    date: 'February 18, 2024',
    category: 'Mobile Development',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop',
  },
  {
    id: 12,
    title: 'Docker and Containerization Explained',
    excerpt:
      'Learn how Docker containers revolutionize application deployment and development workflows.',
    author: 'aNquest Team',
    date: 'February 15, 2024',
    category: 'DevOps',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop',
  },
  {
    id: 13,
    title: 'GraphQL vs REST: Which Should You Choose?',
    excerpt:
      'A comprehensive comparison of GraphQL and REST APIs to help you make the right choice.',
    author: 'aNquest Team',
    date: 'February 12, 2024',
    category: 'Web Development',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
  },
  {
    id: 14,
    title: 'Cybersecurity Fundamentals for Developers',
    excerpt:
      'Essential cybersecurity practices every developer must know to build secure applications.',
    author: 'aNquest Team',
    date: 'February 10, 2024',
    category: 'Security',
    readTime: '11 min read',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  },
  {
    id: 15,
    title: 'Microservices Architecture Patterns',
    excerpt:
      'Design scalable and maintainable systems using microservices architecture patterns.',
    author: 'aNquest Team',
    date: 'February 8, 2024',
    category: 'Backend Development',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    id: 16,
    title: 'Modern CSS Techniques and Tricks',
    excerpt:
      'Discover advanced CSS techniques that will take your styling skills to the next level.',
    author: 'aNquest Team',
    date: 'February 5, 2024',
    category: 'Design',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop',
  },
];

const additionalSections = [
  {
    type: 'paragraph',
    content:
      'This article is part of our ongoing knowledge series. Stay tuned for detailed insights, in-depth tutorials, and practical frameworks you can apply immediately.',
  },
];

const blogPosts = [...corePosts, ...supplementaryPosts].map((post) => ({
  ...post,
  slug: post.slug || generateSlug(post.title),
  sections: post.sections || additionalSections,
  tags: post.tags || ['aNquest', post.category],
}));

export const getBlogPosts = () => blogPosts;

export const findBlogBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);

export const findBlogById = (id) =>
  blogPosts.find((post) => post.id === Number(id));

export default blogPosts;

