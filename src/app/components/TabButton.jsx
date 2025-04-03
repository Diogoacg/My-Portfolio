import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children, icon }) => {
  const buttonClasses = active 
    ? "text-[rgb(var(--primary))]" 
    : "text-[rgb(var(--muted-foreground))]";

  return (
    <button 
      onClick={selectTab}
      className={`flex flex-col items-center px-4 py-2 ${active ? 'bg-[rgba(var(--primary),0.1)]' : ''} rounded-lg hover:bg-[rgba(var(--muted),0.1)] transition-colors`}
    >
      <div className="flex items-center gap-2 font-medium">
        <span className={buttonClasses}>{icon}</span>
        <p className={`${buttonClasses} whitespace-nowrap`}>
          {children}
        </p>
      </div>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-[rgb(var(--primary))] mt-2 w-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;