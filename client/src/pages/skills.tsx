import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container">
          <motion.h1 
            className="text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                className="p-8 rounded-xl bg-card hover:bg-card/80 transition-colors"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-12 h-12 text-primary" />
                  <h3 className="text-2xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-lg text-muted-foreground">{skill.description}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-2">Related Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "TypeScript"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
