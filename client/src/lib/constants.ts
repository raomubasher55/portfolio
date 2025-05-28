import {
  Code,
  Smartphone,
  Database,
  Brain,
  Server,
  Layout,
  Shield,
  Bot,
} from "lucide-react";

export const SKILLS = [
  {
    name: "Full Stack Development",
    description: "MERN Stack, TypeScript, REST APIs",
    icon: Code,
  },
  {
    name: "Mobile Development",
    description: "iOS & Android with React Native",
    icon: Smartphone,
  },
  {
    name: "Blockchain",
    description: "Smart Contracts, Web3, DApps",
    icon: Database,
  },
  {
    name: "AI & ML",
    description: "ChatGPT Integration, ML Models",
    icon: Brain,
  },
  {
    name: "Backend Development",
    description: "Node.js, Express, MongoDB",
    icon: Server,
  },
  {
    name: "Frontend Development",
    description: "React, Next.js, TailwindCSS",
    icon: Layout,
  },
  {
    name: "Security",
    description: "Authentication, Authorization",
    icon: Shield,
  },
  {
    name: "AI Development",
    description: "Chatbots, NLP, Machine Learning",
    icon: Bot,
  },
];

export const PROJECTS = [
  // E-commerce Projects
  {
    title: "Portfolio Showcase",
    description: "Professional portfolio website with 3D animations and interactive sections",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
    technologies: ["TypeScript", "React", "Three.js", "TailwindCSS"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "Frontend"
  },
  {
    title: "Seduise E-commerce",
    description: "Premium fashion e-commerce platform with advanced filtering and personalization",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41",
    technologies: ["TypeScript", "Next.js", "Redux", "Stripe"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "E-commerce"
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS with video courses, quizzes, and progress tracking",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "Education"
  },
  {
    title: "LMS Server",
    description: "Robust backend for the Learning Management System with user authentication and content delivery",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    technologies: ["JavaScript", "Express", "MongoDB", "JWT"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Backend"
  },
  {
    title: "Bolt Payment Platform",
    description: "Fast and secure payment processing system with real-time transaction tracking",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
    technologies: ["TypeScript", "React", "Node.js", "Stripe"],
    glowColor: "rgba(234,179,8,0.2)", // Yellow
    category: "Fintech"
  },
  {
    title: "AMX Media Platform",
    description: "Multimedia content platform with social features and content monetization",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    technologies: ["CSS", "React", "Node.js", "Firebase"],
    glowColor: "rgba(239,68,68,0.2)", // Red
    category: "Media"
  },
  {
    title: "E-commerce SaaS Frontend",
    description: "White-label e-commerce frontend with customizable themes and components",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    technologies: ["JavaScript", "React", "Redux", "Styled Components"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "E-commerce"
  },
  {
    title: "E-commerce SaaS Platform",
    description: "Full-stack SaaS solution for launching custom e-commerce stores quickly",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    technologies: ["JavaScript", "Next.js", "Node.js", "MongoDB"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "E-commerce"
  },
  {
    title: "PV System Monitoring",
    description: "Solar panel monitoring system with real-time analytics and efficiency reports",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    technologies: ["TypeScript", "React", "D3.js", "WebSockets"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "Energy"
  },
  {
    title: "B2B Commerce Server",
    description: "Backend for business-to-business marketplace with inventory management",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
    technologies: ["JavaScript", "Express", "MongoDB", "Redis"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Backend"
  },
  {
    title: "Immersive Game Platform",
    description: "Browser-based gaming platform with multiplayer support and leaderboards",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914",
    technologies: ["TypeScript", "React", "WebGL", "Socket.io"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "Gaming"
  },
  {
    title: "Enterprise SaaS Solution",
    description: "Pre-built SaaS toolkit for rapid enterprise application development",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    technologies: ["JavaScript", "React", "Node.js", "GraphQL"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "Enterprise"
  },
  {
    title: "Automatrix Automation Server",
    description: "Backend system for industrial automation and process management",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
    technologies: ["JavaScript", "Express", "MongoDB", "MQTT"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Automation"
  },
  {
    title: "Ridesharing Application",
    description: "Modern ride-hailing platform with real-time location tracking and payments",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220",
    technologies: ["JavaScript", "React Native", "Firebase", "Google Maps API"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "Mobile"
  },
  {
    title: "Supermall Shopping Platform",
    description: "Comprehensive online shopping mall with multiple vendors and unified checkout",
    image: "https://images.unsplash.com/photo-1521120413309-42e7eada0334",
    technologies: ["JavaScript", "React", "Node.js", "Stripe"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "E-commerce"
  },
  {
    title: "Asset Management System",
    description: "Enterprise asset tracking and management solution with reporting tools",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["JavaScript", "React", "Express", "PostgreSQL"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "Enterprise"
  },
  {
    title: "Google Auth Integration",
    description: "Plug-and-play Google authentication system for web applications",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
    technologies: ["JavaScript", "OAuth 2.0", "Express", "JWT"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Authentication"
  },
  {
    title: "Facebook Auth System",
    description: "Seamless Facebook login integration for social applications",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
    technologies: ["JavaScript", "OAuth 2.0", "Express", "Passport.js"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "Authentication"
  },
  {
    title: "Real-time Chat Application",
    description: "Feature-rich messaging app with group chats and media sharing",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
    technologies: ["EJS", "Socket.io", "Express", "MongoDB"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "Communication"
  },
  {
    title: "Rental Management System",
    description: "Comprehensive platform for property rentals with booking and payment features",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "Real Estate"
  },
  {
    title: "Cinema Ticketing Platform",
    description: "Online movie ticket booking system with seat selection and promotions",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    technologies: ["JavaScript", "React", "Node.js", "Stripe"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Entertainment"
  },
  {
    title: "Movie Database Application",
    description: "Comprehensive film database with reviews, ratings, and recommendations",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b",
    technologies: ["JavaScript", "React", "TMDb API", "Firebase"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "Entertainment"
  },
  {
    title: "Equipment Rental Platform",
    description: "Heavy machinery and construction equipment rental marketplace",
    image: "https://images.unsplash.com/photo-1470082719408-b2843ab8ca0f",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "Industry"
  },
  {
    title: "B2B Marketplace",
    description: "Business-to-business trading platform with supplier verification",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["CSS", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "B2B"
  },
  {
    title: "E-commerce with Firebase",
    description: "Serverless e-commerce solution built on Firebase with real-time updates",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    technologies: ["JavaScript", "React", "Firebase", "Stripe"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "E-commerce"
  },
  {
    title: "Eyewear Store",
    description: "Specialized e-commerce platform for glasses with virtual try-on features",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
    technologies: ["JavaScript", "React", "Three.js", "Stripe"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "E-commerce"
  },
  {
    title: "Shopping Mall Platform",
    description: "Virtual shopping mall experience with 3D navigation and multiple stores",
    image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
    technologies: ["JavaScript", "React", "Three.js", "Node.js"],
    glowColor: "rgba(139,92,246,0.2)", // Purple
    category: "E-commerce"
  },
  {
    title: "Pinterest-Style Platform",
    description: "Visual discovery and bookmarking platform with social features",
    image: "https://images.unsplash.com/photo-1586974710160-55f48f417990",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(16,185,129,0.2)", // Green
    category: "Social Media"
  },
  {
    title: "Game Credit Marketplace",
    description: "Secure platform for buying and selling in-game currencies and items",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    technologies: ["JavaScript", "React", "Node.js", "Stripe"],
    glowColor: "rgba(249,115,22,0.2)", // Orange
    category: "Gaming"
  },
  {
    title: "Modern E-commerce Solution",
    description: "Feature-rich online store with advanced product filtering and recommendations",
    image: "https://images.unsplash.com/photo-1524750205628-c743046f3b65",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    glowColor: "rgba(59,130,246,0.2)", // Blue
    category: "E-commerce"
  }
];
