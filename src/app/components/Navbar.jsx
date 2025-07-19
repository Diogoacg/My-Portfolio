"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
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
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode como padrão

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme persistence - Dark mode como padrão
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Default to dark mode - não seta nada, deixa o CSS padrão
      setIsDarkMode(true);
      // Remove qualquer atributo de tema para usar o padrão (dark)
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    if (newTheme === "dark") {
      // Remove o atributo para usar o CSS padrão (dark mode)
      document.documentElement.removeAttribute("data-theme");
    } else {
      // Adiciona o atributo para light mode
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", newTheme);
  };

  // Close mobile menu when clicking a link or when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && navbarOpen) {
        setNavbarOpen(false);
      }
    };

    // Handle body overflow to prevent scrolling when menu is open
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [navbarOpen]);

  // Dynamic navbar classes based on theme
  const getNavbarClasses = () => {
    const baseClasses =
      "fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300";

    if (scrolled || navbarOpen) {
      return isDarkMode
        ? `${baseClasses} bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10`
        : `${baseClasses} navbar-light bg-white/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10`;
    }

    return `${baseClasses} bg-transparent`;
  };

  const getButtonClasses = () => {
    return isDarkMode
      ? "bg-gradient-to-r from-slate-800/50 to-purple-900/20 border border-purple-500/30 hover:border-purple-400/50"
      : "bg-gradient-to-r from-white/80 to-purple-50/30 border border-purple-500/30 hover:border-purple-400/50 shadow-md";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={getNavbarClasses()}
    >
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo with futuristic styling */}
        <Link href={"/"} onClick={() => setNavbarOpen(false)}>
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <motion.h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Diogo Gonçalves
            </motion.h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded border border-purple-400/20 opacity-0 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${getButtonClasses()}`}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-purple-600" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${getButtonClasses()}`}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-4 w-4 text-yellow-400" />
              ) : (
                <MoonIcon className="h-4 w-4 text-purple-600" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${getButtonClasses()}`}
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: navbarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {navbarOpen ? (
                <XMarkIcon
                  className={`h-6 w-6 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                />
              ) : (
                <Bars3Icon
                  className={`h-6 w-6 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: navbarOpen ? 1 : 0,
          height: navbarOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden backdrop-blur-md border-t border-purple-500/20 ${
          isDarkMode ? "bg-slate-900/95" : "bg-white/95"
        }`}
      >
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
          />
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
