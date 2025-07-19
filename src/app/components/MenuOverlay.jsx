import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, closeMenu }) => {
  const menuItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  // Floating particles for background
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 6 + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative py-8 px-6 overflow-hidden"
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-10, -30, -10],
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

      <ul className="relative z-10 flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={menuItemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full flex justify-center"
          >
            <motion.div
              onClick={closeMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full max-w-xs"
            >
              {/* Enhanced NavLink container */}
              <div className="relative p-4 rounded-2xl bg-gradient-to-r from-slate-800/30 to-purple-900/10 border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-300">
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Link */}
                <div className="relative z-10 text-center">
                  <a
                    href={link.path}
                    className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-2 right-2 w-2 h-2 bg-purple-400/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400/40 rounded-full"
                />
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-[1px] w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
      />
    </motion.div>
  );
};

export default MenuOverlay;
