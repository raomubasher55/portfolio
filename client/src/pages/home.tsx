import { useEffect, lazy, Suspense } from "react";
import Hero from "@/components/sections/hero";
// Lazy load non-critical components
const About = lazy(() => import("@/components/sections/about"));
const Skills = lazy(() => import("@/components/sections/skills"));
const Projects = lazy(() => import("@/components/sections/projects"));
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapInit } from "@/hooks/use-gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGsapInit();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero is critical for first paint, don't lazy load */}
      <Hero />
      
      {/* Lazy load components below the fold with suspense fallbacks */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>}>
        <About />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>}>
        <Projects />
      </Suspense>
    </main>
  );
}