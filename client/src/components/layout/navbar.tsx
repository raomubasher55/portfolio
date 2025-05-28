import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight , Moon ,Sun } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Languages", href: "/languages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

   const isMobile = useIsMobile();
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Check if dark mode is enabled on initial load
    useEffect(() => {
      // Set dark mode by default
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }, []);
  
    // Toggle dark mode
    const toggleDarkMode = () => {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <nav
      className={`sticky top-0 z-50 relative transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1"
          : "bg-background/90 backdrop-blur-xl hover:shadow-xl"
      }`}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 pointer-events-none z-[-1] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl animate-pulse-slow"></div>

      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <span className="text-3xl ml-3 font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent 
              hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden
              before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-pink-500
              before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/30 after:via-transparent after:to-transparent
              after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000
              [text-shadow:_0_2px_8px_rgba(99,102,241,0.3)]
              animate-float">
              Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-sm font-medium relative group cursor-pointer overflow-hidden
                  ${location === item.href ? "text-primary" : "text-foreground/90"}`}>
                  
                  <span className="relative z-10 block transition-all duration-500 group-hover:text-primary px-3 py-2 font-bold text-lg
                    group-hover:[transform:rotateX(15deg)_skewY(-3deg)_translateZ(30px)_scale(1.05)]">
                    {item.label}
                  </span>
                  
                  {/* Fire Effect Underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[length:200%_100%] 
                    bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
                    transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700
                    ${location !== item.href ? "animate-gradient-flow w-full" : "w-1/2 bg-gradient-to-r from-primary via-purple-500 to-pink-500"}
                    group-hover:opacity-100 ${location === item.href ? "opacity-100" : "opacity-0"}`} />
                  
                  {/* Original Underline for Active State */}
                  {location === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                  )}
                  
                  {/* Existing effects */}
                  <span className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_#6366f180_0%,_transparent_100%)]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse`} />
                  
                  <span className="absolute inset-0 border-2 border-primary/20 rounded-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 [box-shadow:_0_0_30px_rgba(99,102,241,0.2)]" />
                </span>
              </Link>
            ))}
             <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group h-14 w-14 rounded-full
              bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20
              hover:bg-primary/30 transition-all duration-500 
              before:absolute before:inset-0 before:rounded-full before:border-2
              before:border-primary/30 before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-pink-500
              before:opacity-0 before:transition-opacity before:duration-500
              hover:before:opacity-40 hover:before:animate-gradient-flow
              shadow-2xl hover:shadow-primary/30
              after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_80%)]
              after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-20
              animate-pulse-slow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-7 h-7 text-primary animate-spin-in" />
            ) : (
              <Menu className="w-7 h-7 text-primary animate-bounce" />
            )}
            <span className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 
              transition-colors duration-300" />
          </Button>

         

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-2xl border-t border-foreground/10
          overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0" }
          bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent 
              hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden
              before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-pink-500
              before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/30 after:via-transparent after:to-transparent
              after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000
              [text-shadow:_0_2px_8px_rgba(99,102,241,0.3)]
              animate-float
          `}
      >
        <div className="container py-6 space-y-4 ">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span className={`block py-4 px-6 text-lg font-medium rounded-xl transition-all duration-500
                bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5
                hover:from-primary/20 hover:via-purple-500/20 hover:to-pink-500/20
                hover:translate-x-4 hover:shadow-2xl relative overflow-hidden
                before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-6
                before:bg-primary before:opacity-0 before:transition-all before:duration-300
                hover:before:opacity-100 hover:before:translate-x-3
                after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,_#ffffff_10%,_transparent_100%)]
                after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-10
                ${location === item.href ? "text-primary bg-primary/20" : "text-foreground/90"}
                delay-${index * 100}`}>
                {item.label}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-primary animate-slide-in-spring" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}