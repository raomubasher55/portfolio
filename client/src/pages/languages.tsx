import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Server, 
  Brain, 
  Layout, 
  Zap, 
  Shield 
} from 'lucide-react';

// Sample languages data with quotes
const languages = [
  { name: "JavaScript", icon: <Code />, level: "Advanced", quote: "The caffeine of web development", color: "from-yellow-400 to-amber-500" },
  { name: "React", icon: <Layout />, level: "Advanced", quote: "UI magic in component form", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: <Server />, level: "Advanced", quote: "JavaScript's server-side party", color: "from-green-400 to-emerald-500" },
  { name: "Express", icon: <Zap />, level: "Advanced", quote: "APIs faster than lightning", color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", icon: <Code />, level: "Advanced", quote: "Drugs for developers who crave types", color: "from-blue-400 to-indigo-500" },
  { name: "Python", icon: <Code />, level: "Intermediate", quote: "Code that reads like poetry", color: "from-blue-400 to-yellow-500" },
  { name: "Mobile Dev", icon: <Smartphone />, level: "Intermediate", quote: "Apps in your pocket, literally", color: "from-purple-400 to-pink-500" },
  { name: "Blockchain", icon: <Shield />, level: "Intermediate", quote: "Trust me, it's decentralized", color: "from-indigo-400 to-purple-500" },
  { name: "AI Development", icon: <Brain />, level: "Intermediate", quote: "Teaching machines to think", color: "from-cyan-500 to-teal-500" },
];

export default function Languages() {
  return (
    <section className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="container mx-auto  z-10 pt-9">
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent
                    animate-text-gradient bg-[length:200%_auto]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Technologies & Skills
        </motion.h1>

        {/* Header Blur Overlay */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>

        {/* Top Left Glowing Bulb */}
        <motion.div
          className="absolute top-24 left-4 w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-transparent rounded-full"
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top Right Glowing Bulb */}
        <motion.div
          className="absolute top-24 right-4 w-12 h-12 bg-gradient-to-bl from-pink-500 via-purple-500 to-transparent rounded-full"
          animate={{ x: [0, -8, 0], y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Circus Moving Light - sweeps from left to right */}
        <motion.div
          className="absolute top-1/3 left-[-100px] w-64 h-64 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full filter blur-3xl opacity-30"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Circus Moving Light - sweeps from right to left */}
        <motion.div
          className="absolute bottom-1/3 right-[-100px] w-64 h-64 bg-gradient-to-l from-transparent via-purple-500 to-transparent rounded-full filter blur-3xl opacity-30"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated Glowing Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(40,0,60,0.3) 0%, rgba(10,10,30,0.2) 70%, transparent 100%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              className="relative group overflow-hidden rounded-xl p-6 bg-white/10 border border-primary/20 backdrop-blur-md shadow-lg transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(255,255,255,0.3)",
                transition: { duration: 0.2 }
              }}
            >
              {/* Glowing overlay that pulsates */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 20px 5px rgba(255,255,255,0.2)" }}
              />

              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${lang.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4 relative z-10 text-white"
                animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
                whileHover={{ rotate: [0, -5, 5, -3, 0] }}
              >
                {lang.icon}
              </motion.div>

              {/* Language Name */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-10 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {lang.name}
              </h3>

              {/* Proficiency Level */}
              <p className="text-muted-foreground text-sm md:text-base relative z-10">
                {lang.level}
              </p>

              {/* Quote */}
              <p className="text-muted-foreground text-xs md:text-sm relative z-10 mt-2 italic">
                "{lang.quote}"
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-xl opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-background to-transparent backdrop-blur-lg pointer-events-none" />
    </section>
  );
}