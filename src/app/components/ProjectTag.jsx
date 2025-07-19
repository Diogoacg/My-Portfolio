import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`project-tag ${
        isSelected ? "project-tag-selected" : "project-tag-default"
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
