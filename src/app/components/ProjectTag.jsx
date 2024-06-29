import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  // Adjust these classes as needed for responsive layout
  const containerClasses = "flex items-center justify-center";
  const buttonClasses =
    "rounded-full border-2 px-6 py-3 text-xl cursor-pointer";

  return (
    <div className={`m-2 ${containerClasses}`}>
      <button
        className={`${buttonStyles} ${buttonClasses} md:min-w-[150px]`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
