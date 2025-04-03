"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[90vh] -mt-16 sm:-mt-24">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-12 gap-8 px-4 md:px-6 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 sm:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left order-2 sm:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] mb-4 sm:mb-6"
          >
            <span>Software Engineer</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="gradient-text"
            >
              Hello, I&apos;m
            </motion.span>
            <br />
            {/* Fixed position container for type animation with proper spacing */}
            <div className="h-[2.8rem] sm:h-[4rem] lg:h-[5rem] relative mb-6 sm:mb-8 w-full">
                <TypeAnimation
                  sequence={[
                    "Diogo Gonçalves",
                    1000,
                    "Software Engineer Student",
                    1000,
                    "Game Developer Wannabe",
                    1000,
                    "Backend Enthusiast",
                    1000,
                    "Frontend Hobbyist",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl sm:text-3xl lg:text-4xl text-[rgb(var(--foreground))] absolute sm:left-0 whitespace-nowrap left-1/2 sm:transform-none transform -translate-x-1/2 sm:translate-x-0"
                  style={{ display: 'inline-block', lineHeight: 1.2 }}
                />
            </div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[rgb(var(--muted-foreground))] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md mx-auto sm:mx-0"
          >
            Per aspera ad astra. Building elegant solutions to complex problems through code.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto"
          >
            <a href="#projects" className="btn-primary text-center">
              View My Work
            </a>
            
            <a
              href="/cv/CV.pdf"
              download="CV.pdf"
              className="px-6 py-3 flex items-center justify-center gap-2 border border-[rgb(var(--muted))] rounded-full hover:bg-[rgba(var(--muted),0.1)] transition-all"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-1 sm:col-span-5 flex items-center justify-center order-1 sm:order-2 mb-6 sm:mb-0"
        >
          <div className="relative">
            <div className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-2xl opacity-30"
              ></motion.div>
              <motion.div 
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="relative rounded-full overflow-hidden border-4 border-[rgb(var(--background))] shadow-xl"
              >
                <Image
                  src="/images/myImg.jpg"
                  alt="Portrait of Diogo"
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down button - visible only on sm screens and above */}
      <div className="absolute bottom-4 sm:bottom-10 w-full hidden sm:flex justify-center">
        <motion.a
          href="#about"
          onClick={handleScrollDown}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Scroll Down</span>
          <ArrowDownIcon className="h-6 w-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;