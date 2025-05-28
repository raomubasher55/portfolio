import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4
    }
  }
};

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  
  const filteredProjects = selectedTech
    ? PROJECTS.filter(p => p.technologies.includes(selectedTech))
    : PROJECTS;

  const allTechnologies = Array.from(
    new Set(PROJECTS.flatMap(p => p.technologies))
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container">
          <motion.h1 
            className="text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedTech 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              All
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedTech === tech 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedTech || 'all'}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  layoutId={project.title}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="overflow-hidden h-full">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                      />
                    </motion.div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className={`text-sm px-3 py-1 rounded-full ${
                              tech === selectedTech 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-primary/10 text-primary'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
