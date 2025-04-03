"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  BeakerIcon 
} from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "VerseRunners",
    description: "A single-player, platformer, speedrunning game",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/GameDemo_VerseRunners",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "F1 Data",
    description: "A Formula 1 data visualization project",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/F1Data",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "IA Project",
    description: "University project for the IA course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/IA",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "POO Project",
    description: "University project for the POO (Object-oriented programming) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/POO",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "SO Project",
    description: "University Operating Systems project",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/SO",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Portfolio (this website)",
    description: "My personal portfolio website",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/My-Portfolio",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 7,
    title: "A Coffee Manager App",
    description: "A coffee shop management app (React Native + Expo, still in progress)",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/Willows",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 8,
    title: "CG Project",
    description: "University project for the CG (Computer Graphics) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/CG24-main",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 9,
    title: "SD Project",
    description: "University project for the SD (Distributed Systems) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/SD",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 10,
    title: "F1 Hub",
    description: "A Formula 1 web application with AI and data visualization (Hackathon project)",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/F1Hub-Hackathon-BugsByte",
    icon: <BeakerIcon className="h-5 w-5" />,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl font-bold gradient-text mb-8 md:mb-12">
          My Projects
        </h2>
        
        <div className="flex flex-wrap justify-center items-center py-6 gap-3">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            icon={<CodeBracketIcon className="h-5 w-5" />}
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="University"
            icon={<AcademicCapIcon className="h-5 w-5" />}
            isSelected={tag === "University"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Individual"
            icon={<BeakerIcon className="h-5 w-5" />}
            isSelected={tag === "Individual"}
          />
        </div>
      </motion.div>
      
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="h-full" // Ensure parent wrapper has full height
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              icon={project.icon}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;