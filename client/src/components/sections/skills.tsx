import { SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      {/* Header Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
      {/* Top Left Glowing Bulb */}
      <motion.div
        className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-transparent rounded-full"
        animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top Right Glowing Bulb */}
      <motion.div
        className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-bl from-pink-500 via-purple-500 to-transparent rounded-full"
        animate={{ x: [0, -8, 0], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Circus Moving Light - sweeps from left to right */}
      <motion.div
        className="absolute top-1/3 left-[-100px] w-64 h-64 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full filter blur-3xl opacity-40"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Circus Moving Light - sweeps from right to left */}
      {/* <motion.div
        className="absolute bottom-1/3 right-[-100px] w-64 h-64 bg-gradient-to-l from-transparent via-purple-500 to-transparent rounded-full filter blur-3xl opacity-40"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      /> */}
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-full"
          style={{ background: "radial-gradient(circle, rgba(100,50,150,0.2) 0%, rgba(0,0,0,0) 80%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="container flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300"
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Glowing overlay that pulsates */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 20px 5px rgba(255,255,255,0.3)" }}
              />

              <skill.icon className="w-12 h-12 mb-4 text-primary" />

              <motion.h3 
                className="font-semibold mb-2 text-white"
                style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                animate={{ textShadow: ["0 0 8px rgba(255,255,255,0.6)", "0 0 12px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.6)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {skill.name}
              </motion.h3>

              <motion.p 
                className="text-sm text-gray-300"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Footer Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
    </section>
  );
}