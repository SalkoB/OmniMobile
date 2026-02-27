import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/2387dc83-07c9-4115-8a0e-0762eab13878_1771780774911.JPG";
import { Link, useLocation } from "wouter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = "/";
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImg} 
              alt="Omni Mobile Authorized Retailer" 
              className="h-10 sm:h-12 object-contain rounded"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/st-louis">
              <a className="font-medium text-foreground hover:text-primary transition-colors duration-200">
                Services
              </a>
            </Link>
            <button 
              onClick={() => scrollToSection("why-us")}
              className="font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Get Connected
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-xl py-6 px-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link href="/st-louis" onClick={() => setMobileMenuOpen(false)}>
            <a className="flex items-center text-foreground font-medium p-3 rounded-xl hover:bg-muted transition-colors">
              Services
            </a>
          </Link>
          <button 
            onClick={() => scrollToSection("why-us")}
            className="flex items-center text-left text-foreground font-medium p-3 rounded-xl hover:bg-muted transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex items-center text-left text-foreground font-medium p-3 rounded-xl hover:bg-muted transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="mt-2 w-full py-3.5 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
          >
            Get Connected
          </button>
        </div>
      )}
    </header>
  );
}
