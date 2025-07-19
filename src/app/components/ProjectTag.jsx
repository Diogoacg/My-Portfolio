import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-2xl border-2 flex items-center gap-3 font-semibold transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-purple-400/60 text-white shadow-lg shadow-purple-500/25"
          : "bg-gradient-to-r from-slate-800/30 to-purple-900/10 border-purple-500/20 text-gray-300 hover:border-purple-400/40 hover:text-white"
      }`}
      onClick={() => onClick(name)}
    >
      {/* Background glow effect */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-2xl blur-sm"
        />
      )}

      <motion.span
        animate={isSelected ? { rotate: [0, 360] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative z-10"
      >
        {icon}
      </motion.span>
      <span className="relative z-10 whitespace-nowrap">{name}</span>

      {/* Active indicator */}
      {isSelected && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
        />
      )}
    </motion.button>
  );
};

export default ProjectTag;
