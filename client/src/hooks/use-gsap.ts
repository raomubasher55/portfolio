import { useEffect } from "react";
import gsap from "gsap";

export function useGsapInit() {
  useEffect(() => {
    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from("h1", { 
        y: 30, 
        opacity: 0, 
        duration: 1,
        ease: "power3.out"
      })
      .from("p", { 
        y: 20, 
        opacity: 0, 
        duration: 0.8,
      }, "-=0.5")
      .from("button", { 
        y: 20,
        opacity: 0, 
        duration: 0.6,
      }, "-=0.4");

    return () => {
      heroTimeline.kill();
    };
  }, []);
}