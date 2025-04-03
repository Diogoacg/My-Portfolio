import React from "react";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl, icon }) => {
  return (
    <div className="h-full flex flex-col bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-all shadow-lg">
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div className="bg-[rgba(var(--primary),0.1)] p-2 rounded-lg">
            {icon || <CodeBracketIcon className="h-5 w-5 text-[rgb(var(--primary))]" />}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[rgb(var(--muted-foreground))] flex-1">{description}</p>
        
        <div className="mt-4 pt-3 border-t border-[rgb(var(--border))]">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[rgb(var(--primary))] hover:underline"
          >
            <CodeBracketIcon className="h-5 w-5" />
            <span>View Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;