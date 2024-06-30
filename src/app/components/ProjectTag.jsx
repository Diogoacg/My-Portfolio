import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  // Estilos para o botão
  const buttonClasses =
    "rounded-full border-2 px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl cursor-pointer";

  return (
    <div className="m-2 flex items-center justify-center">
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
