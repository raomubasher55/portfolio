import { Link } from "wouter";
import { ChevronRight, Github, Linkedin, Facebook, Mail, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Languages", href: "/languages" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/raomubasher55", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raomubasher/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/raomubasher55", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-background/90 via-background/80 to-background backdrop-blur-2xl shadow-2xl z-50 border-t border-foreground/5">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-soft-light filter blur-3xl animate-move-x" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-soft-light filter blur-3xl animate-move-y" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="group relative">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Rao Mubasher
                </span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm max-w-xs leading-relaxed">
                Crafting meaningful digital experiences through code and creativity.
              </p>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-2">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
                Let's Connect
              </h3>
              <div className="flex flex-col gap-4">
                {/* Social Link Items with Labels */}
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group transition-colors duration-300"
                    >
                      <div className="p-2 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300 relative">
                        <Icon className="w-5 h-5 text-primary" />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5 group-hover:ring-primary/30 transition-all duration-300" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground group">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:raomubasher5555@gmail.com" className="hover:text-primary transition-colors duration-300">raomubasher5555@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground group">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+923241283937" className="hover:text-primary transition-colors duration-300">+92 324 1283937</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-foreground/5 text-center">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Rao Mubasher. Crafted with passion and
            <span className="mx-1.5 text-primary">♥</span>
            in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}