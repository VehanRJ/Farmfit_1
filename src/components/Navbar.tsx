"use client";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

 const isActive = (path: string) => {
  if (path === "/") {
    return location.pathname === "/";
  }
  return location.pathname.startsWith(path);
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 w-max sm:w-auto mb-6 sm:pt-6">
      <div className="flex items-center justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
  to="/"
  className="fixed top-4 flex left-[-49vh] items-center space-x-2 group z-50 backdrop-blur-md bg-white/20 px-3 py-2 rounded-lg shadow-lg"
>
  <div className="p-2 rounded-lg hero-gradient group-hover:opacity-90 transition-smooth">
    <Sprout className="h-6 w-6 text-white" />
  </div>
  <span className="text-xl font-bold text-gradient">AgriWatch AI</span>
</Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg w-[91.6vh] ml-4 mr-4 ">
          {navItems.map((item) => {
            const isTabActive = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isTabActive && "bg-muted text-primary"
                )}
              >
                <span>{item.name}</span>
                {isTabActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}

          <Button onClick={handleLogin} variant="hero" size="sm">
            Login/Signup
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 shadow-lg border border-border">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setIsOpen(false);
                setActiveTab(item.name);
              }}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-smooth",
                isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              onClick={handleLogin}
              variant="hero"
              size="sm"
              className="w-full"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
