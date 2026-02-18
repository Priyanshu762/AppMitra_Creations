export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "why-custom-web-development-for-your-business",
    title: "Why Choose Custom Web Development for Your Business",
    description:
      "Discover how custom websites outperform templates in performance, SEO, and user experience. Learn when to invest in bespoke web development.",
    excerpt:
      "Custom web development gives your business a unique online presence, better performance, and full control over features. Here's why it's worth the investment.",
    date: "2025-02-15",
    readingTime: "5 min read",
    content: [
      "A one-size-fits-all template might get you online quickly, but it rarely reflects your brand or scales with your business. Custom web development builds a website tailored to your goals, audience, and workflows.",
      "Custom sites load faster because they include only the code you need. They're easier to optimize for search engines, and you get full control over structure, content, and integrations. Whether you need a portfolio, an e-commerce store, or a complex web application, a custom build ensures every feature serves your users.",
      "At AppMitra Creations, we build high-performance websites with modern frameworks like Next.js and React. From responsive design to SEO and analytics, we focus on solutions that grow with you.",
    ],
  },
  {
    slug: "mobile-app-vs-responsive-website",
    title: "Mobile App vs Responsive Website: What's Right for Your Business?",
    description:
      "Compare mobile apps and responsive websites. Learn when to build an app, when a mobile-friendly site is enough, and how to decide for your IT project.",
    excerpt:
      "Should you build a mobile app or invest in a responsive website? We break down the pros, costs, and use cases so you can choose the right digital product.",
    date: "2025-02-12",
    readingTime: "6 min read",
    content: [
      "Both mobile apps and responsive websites reach users on phones and tablets, but they serve different purposes. A responsive website works everywhere, requires no install, and is ideal for content, lead generation, and simple transactions. It's also easier to maintain and update.",
      "Mobile apps shine when you need native device features (camera, GPS, push notifications), offline access, or a highly interactive experience. They're better for loyalty programs, productivity tools, and frequent daily use.",
      "Many businesses start with a strong responsive or progressive web app, then add a native app when user engagement and specific features justify the investment. We help you plan both web and app development so your digital strategy stays aligned with your goals.",
    ],
  },
  {
    slug: "when-to-build-desktop-application",
    title: "When to Build a Desktop Application for Your Business",
    description:
      "Desktop apps still matter for power users and enterprises. Learn when a desktop application beats web or mobile and how to plan a successful build.",
    excerpt:
      "Desktop applications offer performance, offline capability, and deep system integration. Here's when and why to consider building one for your business.",
    date: "2025-02-10",
    readingTime: "5 min read",
    content: [
      "Web and mobile get most of the attention, but desktop applications remain essential for tools that need heavy processing, offline work, or deep integration with the operating system. Think design software, development tools, accounting, and internal enterprise apps.",
      "Desktop apps can offer better performance for data-heavy tasks, more reliable offline use, and access to hardware and system APIs. Technologies like Electron and Tauri make it possible to build cross-platform desktop apps using web technologies, reducing cost and time to market.",
      "If your users work long sessions on a computer and need speed, security, or offline access, a desktop application might be the right choice. We help you evaluate web, mobile, and desktop options and build the solution that fits your workflow.",
    ],
  },
  {
    slug: "how-to-plan-saas-product-that-scales",
    title: "How to Plan a SaaS Product That Scales",
    description:
      "Practical steps to plan and build a scalable SaaS product: architecture, pricing, security, and growth. Essential reading for startups and product teams.",
    excerpt:
      "Building a SaaS product that scales requires clear planning around architecture, security, and growth. Learn the key decisions that set successful products apart.",
    date: "2025-02-08",
    readingTime: "7 min read",
    content: [
      "Software-as-a-Service (SaaS) products need to be reliable, secure, and able to grow with your user base from day one. Good planning avoids costly rewrites and keeps your team focused on features that matter.",
      "Start with a clear problem and audience. Define your core metrics (signups, retention, revenue) and design your architecture for multi-tenancy, horizontal scaling, and safe deployments. Security and compliance (e.g. data handling, authentication) should be part of the initial design, not an afterthought.",
      "Pricing and packaging influence your tech choices too. Usage-based billing, tiers, and trials all need to be supported by your backend and analytics. At AppMitra Creations, we build SaaS products that are scalable, maintainable, and ready for growth.",
    ],
  },
  {
    slug: "signs-you-need-a-new-website",
    title: "5 Signs You Need a New Website",
    description:
      "Is your website holding your business back? Learn the top signs it's time for a redesign or rebuild: speed, mobile experience, SEO, and security.",
    excerpt:
      "Outdated design, slow loading, poor mobile experience, and weak SEO are clear signs it's time to invest in a new website. Here's what to look for.",
    date: "2025-02-05",
    readingTime: "4 min read",
    content: [
      "Your website is often the first impression customers have of your business. If it's slow, hard to use on mobile, or no longer reflects your brand, it may be costing you leads and credibility.",
      "Key signs you need a new site: pages load slowly or fail on mobile; you can't update content easily; your site doesn't show up in search results; security updates are no longer available for your platform; or the design looks outdated compared to competitors.",
      "A modern rebuild doesn't always mean starting from zero. We can migrate your content, improve structure for SEO, and deliver a fast, responsive site that works across devices and is easy for you to maintain.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(limit = 3): Post[] {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, limit);
}
