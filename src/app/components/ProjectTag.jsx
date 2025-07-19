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
      <motion.span
        animate={isSelected ? { rotate: [0, 360] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative z-10"
      >
        {icon}
      </motion.span>
      <span className="relative z-10 whitespace-nowrap">{name}</span>
    </motion.button>
  );
};

export default ProjectTag;
