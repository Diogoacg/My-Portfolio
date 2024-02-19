import React from "react";

const ProjectCard = ({
  img,
  name = "Project Name",
  description = "Description",
  onClick,
}) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h1 className="mt-5 text-3xl font-medium text-blue-600">{name}</h1>
      <h2 className="text-xl opacity-75">{description}</h2>
    </div>
  );
};

export default ProjectCard;
