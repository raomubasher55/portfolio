import { useEffect, useState } from "react";
import gsap from "gsap";

export function useGsapInit() {
  // Use state to track if this is server-side or client-side
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only run once and only on client
    if (hasInitialized) return;
    setHasInitialized(true);
    
    // Delay GSAP animations to improve First Contentful Paint
    const timer = setTimeout(() => {
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
    }, 100); // Small delay for better performance
    
    return () => {
      clearTimeout(timer);
    };
  }, [hasInitialized]);
}