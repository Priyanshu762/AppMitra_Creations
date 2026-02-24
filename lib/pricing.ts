/**
 * Pricing & Rate Card data for the digital agency.
 * Edit prices, features, and labels here to update the Pricing section.
 */

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  note?: string;
  features: string[];
  popular?: boolean;
  cta?: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  gradient: string; // Tailwind gradient e.g. "from-blue-500 to-purple-500"
  plans: PricingPlan[];
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "website-development",
    title: "Website Development",
    gradient: "from-blue-500 to-cyan-500",
    plans: [
      {
        id: "shopify-wordpress",
        name: "Shopify / WordPress Website",
        price: "Starting from ₹15,000",
        features: [
          "Business website setup",
          "Theme customization",
          "E-commerce functionality",
          "Payment gateway integration",
          "Basic SEO setup",
          "Mobile responsive design",
        ],
        cta: "Get Started",
      },
      {
        id: "custom-website",
        name: "Custom Website Development",
        price: "Starting from ₹30,000",
        note: "Price varies based on design & functionality complexity",
        features: [
          "Fully custom UI/UX",
          "Admin dashboard",
          "API integrations",
          "Dynamic database",
          "Scalable architecture",
          "Performance optimization",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    gradient: "from-purple-500 to-pink-500",
    plans: [
      {
        id: "mobile-app",
        name: "Mobile App Development",
        price: "Starting from ₹30,000",
        note: "Varies according to number of screens & features",
        features: [
          "Android / iOS / Hybrid apps",
          "UI/UX design",
          "Admin panel integration",
          "API & database setup",
          "Authentication system",
          "Play Store deployment support",
        ],
        cta: "Get Started",
      },
    ],
  },
  {
    id: "seo-services",
    title: "SEO Services",
    gradient: "from-emerald-500 to-teal-500",
    plans: [
      {
        id: "basic-seo",
        name: "Basic SEO",
        price: "₹8,000 / month",
        features: [
          "Keyword research (10–15)",
          "On-page SEO",
          "Meta optimization",
          "Search Console setup",
          "Technical audit",
          "Monthly report",
        ],
        cta: "Get Started",
      },
      {
        id: "standard-seo",
        name: "Standard SEO",
        price: "₹15,000 / month",
        popular: true,
        features: [
          "25–30 keywords",
          "Technical SEO fixes",
          "2 blog optimizations",
          "Backlink building",
          "Competitor analysis",
          "Monthly reporting",
        ],
        cta: "Get Started",
      },
      {
        id: "advanced-seo",
        name: "Advanced SEO",
        price: "₹25,000 / month",
        features: [
          "40–50 keywords",
          "Advanced technical SEO",
          "4 blog optimizations",
          "Strong backlinks",
          "Local SEO",
          "Conversion tracking",
          "Analytics reporting",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "smo",
    title: "Social Media Management (SMO)",
    gradient: "from-violet-500 to-fuchsia-500",
    plans: [
      {
        id: "smo-starter",
        name: "Starter",
        price: "₹6,000 / month",
        features: [
          "2 posts/week (8 monthly)",
          "Post design",
          "Captions & hashtags",
          "Scheduling",
        ],
        cta: "Get Started",
      },
      {
        id: "smo-growth",
        name: "Growth",
        price: "₹10,000 / month",
        features: [
          "4 posts/week (16 monthly)",
          "Custom creatives",
          "Content calendar",
          "Engagement handling",
        ],
        cta: "Get Started",
      },
      {
        id: "smo-premium",
        name: "Premium",
        price: "₹18,000 / month",
        features: [
          "Daily posts (30 monthly)",
          "Premium designs",
          "Reels strategy",
          "Full content management",
          "Monthly insights report",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    gradient: "from-indigo-500 to-blue-500",
    plans: [
      {
        id: "custom-software",
        name: "Custom Software Solutions",
        price: "Starting from ₹50,000",
        note: "Pricing depends on modules & integrations",
        features: [
          "CRM / ERP systems",
          "Inventory management",
          "Billing software",
          "Automation tools",
          "Role-based dashboards",
          "Cloud / database setup",
        ],
        cta: "Request Quote",
      },
    ],
  },
];
