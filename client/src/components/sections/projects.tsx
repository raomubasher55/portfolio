import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

export default function Projects() {
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
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="group transition-all duration-300"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={item}
              whileHover={{ 
                scale: 1.05,
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
                  style={{ boxShadow: "0 0 25px 10px rgba(255,255,255,0.4)" }}
                />
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 relative z-10">
                  <h3 
                    className="text-xl font-semibold mb-2 text-white"
                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
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
      </div>
      {/* Footer Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
    </section>
  );
}