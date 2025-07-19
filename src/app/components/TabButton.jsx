import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children, icon }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex flex-col items-center px-6 py-3 rounded-xl transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/50"
          : "bg-gradient-to-r from-slate-800/30 to-purple-900/10 border border-purple-500/20 hover:border-purple-400/40"
      }`}
    >
      <div className="flex items-center gap-2 font-medium">
        <motion.span
          animate={active ? { rotate: [0, 360] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={active ? "text-purple-400" : "text-gray-400"}
        >
          {icon}
        </motion.span>
        <p
          className={`whitespace-nowrap font-semibold ${
            active ? "text-white" : "text-gray-300"
          }`}
        >
          {children}
        </p>
      </div>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mt-2 w-full rounded-full"
      />

      {/* Glowing effect when active */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-xl blur-sm"
        />
      )}
    </motion.button>
  );
};

export default TabButton;
