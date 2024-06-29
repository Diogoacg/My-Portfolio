import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl }) => {
  return (
    <div className="border-2 border-[#ADB7BE] rounded-xl overflow-hidden relative group shadow-xl opacity-70 hover:opacity-100 transition-opacity duration-500">
      <div className="bg-[#181818] relative p-4" style={{ minHeight: "150px" }}>
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-[#ADB7BE] overflow-hidden overflow-ellipsis">
          {description}
        </p>
        <Link
          href={gitUrl}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <CodeBracketIcon className="h-14 w-14 text-[#ADB7BE] hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
