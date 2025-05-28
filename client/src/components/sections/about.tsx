import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-muted/50 overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-full"
          style={{ background: "radial-gradient(circle, rgba(40,0,60,0.6) 0%, rgba(10,10,30,0.4) 70%, transparent 100%)" }}
          animate={{ 
            rotate: 360,
            scale: [1, 0.95, 1]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {/* Header Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Animated Profile Image with Glowing Overlay */}
          <motion.div className="relative flex-1">
            <motion.img
              src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca"
              alt="Profile"
              className="rounded-full border-4 border-primary/20 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0, -3, 0] }}
              whileHover={{ scale: 1.1 }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 25px 10px rgba(100, 50, 200, 0.3)" }}
            />
          </motion.div>

          {/* Detailed Text & Tagline Section */}
          <motion.div className="flex-1 space-y-6">
            <motion.h2 
              className="text-5xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Who Am I?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ textShadow: "0 0 10px rgba(150,150,255,0.8)" }}
            >
              I create mesmerizing digital experiences that merge technology with art.
            </motion.p>
            <motion.div 
              className="p-6 rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              style={{ boxShadow: "0 0 30px rgba(200,200,255,0.3)" }}
            >
              <p className="text-lg text-gray-100" style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>
                With a deep passion for innovative technology and imaginative aesthetics, 
                I blend technical acumen with creative vision to craft experiences that not only solve problems 
                but also inspire and elevate the human spirit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Footer Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[rgba(40,0,60,0.8)] to-transparent backdrop-blur-xl pointer-events-none animate-glow"></div>
    </section>
  );
}
