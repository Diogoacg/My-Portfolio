import React from "react";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-4 py-2 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-purple-600/10 hover:to-blue-600/10 border border-transparent hover:border-purple-500/30 transition-all duration-300"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10 text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
        {title}
      </span>

      {/* Active indicator line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
      />
    </motion.a>
  );
};

export default NavLink;
