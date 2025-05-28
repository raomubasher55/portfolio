import { useState, useMemo, useEffect } from "react";
import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Loader, ImageIcon } from "lucide-react";

// Image component with loading state
function ProjectImage({ src, alt, className }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Generate a tiny placeholder image (blur-up technique)
  const placeholderSrc = useMemo(() => {
    // Generate a placeholder with same color scheme as the actual image
    // This is a simplified approach - in a real app you might want to use actual tiny versions
    const colorBase = src.includes('unsplash') ? src.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % 360 : 240;
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5' width='8' height='5'%3E%3Crect width='8' height='5' fill='hsl(${colorBase}, 70%25, 30%25)'/%3E%3C/svg%3E`;
  }, [src]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className={`relative ${className} bg-muted/20 overflow-hidden`}>
      {/* Placeholder image (blur-up effect) */}
      <img 
        src={placeholderSrc} 
        alt="" 
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 blur-xl scale-110"
        style={{ opacity: loading ? 0.8 : 0 }}
      />
      
      {/* Show loader or error while image loads */}
      {(loading || error) && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10 backdrop-blur-[2px] z-10">
          {loading && !error ? (
            <div className="animate-pulse flex flex-col items-center gap-2">
              <Loader size={24} className="text-primary animate-spin" />
              <span className="text-xs text-muted-foreground">Loading image...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ImageIcon size={24} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Failed to load image</span>
            </div>
          )}
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${loading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'} ${error ? 'hidden' : ''}`}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
}

export default function Projects() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("All");
  // State for loading status
  const [isLoading, setIsLoading] = useState(true);
  // State for projects data
  const [projectsData, setProjectsData] = useState([]);
  
  // Simulate loading projects with a delay
  useEffect(() => {
    // Reset loading state when category changes
    setIsLoading(true);
    
    // Simulate network delay
    const timer = setTimeout(() => {
      setProjectsData(PROJECTS);
      setIsLoading(false);
    }, 800); // Add a delay to simulate loading
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get all unique categories from projects
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(PROJECTS.map(project => project.category))];
    return cats.sort();
  }, []);
  
  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory, projectsData]);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setActiveCategory(category);
    
    // Simulate filtering delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Simplified container without staggering delays
  const container = {
    hidden: {},
    show: {}
  };

  // Simplified item animation: a quick fade-in with no vertical movement
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.15 } }
  };

  return (
    <section id="projects" className="relative py-20 bg-muted/50">
      {/* Header Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
      {/* Animated Glowing Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(40,0,60,0.3) 0%, rgba(10,10,30,0.2) 70%, transparent 100%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div className="container flex flex-col items-center justify-center min-h-[60vh]">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Showcasing a diverse portfolio of {PROJECTS.length} projects spanning various technologies and domains
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted/40 text-muted-foreground hover:bg-muted/80'
              }`}
              disabled={isLoading}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Project Count or Loading indicator */}
        {isLoading ? (
          <motion.div 
            className="flex items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-4">
              <Loader size={40} className="text-primary animate-spin" />
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          </motion.div>
        ) : (
          <motion.p
            className="text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ''}
          </motion.p>
        )}
        
        {/* Projects Grid */}
        {isLoading ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] justify-center min-h-[400px]"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.8 }}
          >
            {/* Skeleton loaders for projects */}
            {[...Array(6)].map((_, index) => (
              <motion.div 
                key={index}
                className="rounded-lg bg-card/50 overflow-hidden h-80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-1/2 bg-muted/20 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-muted/20 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-muted/20 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted/20 rounded w-2/3 animate-pulse"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-6 bg-muted/20 rounded-full w-16 animate-pulse"></div>
                    <div className="h-6 bg-muted/20 rounded-full w-20 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="group transition-all duration-300"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0px 0px 15px 5px rgba(255,255,255,0.8)",
                transition: { duration: 0.2 }
              }}
            >
              <Card className="overflow-hidden h-full relative">
                {/* Glowing overlay that pulsates */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: `0 0 25px 10px ${project.glowColor || 'rgba(255,255,255,0.4)'}` }}
                />
                
                {/* Category Tag */}
                <div className="absolute top-2 right-2 z-10">
                  <span className="text-xs px-2 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                
                <div className="overflow-hidden transition-all duration-300 group-hover:scale-110">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video"
                  />
                </div>
                <CardContent className="p-6 relative z-10">
                  <h3 
                    className="text-xl font-semibold mb-2 text-white"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary transition-transform duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        )}
        
        {/* Show All button if filtered */}
        {!isLoading && activeCategory !== "All" && (
          <motion.button
            className="mt-12 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
            onClick={() => handleCategoryChange("All")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            View All Projects
          </motion.button>
        )}
      </div>
      {/* Footer Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
    </section>
  );
}