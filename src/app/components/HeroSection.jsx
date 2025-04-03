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
    <section className="relative min-h-[90vh] flex items-center justify-center py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] mb-6"
          >
            <span>Software Engineer</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="gradient-text"
            >
              Hello, I'm 
            </motion.span>
            <br />
            {/* Fixed position container for type animation */}
            <div className="h-[2.5em] sm:h-[2em] lg:h-[1.5em] relative mb-6">
              <TypeAnimation
                sequence={[
                  "Diogo",
                  1000,
                  "a Software Engineer Student",
                  1000,
                  "a Game Developer Wannabe",
                  1000,
                  "a Backend Enthusiast",
                  1000,
                  "a Frontend Hobbyist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[rgb(var(--foreground))] absolute left-0 sm:left-0"
              />
            </div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[rgb(var(--muted-foreground))] text-base sm:text-lg mb-8 max-w-md mx-auto sm:mx-0"
          >
            Per aspera ad astra. Building elegant solutions to complex problems through code.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            <a href="#projects" className="btn-primary">
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
          className="col-span-1 sm:col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative">
            <div className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] relative mx-auto">
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
      
      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Scroll Down</span>
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;