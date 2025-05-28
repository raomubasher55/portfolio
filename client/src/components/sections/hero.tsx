import Scene3D from "@/components/3d/scene";
import { motion } from "framer-motion";
import me from '@/assets/me.jpg';



export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 py-12">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display font-sans dark:text-blue-500 text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
              style={{ textShadow: "0 0 10px rgba(0,255,0,0.8)" }}
            >
              Rao Mubasher
            </motion.h2>

            <motion.h1 
              className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent
                        animate-text-gradient bg-[length:200%_auto]"
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Full-Stack Developer
            </motion.h1>
            
            <motion.p 
              className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light tracking-wide 
                        [text-shadow:_0_2px_8px_rgba(255,255,255,0.3)] space-y-4 max-w-2xl mx-auto md:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span 
                className="inline-block mr-2 animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
              
              <span className="relative inline-block group font-sans font-bold">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent relative z-10">
                  Specializing in
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              </span>

              <motion.span 
                className="font-bold font-sans bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent block mt-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                MERN Stack, Mobile, Blockchain & AI Development
              </motion.span>
            </motion.p>

            <motion.button
              className="btn relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-primary text-primary-foreground
                         hover:scale-105 hover:shadow-2xl transition-all duration-300 group mx-auto md:mx-0"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0] 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-600/30 to-pink-500/30 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-xl opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 animate-pulse" />
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-70 animate-pulse-slow"></div>
              <motion.img
                src={me}
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/20 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-background to-transparent backdrop-blur-lg pointer-events-none"></div>
    </section>
  );
}