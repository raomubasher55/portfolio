import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapInit } from "@/hooks/use-gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGsapInit();

  return (
    <main className="min-h-screen bg-background text-foreground">
    
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}