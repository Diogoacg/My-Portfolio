"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  SparklesIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden section-transparent"
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content (full width on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 lg:col-span-1 col-span-1 lg:text-left text-center"
          >
            {/* Status badge with animation - hidden on mobile */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="w-4 h-4 text-purple-400" />
              </motion.div>
              <span className="text-purple-300 text-sm font-medium">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading with unique styling */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-8xl font-black leading-none"
              >
                <span className="block text-white">DIOGO</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  GONÇALVES
                </span>
              </motion.h1>

              {/* Animated type writer with unique container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="relative"
              >
                <div className="hidden md:flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <motion.div
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <CodeBracketIcon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div className="h-[1px] w-12 bg-gradient-to-r from-purple-400 to-transparent"></div>
                </div>

                <TypeAnimation
                  sequence={[
                    "Software Engineer Student",
                    2000,
                    "Full-Stack Developer",
                    2000,
                    "Game Development Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                    "Code Architect",
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 min-h-[3rem]"
                />
              </motion.div>
            </div>

            {/* Description with unique styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full lg:block hidden"></div>
              <p className="text-lg text-gray-300 leading-relaxed lg:pl-6 max-w-lg mx-auto lg:mx-0">
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Per aspera ad astra.
                </span>
              </p>
            </motion.div>

            {/* CTA buttons with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-semibold text-white overflow-hidden"
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/cv/CV.pdf"
                download="CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-600 rounded-2xl font-semibold text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300 justify-center"
              >
                <DocumentArrowDownIcon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image with futuristic design (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="hidden lg:flex justify-center lg:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Outer ring animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-500/30"
              />

              {/* Middle ring animation */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-blue-500/20"
              />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <Image
                      src="/images/myImg.jpg"
                      alt="Diogo Gonçalves - Software Engineer"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating elements around image */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full opacity-40"
                />
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full opacity-50"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
