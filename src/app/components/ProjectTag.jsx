import React from "react";

const ProjectTag = ({ name, onClick, isSelected, icon }) => {
  const buttonStyles = isSelected
    ? "bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] border-[rgb(var(--primary))]"
    : "text-[rgb(var(--muted-foreground))] border-[rgb(var(--border))] hover:border-[rgb(var(--foreground))]";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2.5 flex items-center gap-2 transition-all`}
      onClick={() => onClick(name)}
    >
      {icon && <span>{icon}</span>}
      <span className="text-base font-medium whitespace-nowrap">{name}</span>
    </button>
  );
};

export default ProjectTag;