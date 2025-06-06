import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Moon, Sun, Github, Linkedin, Facebook, Phone } from "lucide-react";
import { useIsMobile, useBreakpoint } from "@/hooks/use-mobile";

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
    const isTablet = useBreakpoint('lg');
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
      <div className="absolute inset-0 pointer-events-none z-[-1] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-3xl"></div>

      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <span className="text-3xl ml-3 font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent 
              hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden
              before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-pink-500
              before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100
              after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/30 after:via-transparent after:to-transparent
              after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000
              [text-shadow:_0_2px_8px_rgba(99,102,241,0.3)]">
              Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {/* Main navigation */}
            <div className="flex items-center gap-2 md:gap-3 lg:gap-6">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`text-sm font-medium relative group cursor-pointer overflow-hidden
                    ${location === item.href ? "text-primary" : "text-foreground/90"}`}>
                    
                    <span className="relative z-10 block transition-colors duration-300 group-hover:text-primary px-2 md:px-3 py-2 font-bold text-sm md:text-base lg:text-lg">
                      {item.label}
                    </span>
                    
                    {/* Simple Underline */}
                    {location === item.href ? (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Contact and Social links */}
            <div className="flex items-center gap-2 border-l border-muted pl-2 md:pl-4">
              {/* Phone number */}
              <a 
                href="tel:+923241283937" 
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Call me"
              >
                <Phone size={18} className="md:w-4 md:h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80 hidden xl:inline">+92 324 1283937</span>
              </a>
              
              {/* Social Icons */}
              <a 
                href="https://github.com/raomubasher55" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-2 rounded-full hover:bg-muted/30 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="md:w-[18px] md:h-[18px] text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raomubasher/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-2 rounded-full hover:bg-muted/30 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="md:w-[18px] md:h-[18px] text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/raomubasher55" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-2 rounded-full hover:bg-muted/30 transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook size={20} className="md:w-[18px] md:h-[18px] text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
            
            {/* Theme toggle */}
            {/* <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group h-12 w-12 rounded-full
              bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20
              hover:bg-primary/30 transition-colors duration-300 
              shadow-lg
              flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
            <span className="absolute inset-0 rounded-full border border-primary/20 group-hover:border-primary/50 
              transition-colors duration-300" />
          </Button>

         

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-2xl border-t border-foreground/10
          overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }
          relative
          `}
      >
        <div className="container py-6 space-y-4">
          {/* Navigation items */}
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors duration-300
                bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5
                hover:from-primary/10 hover:via-purple-500/10 hover:to-pink-500/10
                relative overflow-hidden
                ${location === item.href ? "text-primary bg-primary/10" : "text-foreground/90"}`}>
                {item.label}
                {location === item.href && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </span>
                )}
              </span>
            </Link>
          ))}
          
          {/* Contact and Social Links */}
          <div className="mt-8 pt-4 border-t border-muted/20">
            <h3 className="px-6 text-sm font-semibold text-muted-foreground mb-4">Connect with me</h3>
            
            {/* Phone number - prominent placement */}
            <div className="mb-6 flex justify-center">
              <a 
                href="tel:+923241283937" 
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Phone size={20} className="text-primary" />
                <span className="text-sm font-medium">+92 324 1283937</span>
              </a>
            </div>
            
            {/* Social icons */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/raomubasher55" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/10 hover:bg-muted/30 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={22} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raomubasher/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/10 hover:bg-muted/30 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/raomubasher55" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/10 hover:bg-muted/30 transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook size={22} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Theme Toggle */}
          {/* <div className="flex justify-center mt-4">
            <button 
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 hover:bg-muted/30 transition-colors"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} />
                  <span className="text-sm">Light mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span className="text-sm">Dark mode</span>
                </>
              )}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}