"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Theme toggler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled 
          ? "bg-[rgba(var(--background),0.8)] backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        <Link href={"/"} className="text-2xl font-bold gradient-text">
          Diogo Gonçalves
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
          
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="rounded-full p-2 bg-[rgba(var(--muted),0.5)] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-all"
          >
            {theme === "dark" ? 
              <SunIcon className="h-5 w-5" /> : 
              <MoonIcon className="h-5 w-5" />
            }
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="rounded-full p-2 mr-3 bg-[rgba(var(--muted),0.5)] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-all"
          >
            {theme === "dark" ? 
              <SunIcon className="h-5 w-5" /> : 
              <MoonIcon className="h-5 w-5" />
            }
          </button>
          
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-md bg-[rgba(var(--muted),0.5)] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-all"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </motion.nav>
  );
};

export default Navbar;